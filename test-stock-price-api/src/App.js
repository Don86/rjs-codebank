import React, { Component } from 'react';
import './App.css';

function parseData(myInput) {
  // processes quandl data into a format for viz by victory

  // 1. Convert object of objects into array of objects
  // create new key: date
  let newArray = []
  for (var key in myInput) {
      if (myInput.hasOwnProperty(key)) {
          const newRow = Object.assign({"Date": new Date(key)}, myInput[key])
          newArray.push(newRow)
      }
  }
  // 2. Rename keys?
  // Not implemented yet
  return newArray
}

class App extends Component {
  constructor (){
    super()
    this.state = {}
  }

  componentDidMount() {
    const api_key = "EEKL6B77HNZE6EB4"
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&apikey=EEKL6B77HNZE6EB4')
    .then(response => response.json())
    .then(data => parseData(data["Monthly Time Series"]))
    .then(data => console.log(data))
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default App;
