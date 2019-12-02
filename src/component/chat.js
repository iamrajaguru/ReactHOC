import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

export default class Chart extends Component {
  componentDidMount() {
    let obj = {
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
            "rgba(255,0,0,0.3)",
            "rgba(0,255,0,0.3)",
            "rgba(0,0,255,0.3)",
            "rgba(192,192,192,0.3)",
            "rgba(255,255,0,0.3)"
          ]
        }
      ]
    };
    //   let chat = "chartData";
    this.props.ChartDataUpdate("chartData", obj);
  }

  render() {
    return (
      <div
        className="chart"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div style={{ width: "70vw" }}>
          <Bar
            //   width={50}
            //   height={100}
            // width={50}
            // height={50}
            data={this.props.chartData}
            options={{
              // maintainAspectRatio: false,
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
        <div style={{ width: "50vw" }}>
          <Doughnut
            // width={20}
            // height={20}
            data={this.props.chartData}
            options={{
              // maintainAspectRatio: true,

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
        <div style={{ width: "50vw" }}>
          <Line
            // width={20}
            // height={20}
            data={this.props.chartData}
            options={{
              // maintainAspectRatio: true,

              title: {
                display: this.props.displayTitle,
                text: "Favourite Cities"
                //   fontSize: 25
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition
              }
            }}
          />
        </div>
      </div>
    );
  }
}
