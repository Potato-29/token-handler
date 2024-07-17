import React from "react";

const ActionButton = ({
  actionName,
  bgColor = "primary",
  onClick = () => {},
  isDisabled = false,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`btn btn-${bgColor} text-lg btn-outline w-full h-full border border-gray-400 flex items-center justify-center rounded-none`}
      >
        {actionName}
      </button>
    </div>
  );
};

export default ActionButton;
