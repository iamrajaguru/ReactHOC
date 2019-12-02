import { CHAT_TYPE } from "../action/chat";

const initialState = {
  chartData: {},
  displayTitle: true,
  displayLegend: true,
  legendPosition: "bottom"
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_TYPE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
