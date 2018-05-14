import { SAMPLE_ACTION } from "../actions/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload;
    default:
      return state;
  }
};
