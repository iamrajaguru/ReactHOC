import { connect } from "react-redux";
import Home from "../component/home";
import { updateData } from "../action/home";

const mapStateToProps = state => (
  {
    data:state.Home.data,
    id: state.Home.id,
    name: state.Home.name,
    body: state.Home.body
  });

const mapDispatchToProps = dispatch => ({
  updateData: (key, value) => dispatch(updateData(key, value))
});



export default connect(mapStateToProps, mapDispatchToProps)(Home);
