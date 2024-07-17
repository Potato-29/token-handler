import React, { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import TokenInfoBox from "../TokenInfoBox/TokenInfoBox";
import useButtonState from "../../hooks/useButtonState";
import { updateTokenStatus } from "../../services/tokenServices";
import { toastOptions } from "../../constants/toastOptions";
import { toast } from "react-toastify";
import { tokenActions } from "../../constants/tokenStatuses";

const TokenActionZone = ({ token, setSelectedToken }) => {
  const { isPickDisabled, isCloseDisabled, isResolveDisabled, isHoldDisabled } =
    useButtonState(token?.status);

  const handleTokenAction = async (id, status) => {
    try {
      const response = await updateTokenStatus(id, status);
      console.log(response);
      setSelectedToken(response);
      toast.success("Action Complete", toastOptions);
    } catch (error) {
      toast.error("Something went wrong", toastOptions);
    }
  };

  //   abc
  return (
    <div className="w-full h-full">
      {token && (
        <>
          <div className="w-full h-1/4 grid grid-cols-3 gap-2 bg-base-300 shadow-md p-5">
            <TokenInfoBox title="Token Number" info={token?.number} />
            <TokenInfoBox title="Status" info={token?.status} />
            <TokenInfoBox title="Token Type" info={token?.tokenType?.label} />
            <TokenInfoBox title="Customer Name" info={token?.fullName} />
            <TokenInfoBox title="Phone No." info={token?.mobileNumber} />
            <TokenInfoBox
              title="Creation Time"
              info={new Date(token?.createdAt).toLocaleString()}
            />
          </div>
          <div className="grid grid-cols-2 h-3/4 w-full">
            <ActionButton
              onClick={() => handleTokenAction(token._id, tokenActions.PICK)}
              actionName={"Pick"}
              bgColor="primary"
              isDisabled={isPickDisabled}
            />
            <ActionButton
              onClick={() => handleTokenAction(token._id, tokenActions.CLOSE)}
              actionName={"Close"}
              bgColor="error"
              isDisabled={isCloseDisabled}
            />
            <ActionButton
              onClick={() => handleTokenAction(token._id, tokenActions.RESOLVE)}
              actionName={"Resolve"}
              bgColor="success"
              isDisabled={isResolveDisabled}
            />
            <ActionButton
              onClick={() => handleTokenAction(token._id, tokenActions.HOLD)}
              actionName={"Hold"}
              bgColor="warning"
              isDisabled={isHoldDisabled}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TokenActionZone;
