"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Fragment } from "react";

const SidebarMenuList = ({ menuList }) => {
  const [visibility, setVisibility] = useState(true);
  const dropDownVisibility = () => {
    setVisibility((prevState) => !prevState);
  };
  let dropdown = null;

  if (menuList.dropdown.length > 0) {
    dropdown = menuList.dropdown.map((menu, i) => (
      <Link href={menu.link} key={i}>
        <li className="py-4 pl-10 hover:cursor-pointer  hover:bg-gray-100  hover:text-blue-800 border-b-2 transition_class">
          {menu.name}
        </li>
      </Link>
    ));
  }
  return (
    <Fragment>
      <div>
        <Link href={menuList.parentMenu.link} onClick={dropDownVisibility}>
          <h4 className="hover:cursor-pointer border-b-2 p-4 hover:bg-gray-100 hover:text-blue-800 transition_class">
            {menuList.parentMenu.name}
          </h4>
        </Link>
        {visibility && <ul className=" sidebarmenulink">{dropdown}</ul>}
      </div>
    </Fragment>
  );
};

export default SidebarMenuList;
