import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class App extends Component {
  constructor(props) {
    super(props);
  

    this.state = {
      airlineName: ''
    }
  }

  addAirline = (event) => {
    this.props.dispatch({type: 'NAME', airlineName: this.state.airlineName});
    console.log('BUTTON WORKING!')
  }

  changeAirlineName = (event) => {
    this.setState({
      airlineName: event.target.value
    });
  }
  
  render() {
    const array = this.props.reduxState.airlineReducer.map((airline, index) => {
      return <li key={index}>{airline}</li>
    });

    return (
      <div>
        <h1>Redux Airport</h1>
        <input placeholder="Airline Name" onChange={this.changeAirlineName} />
        
        <button onClick={this.addAirline}>Add Airline</button>
        {array}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
