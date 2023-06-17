import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
        errorText: ""
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value >= 1 || value <= 32) {
          this.setState({
            query: value,
            errorText: "",
          });
          this.props.updateEvents(value);
        }
        if (value < 1 || value > 32) {
          this.setState({
            query: value,
            errorText: "Please enter a valid number",
          });
        }
      };
    render(){
        return(
            <div>
                <h4>Number of Events</h4>
                <input className="count" type="number" value={this.state.query} onChange={this.handleInputChanged}></input>
            </div>
        )
    }
}

export default NumberOfEvents;