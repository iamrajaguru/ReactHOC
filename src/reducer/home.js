import { DATA_TYPE } from "../action/home";
const initialState = {
  data: [],
  id: "hfdjh",
  name: "kriz",
  body: "lynx"
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_TYPE:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
