import React, { ReactNode, useState } from "react";
import Alert from "./Alert";

interface Props {
  color?: "primary" | "success" | "danger";
  children: ReactNode;
  onCLick: () => void;
}

function Button({ color = "primary", children, onCLick }: Props) {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onCLick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
