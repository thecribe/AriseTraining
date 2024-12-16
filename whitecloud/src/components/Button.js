import Link from "next/link";
import React from "react";

const Button = ({ link, buttonText, type }) => {
  let buttonOutput;

  switch (type) {
    case "primary":
      buttonOutput = (
        <Link href={link}>
          <button className="bg-blue-800 text-white py-2 px-5 ">
            {buttonText}
          </button>
        </Link>
      );
      break;
    case "secondary":
      buttonOutput = (
        <Link href={link}>
          <button>{buttonText}</button>
        </Link>
      );
      break;

    default:
      break;
  }
  return buttonOutput;
};

export default Button;
