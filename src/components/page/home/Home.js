import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";

import { getEvents } from "../../../actions/events";

import Header from "../../layout/Header";
import Calendar from "./Calendar";
import CalendarPanel from "./CalendarPanel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarEvents: [],
      events: [],
      list: [],
      dateClicked: "",
      selectedEvents: [],
      goToDate: ""
    };
  }
  componentDidMount() {
    this.props.getEvents();
  }

  componentWillReceiveProps(nextProps, nextState) {
    let evs = [];
    if (nextProps.events) {
      const { events } = nextProps;
      events.forEach(event => {
        evs.push({
          title: event.title,
          allDay: event.isWholeDay,
          start: event.oneDayOnly
            ? moment(event.dateOfEvent, "MM-DD-YYYY")
            : moment(event.from, "MM-DD-YYYY"),
          end: event.oneDayOnly
            ? ""
            : moment(event.to, "MM-DD-YYYY").add(1, "d")
        });
      });
      this.setState({ calendarEvents: evs, events: events });
      this.filterEvents(events, moment(), moment().format("MM-DD-YYYY"));
    }
  }

  dayClick = (date, jsEvent, view) => {
    const dateClicked = moment(date, "x").format("MM-DD-YYYY");
    const { events } = this.props;
    this.filterEvents(events, date, dateClicked);
  };

  filterEvents = (events, date, dateClicked) => {
    const s = events.filter(event => {
      return moment(date).isBetween(
        moment(event.oneDayOnly ? event.dateOfEvent : event.from, "MM-DD-YYYY"),
        moment(
          event.oneDayOnly ? event.dateOfEvent : event.to,
          "MM-DD-YYYY"
        ).add(1, "d")
      );
    });
    this.setState({ selectedEvents: s, dateClicked: dateClicked });
  };

  render() {
    const { calendarEvents, dateClicked, selectedEvents } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="container" style={{ marginTop: "10px" }}>
          {/* <h4>Calendar of Events</h4> */}
          <div className="row">
            <div className="col s12 m8">
              <Calendar
                calendarEvents={calendarEvents}
                dayClick={this.dayClick}
                goToDate={dateClicked}
              />
            </div>
            <div className="col s12 m4">
              <div className="row">
                <div className="col sm6 m6">
                  <h6>List of Events</h6>
                </div>
                <div className="col sm6 m6">
                  <h6 className="right-align">
                    <strong>
                      {dateClicked
                        ? dateClicked
                        : moment().format("MM-DD-YYYY")}
                    </strong>
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col sm12 m12 calendar-panel-container">
                  {selectedEvents.length > 0 ? (
                    selectedEvents.map(event => {
                      return (
                        <CalendarPanel
                          key={event._id}
                          event={event}
                          noEvent={false}
                        />
                      );
                    })
                  ) : (
                    <CalendarPanel key={0} noEvent={true} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Home);
