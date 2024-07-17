import React from "react";
import { tokenStatuses } from "../../constants/tokenStatuses";

const TokenInfoBox = ({ info, title }) => {
  const renderBadge = (status) => {
    if (status === tokenStatuses.RESOLVED) {
      return "badge-success";
    }
    if (status === tokenStatuses.PENDING) {
      return "badge-warning";
    }
    if (status === tokenStatuses.SERVING) {
      return "badge-info";
    }
    if (status === tokenStatuses.CLOSED) {
      return "badge-error";
    }
    if (status === tokenStatuses.CANCELLED) {
      return "badge-ghost text-black";
    }
    if (status === tokenStatuses.ON_HOLD) {
      return "badge-warning";
    }
  };
  return (
    <div className="flex flex-col ">
      <p className="font-bold">{title}</p>
      {title === "Status" ? (
        <p
          className={`font-semibold capitalize text-white badge ${renderBadge(
            info
          )}`}
        >
          {info}
        </p>
      ) : (
        <p className={`font-semibold capitalize`}>{info}</p>
      )}
    </div>
  );
};

export default TokenInfoBox;
