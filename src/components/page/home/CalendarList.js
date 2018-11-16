import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import moment from "moment";

import { getEvents } from "../../../actions/events";

import Header from "../../layout/Header";
import CalendarPanel from "./CalendarPanel";

class CalendarList extends Component {
  state = {
    activeMonth: "",
    activeYear: "",
    activeEvents: []
  };

  componentDidMount() {
    const month = moment().format("MMMM");
    const year = moment().format("YYYY");
    this.setState({ activeMonth: month, activeYear: year });
    this.props.getEvents();
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { events } = nextProps;
    const daysInMonth = moment(
      this.state.activeYear +
        "-" +
        moment(this.state.activeMonth, "MMMM").format("MM"),
      "YYYY-MM"
    ).daysInMonth();
    console.log(daysInMonth);
    const activeEvents = this.filterEvents(events);
    console.log(activeEvents);
    this.setState({ activeEvents: activeEvents });
  }

  filterMonthlyEvents = () => {
    const { events } = this.props;
    const activeEvents = this.filterEvents(events);
    this.setState({ activeEvents: activeEvents });
  };

  filterEvents = events => {
    const activeEvents = events.filter(event => {
      return (
        (moment(event.from) >=
          moment(
            moment(this.state.activeMonth, "MMMM").format("MM") +
              "-01-" +
              this.state.activeYear,
            "MM-DD-YYYY"
          ) &&
          moment(event.from) <=
            moment(
              moment(this.state.activeMonth, "MMMM").format("MM") +
                "-" +
                30 +
                "-" +
                this.state.activeYear,
              "MM-DD-YYYY"
            )) ||
        (moment(event.dateOfEvent) >=
          moment(
            moment(this.state.activeMonth, "MMMM").format("MM") +
              "-01-" +
              this.state.activeYear,
            "MM-DD-YYYY"
          ) &&
          moment(event.dateOfEvent) <=
            moment(
              moment(this.state.activeMonth, "MMMM").format("MM") +
                "-" +
                30 +
                "-" +
                this.state.activeYear,
              "MM-DD-YYYY"
            ))
      );
    });
    return activeEvents;
  };

  render() {
    const { activeEvents } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <div className="col s12 m3">
              <select className="browser-default" defaultValue="">
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="collection">
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "January" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "January" });
                  }}
                >
                  January
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "February" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "February" });
                  }}
                >
                  February
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "March" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "March" });
                  }}
                >
                  March
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "April" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "April" });
                  }}
                >
                  April
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "May" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "May" });
                  }}
                >
                  May
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "June" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "June" });
                  }}
                >
                  June
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "July" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "July" });
                  }}
                >
                  July
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "August" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "August" });
                  }}
                >
                  August
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "September" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "September" });
                  }}
                >
                  September
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "October" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.filterMonthlyEvents();
                    this.setState({ activeMonth: "October" });
                  }}
                >
                  October
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "November" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.filterMonthlyEvents();
                    this.setState({ activeMonth: "November" });
                  }}
                >
                  November
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "December" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeMonth: "December" });
                  }}
                >
                  December
                </a>
              </div>
            </div>
            <div className="col s12 m9">
              <h4 style={{ margin: ".3rem 0 .912rem 0" }}>Events</h4>
              {activeEvents.length > 0 ? (
                activeEvents.map(event => {
                  return (
                    <CalendarPanel
                      key={event._id}
                      event={event}
                      noEvent={false}
                      list={true}
                    />
                  );
                })
              ) : (
                <CalendarPanel key={0} noEvent={true} list={true} />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CalendarList.propTypes = {
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(
  mapStateToProps,
  { getEvents }
)(CalendarList);
