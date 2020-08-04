import {SECONDS} from "../constants/actions-types";

const setSeconds = (payload) => {
  return {
    payload,
    type: SECONDS,
  };
};

export {
  setSeconds,
};
