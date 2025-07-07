import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Cover = () => {
  return (
    <div className=" bg-linear-to-b from-blue-100 to-gray-100/20 pt-20">
      <div className="box-width flex items-center justify-between">
        <div className="py-28 w-3/5 flex flex-col gap-8">
          <h3 className="sub-heading w-fit">Lorem ipsum dolor sit amet.</h3>
          <h1 className="heading-one">
            Lorem ipsusm dolor, sit amet consectetur
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            alias pariatur libero nihil animi, iste sunt in, cumque soluta fuga
            recusandae velit ut! In, ipsam!
          </p>
          <div className="w-fit">
            <Button type="primary">Find Out More!</Button>
          </div>
        </div>
        <div className="flex justify-end  items-end transform translate-x-30">
          <Image
            className=""
            src="/assets/leading-female.png"
            width={500}
            height={700}
            alt="lorem"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
