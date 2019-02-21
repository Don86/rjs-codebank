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
      zoomDomain: {x: [new Date(2000, 1, 1), new Date(2019, 12, 1)]},
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
    const ticker = "SPY"
    const api_key = "EEKL6B77HNZE6EB4"
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol="+ticker+"&apikey="+api_key)
    .then(response => response.json())
    .then(data => parseData(data["Monthly Time Series"]))
    .then(data =>{this.setState({plotData:data})})
    .then(data => console.log(data))
  }

  handleZoom(domain) {
    this.setState({ zoomDomain : domain })
  }

  render() {
    const testData = [
      { newDate: new Date(2017, 1, 1), "4. close": 125 },
      { newDate: new Date(2017, 3, 1), "4. close": 257 },
      { newDate: new Date(2017, 6, 1), "4. close": 345 },
      { newDate: new Date(2017, 9, 1), "4. close": 515 },
      { newDate: new Date(2018, 12, 1), "4. close": 132 },
      { newDate: new Date(2018, 3, 1), "4. close": 305 },
      { newDate: new Date(2018, 6, 1), "4. close": 270 },
      { newDate: new Date(2018, 9, 1), "4. close": 300 },
      { newDate: new Date(2018, 12, 1), "4. close": 320 },
    ]

    let localPlotData = this.state.plotData
    console.log(localPlotData)

    return (
      //Try React chart js2
      <div>
        <h1></h1>
        <Line data={this.state.plotData} />
      </div>
    )
  }
}

export default App;