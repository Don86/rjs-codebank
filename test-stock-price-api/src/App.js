import React, { Component } from 'react';
import './App.css';

function parseData(myInput) {
  // processes quandl data into a format for viz by victory

  // 1. Convert object of objects into array of objects
  // create new key: date (originally a key in the first level of objects)
  let newArray = []
  for (var key in myInput) {
      if (myInput.hasOwnProperty(key)) {
          const newRow = Object.assign({"Date": new Date(key)}, myInput[key])
          newArray.push(newRow)
      }
  }
  // 2. Generate plotData for chartjs2
  let newArray2 = {labels: [] , datasets: [{data:[]}]}
  for (var i = 0; i < newArray.length; i++) {
    //console.log(newArray[i]["Date"], newArray[i]["4. close"])
    newArray2["labels"].push(newArray[i]["Date"])
    newArray2["datasets"][0]["data"].push(newArray[i]["4. close"])
  }
  console.log(newArray2)

  return newArray2
}

class App extends Component {
  constructor (){
    super()
    this.state = {}
  }

  componentDidMount() {
    const api_key = "EEKL6B77HNZE6EB4"
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&apikey='+api_key)
    .then(response => response.json())
    .then(data => parseData(data["Monthly Time Series"]))
  }

  render() {
    return (
      <div>
        Look at console.
      </div>
    );
  }
}

export default App;
