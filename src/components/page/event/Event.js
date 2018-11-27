import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getEvent } from "../../../actions/events";
import moment from "moment";

import Header from "../../layout/Header";

class Event extends Component {
  state = {
    title: "",
    club: {},
    dateOfEvent: "",
    from: "",
    to: "",
    eventType: {},
    eventCategory: {},
    numberOfPlayers: "",
    details: "",
    oneDayOnly: false,
    banner: []
  };
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.event) {
      const {
        title,
        club,
        dateOfEvent,
        from,
        to,
        eventType,
        eventCategory,
        numberOfPlayers,
        details,
        oneDayOnly,
        banner
      } = nextProps.event;

      this.setState({
        title,
        club,
        dateOfEvent,
        from,
        to,
        eventType,
        eventCategory,
        numberOfPlayers,
        details,
        oneDayOnly,
        banner
      });
    }
  }
  componentDidMount() {
    this.props.getEvent(this.props.match.params.id);
  }

  render() {
    const {
      title,
      club,
      dateOfEvent,
      from,
      to,
      eventType,
      eventCategory,
      numberOfPlayers,
      details,
      oneDayOnly,
      banner
    } = this.state;

    const createMarkUp = () => {
      return { __html: details !== "" ? details : "No Details." };
    };
    return (
      <React.Fragment>
        <Header />
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            <div className="col s12 m4">
              <div className="card event-card">
                {banner[0] ? (
                  <div className="card-image">
                    <img
                      src={`/api/upload/image/${banner[0].filename}`}
                      alt="Event Img"
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="card-content">
                  <span className="card-title blue-text text-darken-4">
                    <strong>{title}</strong>
                  </span>
                  <p>
                    <strong>{club.name}</strong>
                  </p>
                  <p>
                    <strong>
                      {eventType.name} | {eventCategory.name}
                    </strong>
                  </p>

                  <p>
                    {oneDayOnly
                      ? moment(dateOfEvent, "MM-DD-YYYY").format(
                          "DD MMMM, YYYY"
                        )
                      : `${moment(from, "MM-DD-YYYY").format(
                          "DD MMMM, YYYY"
                        )} to ${moment(to, "MM-DD-YYYY").format(
                          "DD MMMM, YYYY"
                        )}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col s12 m8">
              <div className="card event-details">
                <div className="card-content">
                  <div dangerouslySetInnerHTML={createMarkUp()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Event.propTypes = {
  getEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event.event
});

export default connect(
  mapStateToProps,
  { getEvent }
)(Event);
