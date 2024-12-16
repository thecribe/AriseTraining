import React, { Fragment } from "react";
import Button from "./Button";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Fragment>
      <div>
        <h4 className="py-2 border-b-2 border-gray-100">User's access</h4>
        <div>
          <label htmlFor="username" className="form_label">
            <span className="form_title">Username/Email/ID:</span>
            <input
              className="form_input"
              type="text"
              name="username"
              placeholder="Enter username or email or id"
              onChange={(val) => val}
            />
          </label>
          <label htmlFor="password" className="form_label">
            <span className="form_title">Password</span>
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(val) => val}
            />
          </label>
          <p className="text-sm -mt-4">
            Forgot password?{" "}
            <Link href="#" className=" text-blue-500">
              Click here!
            </Link>
          </p>
          <div className="flex justify-center items-center mt-10">
            <Button link="/" buttonText="Login" type="primary" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LoginForm;
