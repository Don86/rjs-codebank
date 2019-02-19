import React from "react"
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryBrushContainer } from 'victory';

class VicChart1 extends React.Component {
    render(state) {
        return(
            <VictoryChart width={600} height={200} scale={{x:"time"}}
            containerComponent = {
                <VictoryZoomContainer 
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                onZoomDomainChange={this.state.handleZoom.bind(this)}
                />}
            >

            <VictoryLine style={{ data: {stroke:"tomato"} }}
                data= {[
                { a: new Date(1982, 1, 1), b: 125 },
                { a: new Date(1987, 1, 1), b: 257 },
                { a: new Date(1993, 1, 1), b: 345 },
                { a: new Date(1997, 1, 1), b: 515 },
                { a: new Date(2001, 1, 1), b: 132 },
                { a: new Date(2005, 1, 1), b: 305 },
                { a: new Date(2011, 1, 1), b: 270 },
                { a: new Date(2015, 1, 1), b: 470 }
                ]}
                x="a"
                y="b"
            />
            </VictoryChart>
        )
    }
}

export default VicChart1