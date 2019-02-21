import React, { Component } from "react"
import * as d3 from "d3"

// d3v5 ref: https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89
// with dates on x-axis (d3v4): http://www.d3noob.org/2016/08/create-simple-line-graph-using-d3js-v4.html

// MBostock's example here:
// https://beta.observablehq.com/@mbostock/d3-line-chart
// Accepts data as array of objects: {date: "yyyy-mm-dd", value: "number"}
class MyChart extends Component {
    constructor() {
        super()
        this.state = {ticker:""}
        this.drawChart() = this.drawChart.bind(this)
    }

    componentDidMount() {
      this.drawChart();
    }
      
    drawChart() {
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

    var xTimeScale = d3.scaleTime()
        .domain(d3.extent(data, d => d.date))
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
     
     // 4. Call the y axis in a group tag
     svg.append("g")
         .attr("class", "y axis")
         .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
    
     // 9. Append the path, bind the data, and call the line generator 
     svg.append("path")
         .datum(dataset) // 10. Binds data to the line 
         .attr("class", "line") // Assign a class for styling 
         .attr("d", line) // 11. Calls the line generator 
         .attr("stroke", "blue")
         .attr("fill", "none")
         .attr("stroke-width", "1")
     
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
  

export default BarChart;