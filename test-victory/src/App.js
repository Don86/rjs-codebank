import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryBrushContainer } from 'victory';
import * as d3 from 'd3';
import data from "./STI-small.csv"
//import Moment from "moment"
//import VicChart1 from "./components/VicChart1"
// Modularization doesn't work atm
// Still trying to figure out how to pass state to child components

function parseData(myInput) {
  // processes quandl data into a format for viz by victory

  // 1. Convert object of objects into array of objects
  // create new key: date
  let newArray = []
  for (var key in myInput) {
      if (myInput.hasOwnProperty(key)) {
          const newRow = Object.assign({"newDate": new Date(key)}, {"Date":key}, {"Year":key.split("-")[0]}, myInput[key])
          if (parseInt(newRow["Year"])>2016) {
            newArray.push(newRow)
          }
      }
  }
  // 2. Rename keys?
  // Not implemented yet
  return newArray
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      zoomDomain: {x: [new Date(2017, 1, 1), new Date(2019, 12, 1)]},
      plotData: {}
    }
    this.handleZoom = this.handleZoom.bind(this)
  }

  /*
  componentDidMount() {
    d3.csv(data).then(function(data) {
      data.map(o => o.newDate = new Date(o.Date))
      //console.log(data)
    }).catch(function(err) {
      throw err;
    }).then(data =>{this.setState({plotData:data})})
  }
  */

  
  // API call to alpha vantage
  // console.log() for no; no setState()
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

    return (
      <div>
        <VictoryChart width={600} height={200} scale={{x:"time"}}
        containerComponent = {
          <VictoryZoomContainer 
          zoomDimension="x"
          zoomDomain={this.state.zoomDomain}
          onZoomDomainChange={this.handleZoom.bind(this)}
        />}
        >

          <VictoryLine style={{ data: {stroke:"tomato"} }}
            data={testData}
            //data = {this.state.plotData}
            x="newDate"
            y="4. close"
          />
          </VictoryChart>
        {/*<VicChart1 zoomDomain={this.state.zoomDomain}/>*/}

        <VictoryChart
          padding={{top:0, left:50, right:50, bottom:30}}
          width={600} height={100} scale={{ x:"time" }}
          containerComponent={
            <VictoryBrushContainer 
            brushDimension="x"
            brushDomain={this.state.zoomDomain}
            onBrushDomainChange={this.handleZoom.bind(this)}/>
          }>
          <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()}
          />
          <VictoryLine
          style={{data:{stroke:"tomato"}}}
          data={testData}
          //data = {this.state.plotData}
          x="newDate"
          y="4. close"
          />
        </VictoryChart>
      </div>
    )}
}

export default App;