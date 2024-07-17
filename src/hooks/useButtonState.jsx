import React from "react";
import { tokenStatuses } from "../constants/tokenStatuses";

const useButtonState = (status) => {
  const getButtonState = (status) => {
    let isPickDisabled = true;
    let isCloseDisabled = true;
    let isHoldDisabled = true;
    let isResolveDisabled = true;
    let isCancelDisabled = true;
    if (status === tokenStatuses.RESOLVED) {
      isPickDisabled = true;
      isCloseDisabled = true;
      isHoldDisabled = true;
      isResolveDisabled = true;
      isCancelDisabled = true;
    }
    if (status === tokenStatuses.PENDING) {
      isPickDisabled = false;
      isCloseDisabled = true;
      isHoldDisabled = true;
      isResolveDisabled = true;
      isCancelDisabled = false;
    }
    if (status === tokenStatuses.SERVING) {
      isPickDisabled = true;
      isCloseDisabled = false;
      isHoldDisabled = false;
      isResolveDisabled = false;
      isCancelDisabled = false;
    }
    if (status === tokenStatuses.CLOSED) {
      isPickDisabled = true;
      isCloseDisabled = true;
      isHoldDisabled = true;
      isResolveDisabled = true;
      isCancelDisabled = true;
    }
    if (status === tokenStatuses.CANCELLED) {
      isPickDisabled = true;
      isCloseDisabled = true;
      isHoldDisabled = true;
      isResolveDisabled = true;
      isCancelDisabled = true;
    }
    if (status === tokenStatuses.ON_HOLD) {
      isPickDisabled = false;
      isCloseDisabled = true;
      isHoldDisabled = true;
      isResolveDisabled = true;
      isCancelDisabled = false;
    }

    return {
      isPickDisabled,
      isHoldDisabled,
      isCancelDisabled,
      isCloseDisabled,
      isResolveDisabled,
    };
  };

  return getButtonState(status);
};

export default useButtonState;
