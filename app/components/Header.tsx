"use client";
import React, { useContext } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { TokenProvider } from "../TokenContext";
import { TokenContext } from "@/app/TokenContext";

const Header: React.FC = () => {
  const router = useRouter();
  const { token, handleLogout } = useContext(TokenContext);

  const handleLogoutClick = () => {
    handleLogout();
    router.push("/auth/login");
  };

  // const token = sessionStorage.getItem("token");

  // const handleLogout = () => {
  //   sessionStorage.removeItem("token");
  //   router.push("/auth/login");
  //   window.location.reload;
  // };
  // useEffect(() => {
  //   window.location.reload;
  // }, [token]);

  return (
    <div className="sticky top-0 z-40">
      <nav className="h-16 w-full border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Ensa Sitesi
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              <li>
                <a
                  href="/"
                  className="block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {token && (
                <li>
                  <a
                    href="/adminPanel?section=userlist"
                    className="block rounded bg-blue-700 px-3 py-2 text-white dark:bg-blue-600 md:bg-transparent md:p-0 md:text-blue-700 md:dark:bg-transparent md:dark:text-blue-500"
                  >
                    Admin Ekranı
                  </a>
                </li>
              )}

              <li>
                {token ? (
                  <button
                    onClick={handleLogoutClick}
                    className="flex items-center rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.5 1.5M15 7H9l1.5-1.5M17 9h-5v6h5m0 0l-1.5 1.5m1.5-6l-1.5-1.5"
                      />
                    </svg>
                    Çıkış Yap
                  </button>
                ) : (
                  <a
                    href="/auth/login"
                    className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Giriş Yap
                  </a>
                )}
              </li>
              <li>
                <DarkThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
