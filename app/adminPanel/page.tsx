"use client";
import React, { useEffect, useState } from "react";
import AddUser from "./addUser";
import UserList from "./userList";
import SideBar from "./sideBar";
import { useRouter } from "next/navigation";

function AdminPanel() {
  const router = useRouter();
  const [section, setSection] = useState("userlist");

  useEffect(() => {
    const querySection = new URLSearchParams(window.location.search).get(
      "section",
    );
    if (querySection) {
      setSection(querySection);
    }
  }, [router.asPath]); // asPath kullanarak URL değişimlerini dinle

  useEffect(() => {
    console.log("Current Section:", section);
  }, [section]);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <SideBar />

        <div className="ml-64 flex h-full w-full flex-col items-center justify-start bg-slate-200 dark:bg-slate-600">
          <h1 className="text-xl font-bold dark:text-white">
            Admin Panel - {section === "userlist" ? "User List" : "Add User"}
          </h1>
          {section === "userlist" && <UserList />}
          {section === "adduser" && <AddUser />}
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
