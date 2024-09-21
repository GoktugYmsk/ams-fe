"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import api from "@/intercepter";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gsm, setGsm] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { firstName, lastName, gsm, password };
    try {
      const response = await api.post("/auth/register", requestBody);
      if (response.status === 200) {
        console.log("Registration successful:", response.data);
        router.push("/auth/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 "
        >
          <img
            className="mr-2 h-8 w-8 "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Apartman Yönetim
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <InputText
                  type="text"
                  id="first-name"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <InputText
                  type="text"
                  id="last-name"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Telephone Number
                </label>
                <InputText
                  type="text"
                  id="telephone"
                  onChange={(e) => setGsm(e.target.value)}
                  placeholder="Telephone Number"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Password
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  toggleMask
                  feedback={false}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  inputClassName="w-full rounded-lg p-3 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button
                type="submit"
                label="Register"
                className="w-full rounded-lg bg-blue-600 p-3 text-xl text-white hover:bg-blue-700"
              />
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/auth/login"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
