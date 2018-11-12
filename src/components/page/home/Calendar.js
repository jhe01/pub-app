import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import FullCalendar from "fullcalendar-reactwrapper";

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ events: this.props.calendarEvents });
    }, 500);
  }

  render() {
    return (
      <FullCalendar
        id="calendar"
        dayClick={this.props.dayClick}
        events={this.state.events}
        eventColor="#0D47A1"
        fixedWeekCount={true}
        eventLimit={true}
        selectable={true}
        defaultDate={
          this.props.goToDate
            ? this.props.goToDate
            : moment().format("YYYY-MM-DD")
        }
      />
    );
  }
}

Calendar.propTypes = {
  calendarEvents: PropTypes.array.isRequired
};

export default Calendar;
