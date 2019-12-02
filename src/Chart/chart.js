import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Coimbatore",
          "Trichy",
          "Thanjavur",
          "Nagapattinam",
          "Puthukottai"
        ],
        datasets: [
          {
            label: "Percentage",
            data: [67, 38, 58, 98, 74],
            backgroundColor: [
                "rgba(255,0,0,0.3)","rgba(0,255,0,0.3)","rgba(0,0,255,0.3)","rgba(192,192,192,0.3)","rgba(255,255,0,0.3)"
            ]
          }
        ]
      }
    };
  }
  static defaultProps ={
      displayTitle:true,
      displayLegend :true,
      legendPosition:'right'
  }
  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
              scales:false,
            // maintainAspectRatio: true
            title: {
              display: this.props.displayTitle,
              text: "Favourite Cities",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Doughnut
          data={this.state.chartData}
          options={{
            // maintainAspectRatio: true
           
   
            title: {
              display: this.props.displayTitle,
              text: "Favourite Cities",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
