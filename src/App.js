import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./NumberOfEvents";
import CityEventsChart from "./CityEventsChart";
import EventGenresChart from "./EventGenresChart";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  };
  updateEvents = (location, eventCount) => {
    if (eventCount) {
      this.setState({ numberOfEvents: eventCount });
    }
    getEvents().then((events) => {
      const locationEvents = location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events:  locationEvents.slice(0, this.state.numberOfEvents),
      });
    });
  };

  updateNumOfEvents = (numberOfEvents) => {
    this.updateEvents(this.state.currentLocation, numberOfEvents);
  }

  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEvents={this.updateNumOfEvents}/>
        <CityEventsChart allLocations={this.state.locations} events={this.state.events}/>
        <EventGenresChart events={this.state.events}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
