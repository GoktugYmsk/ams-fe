"use client";
import React, { useState } from "react";
import { Toast } from "flowbite-react";
import api from "@/intercepter";

function AddUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    surname: "",
    mail: "",
    gsm: "",
    role: "",
  });

  const [showToast, setShowToast] = useState(false);

  const addUser = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/addUsers", newUser);
      if (response.status === 200) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div className="w-full max-w-lg rounded-lg bg-slate-400 p-6 shadow-md dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-bold dark:text-white">Add New User</h2>
        <form onSubmit={addUser}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              type="text"
              className="block w-full rounded-lg border p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              className="block w-full rounded-lg border p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={newUser.surname}
              onChange={(e) =>
                setNewUser({ ...newUser, surname: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              className="block w-full rounded-lg border p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={newUser.mail}
              onChange={(e) => setNewUser({ ...newUser, mail: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              GSM
            </label>
            <input
              type="text"
              className="block w-full rounded-lg border p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={newUser.gsm}
              onChange={(e) => setNewUser({ ...newUser, gsm: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Role
            </label>
            <input
              type="text"
              className="block w-full rounded-lg border p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2.5 font-medium text-white hover:bg-blue-700"
          >
            Add User
          </button>
        </form>

        {showToast && (
          <Toast className="mt-4">
            <div className="ml-3 text-sm font-normal">
              Kullanıcı başarıyla eklendi.
            </div>
          </Toast>
        )}
      </div>
    </div>
  );
}

export default AddUser;
