import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import moment from "moment";

import { getEvents, getEventsByMonth } from "../../../actions/events";

import Header from "../../layout/Header";
import CalendarPanel from "./CalendarPanel";
import ViewActionButton from "../../util/ViewActionButton";

class CalendarList extends Component {
  state = {
    activeMonth: "",
    activeYear: "",
    activeEvents: []
  };

  componentDidMount() {
    const dateNow = moment();
    const month = dateNow.format("MM");
    const year = dateNow.format("YYYY");
    this.setState({ activeMonth: dateNow.format("MMMM"), activeYear: year });

    this.onMonthChange(month, year);
  }

  onMonthChange = (month, year) => {
    const daysInMonth = moment(year + "-" + month, "YYYY-MM").daysInMonth();
    this.props.getEventsByMonth({
      fromDay: month + "-01-" + year,
      toDay: month + "-" + daysInMonth + "-" + year
    });
  };

  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <div className="col s12 m3">
              <ViewActionButton active="list" />
              <select
                className="browser-default"
                defaultValue={moment().format("YYYY")}
              >
                <option value="" disabled>
                  Choose Year
                </option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
              </select>
              <div className="collection">
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "January" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.onMonthChange(
                      moment("January", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("February", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("March", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("April", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
                    this.setState({ activeMonth: "April" });
                  }}
                >
                  April
                </a>
                <a
                  href="#!"
                  className={`collection-item blue-text text-darken-4 ${
                    this.state.activeMonth === "April" ? "active" : ""
                  }`}
                  onClick={() => {
                    this.onMonthChange(
                      moment("April", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
                    this.setState({ activeMonth: "April" });
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
                    this.onMonthChange(
                      moment("June", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("July", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("August", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("September", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("October", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("November", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
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
                    this.onMonthChange(
                      moment("December", "MMMM").format("MM"),
                      moment().format("YYYY")
                    );
                    this.setState({ activeMonth: "December" });
                  }}
                >
                  December
                </a>
              </div>
            </div>
            <div className="col s12 m9">
              <h4 style={{ margin: ".3rem 0 .912rem 0" }}>Events</h4>
              {events.length > 0 ? (
                events.map(event => {
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
  getEvents: PropTypes.func.isRequired,
  getEventsByMonth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(
  mapStateToProps,
  { getEvents, getEventsByMonth }
)(CalendarList);
