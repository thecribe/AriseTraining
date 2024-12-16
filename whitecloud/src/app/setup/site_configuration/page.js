"use client";
import Button from "@/components/Button";
import React from "react";
import { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <section className="mt-3 border-t-2 border-blue-800 pt-5">
        <div>
          <h3 className="py-2 border-y-2 border-gray-100">
            Site Configuration
          </h3>
          <div>
            <div>
              <label htmlFor="site_title" className="form_label">
                <span className="form_title">Site title:</span>
                <input
                  className="form_input"
                  type="text"
                  name="site_title"
                  placeholder="Enter site title"
                  onChange={(val) => val}
                />
              </label>
              <label htmlFor="description" className="form_label">
                <span className="form_title">Site Description:</span>
                <input
                  className="form_input"
                  type="text"
                  name="description"
                  placeholder="Enter site title"
                  onChange={(val) => val}
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="py-2 border-y-2 border-gray-100">
            Adminstrator Settings
          </h3>
          <div>
            <label htmlFor="username" className="form_label">
              <span className="form_title">Username</span>
              <input
                className="form_input"
                type="text"
                name="username"
                placeholder="Enter preffered username"
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
            <label htmlFor="confirm_password" className="form_label">
              <span className="form_title">Confirm password</span>
              <input
                className="form_input"
                type="password"
                name="confirm_password"
                placeholder="Reenter password"
                onChange={(val) => val}
              />
            </label>
            <label htmlFor="email" className="form_label">
              <span className="form_title">Email</span>
              <input
                className="form_input"
                type="email"
                name="email"
                placeholder="Enter youru email"
                onChange={(val) => val}
              />
            </label>
            <div className="flex justify-center items-center">
              <Button link="/" buttonText="Finish Setup" type="primary" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default page;
