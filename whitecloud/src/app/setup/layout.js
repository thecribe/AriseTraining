import React from "react";
import { Fragment } from "react";

export const metadata = {
  title: "Setup and Configuration",
  description: "Site configuration",
};

const layout = ({ children }) => {
  return (
    <Fragment>
      <section className="h-screen p-24 flex justify-center items-center">
        <section className="w-4/5 md:w-2/5  shadow-md p-5 rounded-md ">
          <h1>Software Setup</h1>
          {children}
        </section>
      </section>
    </Fragment>
  );
};

export default layout;
