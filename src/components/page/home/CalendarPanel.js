import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

class CalendarPanel extends Component {
  render() {
    const { event } = this.props;
    if (!this.props.noEvent) {
      return (
        <div>
          <div className="card">
            {this.props.event.banner[0] ? (
              <div className="card-image">
                <img
                  src={`/api/upload/image/${
                    this.props.event.banner[0].filename
                  }`}
                  alt="Event Img"
                />
              </div>
            ) : (
              ""
            )}
            <div className="card-content">
              <span className="card-title blue-text text-darken-4">
                {event.title}
              </span>
              <p className="blue-text text-darken-4">{event.club.name}</p>
              <p>
                <strong>
                  {event.eventType.name} | {event.eventCategory.name}
                </strong>
              </p>
              <p>
                {event.oneDayOnly
                  ? moment(event.dateOfEvent, "MM-DD-YYYY").format(
                      "DD MMMM, YYYY"
                    )
                  : `${moment(event.from, "MM-DD-YYYY").format(
                      "DD MMMM, YYYY"
                    )} to ${moment(event.to, "MM-DD-YYYY").format(
                      "DD MMMM, YYYY"
                    )} `}
              </p>
            </div>
            <div className="card-action">
              <Link to={`/event/${event._id}`}>
                <u>Read more ...</u>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="card">
            <div className="card-content">
              <p>No event on this date.</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CalendarPanel;
