import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { Fragment } from "react";

const page = () => {
  return (
    <Fragment>
      <section className="py-10 relative h-full">
        <div className="flex justify-center items-center mb-10">
          <Image src="/next.svg" width={200} height={200} alt="Sucess logo" />
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          quibusdam rem reiciendis explicabo nisi temporibus in, dicta neque
          aliquam similique error voluptatibus? Nemo mollitia, eius numquam
          perferendis quia nulla accusamus, aperiam consequatur cum doloribus
          aut obcaecati iure voluptate quos quas amet expedita, at maiores
          minima laboriosam totam non hic! Ab?
        </p>
        <div className="flex justify-center items-center mt-10 absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <Button link="/" buttonText="Logout" type="primary" />
        </div>
      </section>
    </Fragment>
  );
};

export default page;
