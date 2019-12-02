import { connect } from "react-redux";

import Chart from "../component/chat";
import { ChartDataUpdate } from "../action/chat";

const mapStateToProps = state => ({
  chartData: state.Chart.chartData,
  displayTitle: state.Chart.displayTitle,
  displayLegend: state.Chart.displayLegend,
  legendPosition: state.Chart.legendPosition
});

const mapDispatchToProps = dispatch => ({
  ChartDataUpdate: (key, value) => dispatch(ChartDataUpdate(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
