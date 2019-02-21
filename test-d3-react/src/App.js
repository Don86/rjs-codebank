import React, { Component } from 'react';
import './App.css';
import * as d3 from "d3";
//import MyChart from "./components/MyChart"

class App extends Component {
  constructor() {
    super()
    this.state = {ticker:""}
    this.drawChart = this.drawChart.bind(this) 
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const testData = [{"date": "2014-04-15", "y": 100}, 
        {"date": "2014-04-16", "y": 120}, 
        {"date": "2014-04-17", "y": 220},
        {"date": "2014-04-18", "y": 180},
      ]

      //follow d3 margin conventions
    var margin = {top: 50, right: 50, bottom: 50, left: 50}
     , width = window.innerWidth - margin.left - margin.right // Use the window's width 
     , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height
   
   // The number of datapoints
   var n = 21;
   
   // 5. X scale will use the index of our data
   var xScale = d3.scaleLinear()
       .domain([0, n-1]) // All possible input values
       .range([0, width]); // corresponding resulting values

  // This works. Nothing downstream from this so far. 
  var xTimeScale = d3.scaleTime()
      .domain(d3.extent(testData, d => d.date))
      .range([margin.left, width - margin.right])
   
   // 6. Y scale will use the randomly generate number 
   var yScale = d3.scaleLinear()
       .domain([0, 1])
       .range([height, 0]);
   
   // 7. d3's line generator
   var line = d3.line()
       .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
       .y(function(d) { return yScale(d.y); }) // set the y values for the line generator
   
   // 8. Inits a random array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
   var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })
   console.log(dataset)

   // 1. Add the SVG to the page and employ #2
   var svg = d3.select("body").append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
     .append("g")
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
   
   // 3. Call the x axis in a group tag
   svg.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom
       //.call(d3.axisBottom(xTimeScale))
   
   // 4. Call the y axis in a group tag
   svg.append("g")
       .attr("class", "y axis")
       .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
  
   // 9. Append the path, bind the data, and call the line generator 
   svg.append("path")
      .datum(dataset) // 10. Binds data to the line 
      .attr("class", "line") // Assign a class for styling. May not be necessary since there's no stylesheet.
      .attr("stroke", "blue")
      .attr("fill", "none")
      .attr("stroke-width", "1")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line) // 11. Calls the line generator 
   
   // 12. Appends a circle for each datapoint 
   svg.selectAll(".dot")
       .data(dataset)
     .enter().append("circle") // Uses the enter().append() method
       .attr("class", "dot") // Assign a class for styling
       .attr("cx", function(d, i) { return xScale(i) })
       .attr("cy", function(d) { return yScale(d.y) })
       .attr("r", 5)
         .on("mouseover", function(a, b, c) { 
                 console.log(a) 
           this.attr('class', 'focus')
           })
         .on("mouseout", function() {  })
  }
        
  render(){
    return (<div><h1>{this.state.ticker}</h1></div>)
  }
}

export default App;