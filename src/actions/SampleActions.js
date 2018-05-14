import { SAMPLE_ACTION } from "./types";

export const sampleAction = payload => {
  return {
    type: SAMPLE_ACTION,
    payload: payload
  };
};
