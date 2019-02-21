import React from 'react';
import { Line, Bar } from 'react-chartjs-2'
//import data from "./STI-small.csv"

function parseData(myInput) {
  // processes alpha vantage data into a format for viz by chart.js

  // 1. Convert object of objects into array of objects
  // create new key: date (originally a key in the first level of objects)
  let newArray = []
  for (var key in myInput) {
      if (myInput.hasOwnProperty(key)) {
          const newRow = Object.assign({"newDate": new Date(key)}, {"Date": key}, myInput[key])
          newArray.push(newRow)
      }
  }
  //console.log(newArray)
  // 2. Generate plotData for chartjs2
  let newArray2 = {labels: [] , datasets: [{data:[]}]}
  for (var i = 0; i < newArray.length; i++) {
    newArray2["labels"].unshift(newArray[i]["Date"])
    newArray2["datasets"][0]["data"].unshift(newArray[i]["4. close"])
  }

  // Reverse the arrays, because of the way that push works

  // 3. Populate other fields of plotData for chartjs2
  newArray2["datasets"][0]["label"] = "Stock chart (End-of-Month)"

  return newArray2
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ticker: "",
      plotData: {
        labels: [],
        datasets: [{
          label: 'initialized label',
          data: []
        }]
      }
    }
    this.handleZoom = this.handleZoom.bind(this)
  }

  // API call to alpha vantage
  componentDidMount() {
    const ticker = "VTSAX"
    const api_key = "EEKL6B77HNZE6EB4"
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol="+ticker+"&apikey="+api_key)
    .then(response => response.json())
    .then(data => parseData(data["Monthly Time Series"]))
    .then(data =>{this.setState({plotData:data, ticker:ticker})})
    .then(data => console.log(data))
  }

  handleZoom(domain) {
    this.setState({ zoomDomain : domain })
  }

  render() {
    return (
      <div>
        {this.state.ticker.length == 0 ? <h1>Loading...</h1> : <h1>{this.state.ticker}</h1>}
        <Line data={this.state.plotData} />
      </div>
    )
  }
}

export default App;