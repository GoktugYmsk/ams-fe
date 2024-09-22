"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/intercepter";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/getAll");
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-start  bg-blue-600 dark:bg-slate-600">
        <div className="m-20 grid h-full w-full grid-cols-1 overflow-scroll   p-20 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="h-52 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex items-center justify-between">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  {user.name} {user.surname}
                </h5>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    user.isActive
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  <strong>Role:</strong> {user.role}
                </p>
                <p>
                  <strong>Email:</strong> {user.mail}
                </p>
                <p>
                  <strong>GSM:</strong> {user.gsm}
                </p>
                <p>
                  <strong>Room:</strong> {user.room}
                </p>
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(user.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated At:</strong>{" "}
                  {new Date(user.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserList;
