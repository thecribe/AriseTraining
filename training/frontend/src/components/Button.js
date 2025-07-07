import React from "react";

const Button = ({ type, children }) => {
  let buttonOutput;
  switch (type) {
    case "primary":
      return (buttonOutput = (
        <button className="primary-button">{children}</button>
      ));
      break;

    default:
      break;
  }

  return buttonOutput;
};

export default Button;
