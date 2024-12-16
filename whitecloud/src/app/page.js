"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const [setupState, setSetupState] = useState(false);

  // useEffect(() => {
  //   !setupState && router.push("/setup");
  // }, [setupState]);

  return (
    <Fragment>
      <section className="h-screen p-24 flex flex-col justify-center items-center">
        <dv className="my-8">
          <Image src="/next.svg" width={150} height={150} alt="site logo" />
        </dv>

        <section className="w-4/5 md:w-1/5 shadow-md p-5 rounded-md ">
          <LoginForm />
        </section>
      </section>
    </Fragment>
  );
};

export default page;
