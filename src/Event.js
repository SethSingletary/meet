import React, { Component } from "react";
import { mockData } from "./mock-data";

class Event extends Component {
  state = { collapsed: true};
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };
  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    return (
      <div className="event">
        <div className="title">{event.summary}</div>
        <div className="location">{event.location}</div>
        <div className="time">{new Date(event.start.dateTime).toString()}</div>

        {!collapsed && (
          <div className="details">
            <h2>About event:</h2>
            <a
              className="link"
              href={event.htmlLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              See details on Google Calendar
            </a>
            <p>{event.description}</p>
          </div>
        )}
        
        <button className="detailsButton" onClick={() => this.toggleDetails()}>
          {collapsed ? "show" : "hide"} details
        </button>
      </div>
    );
  }
}
export default Event;