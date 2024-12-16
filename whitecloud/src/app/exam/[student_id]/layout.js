import React, { Fragment } from "react";

const layout = ({ children, params }) => {
  return (
    <Fragment>
      <section className=" bg-gray-100">
        <section className="h-screen p-24 flex flex-col gap-5 justify-center items-center">
          <h2>Welcome, {params.student_id}</h2>
          <section className="w-4/5 h-full shadow-md md:w-4/6 p-5 rounded-md bg-white overflow-y-auto">
            {children}
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default layout;
