import React from "react";

const HeaderWrapper = ({ children }) => {
  return <header className="fixed top-5 w-full z-10">{children}</header>;
};

export default HeaderWrapper;
