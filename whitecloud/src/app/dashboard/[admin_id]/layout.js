import SidebarMenuList from "@/components/SidebarMenuList";
import Image from "next/image";
import React, { Fragment } from "react";

export const metadata = {
  title: "Admin Dashboard",
  description: "Dashboard",
};

const layout = ({ children, params }) => {
  const sidebarlist = [
    {
      parentMenu: { name: "Dashboard", link: "/dashboard/" + params.admin_id },
      dropdown: [],
    },
    {
      parentMenu: { name: "Questions, Answers and Scores", link: "#" },
      dropdown: [
        {
          name: "All Questions",
          link: "/dashboard/" + params.admin_id + "/all-questions",
        },
        {
          name: "Add Question",
          link: "/dashboard/" + params.admin_id + "/add-question",
        },
        {
          name: "Upload Answers",
          link: "/dashboard/" + params.admin_id + "/upload-answers",
        },
        {
          name: "View Scores",
          link: "/dashboard/" + params.admin_id + "/scores",
        },
      ],
    },
    {
      parentMenu: { name: "Classes and Subjects", link: "#" },
      dropdown: [
        { name: "All Classes", link: "#" },
        { name: "Add Class", link: "#" },
        { name: "All Subjects", link: "#" },
        { name: "Add Subject", link: "#" },
      ],
    },
    {
      parentMenu: { name: "Manage Teachers", link: "#" },
      dropdown: [
        { name: "All Teachers", link: "#" },
        { name: "Assign Class", link: "#" },
        { name: "Assign Subject", link: "#" },
      ],
    },
    {
      parentMenu: { name: "Manage Sessions", link: "#" },
      dropdown: [],
    },
    {
      parentMenu: { name: "Administrators", link: "#" },
      dropdown: [],
    },
  ];
  return (
    <Fragment>
      <section className="h-screen  bg-gray-100 overflow-y-auto">
        <section className="w-full bg-white shadow-md p-5 flex justify-between items-center">
          <div className="flex justify-center items-center gap-5">
            <div className="hover:cursor-pointer h-1 w-7  bg-blue-800 relative z-10 before:content-[''] before:absolute before:top-2 before:left-0 before:bg-blue-800 before:h-1 before:w-7 after:content-[''] after:absolute after:-top-2 after:left-0 after:bg-blue-800 after:h-1 after:w-7 xl:hidden"></div>
            <Image src="/next.svg" width={100} height={100} alt="site logo" />
          </div>
          <div>
            <p>Welcome, {params.admin_id}</p>
          </div>
        </section>
        <section className="flex h-full">
          <sidebar className=" hidden xl:block w-72 h-full shadow-md bg-white overflow-y-auto">
            {sidebarlist.map((menu, i) => (
              <SidebarMenuList menuList={menu} key={i} />
            ))}
          </sidebar>
          <main>{children}</main>
        </section>
      </section>
    </Fragment>
  );
};

export default layout;
