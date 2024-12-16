"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [setupState, setSetupState] = useState(false);
  const [database, setDatabase] = useState(true);

  // useEffect(() => {
  //   setupState && router.push("/");
  // }, [setupState]);
  return (
    <Fragment>
      <div className="mt-3 border-t-2 border-blue-800 pt-5">
        <div className="flex justify-between items-center">
          <p>Checking Database Connection</p>
          <p className="text-green-400">connected</p>
        </div>
        <div className="flex justify-center items-center mt-10">
          {database ? (
            <Button
              link="/setup/site_configuration"
              buttonText="Continue Setup"
              type="primary"
            />
          ) : (
            <p>Error connecting to database</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default page;
