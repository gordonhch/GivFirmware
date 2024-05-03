import React from "react";

const ToolbarButton = (props: any) => {
  return (
    <button className={props.className + " p-2 px-14px min-w-120px bg-white border-F1F2F3 border rounded-md shadow-simple-1"}
    onClick={props?.onClick}>
      {props.children}
    </button>
  );
};
export default ToolbarButton;
