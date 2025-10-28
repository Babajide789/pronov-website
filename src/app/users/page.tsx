"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import MyTabs from "@/shadCN/MyTabs";
import {
  Filter,
  ChevronDown,
  X,
  MoreVertical,
  ArrowUp,
  Download,
} from "lucide-react";

export default function Users() {
  const [loading, setLoading] = useState(true);

  const users = [
    {
      name: "Adeyemo M. Samson",
      email: "sams.adeyemo@outlook.com",
      access: "Basic",
      dateAdded: "1/21/2023",
      lastAccessed: "4/16/2023",
    },
    {
      name: "Ideazhub Solutions",
      email: "zedfinancial@outlook.com",
      access: "Basic",
      dateAdded: "11/22/2020",
      lastAccessed: "4/19/2023",
    },
    {
      name: "Prolean Financials",
      email: "proleanfinancials@gmail.com",
      access: "Basic",
      dateAdded: "2/16/2021",
      lastAccessed: "4/16/2021",
    },
    {
      name: "Samson M. Adeyemo",
      email: "sams.adeyemo@gmail.com",
      access: "Stakeholder",
      dateAdded: "1/21/2023",
      lastAccessed: "4/16/2023",
    },
    {
      name: "Jude Biose",
      email: "judebiose@gmail.com",
      access: "Stakeholder",
      dateAdded: "3/1/2021",
      lastAccessed: "3/30/2023",
    },
    {
      name: "raimaliu428",
      email: "raimaliu428@gmail.com",
      access: "Basic",
      dateAdded: "12/5/2021",
      lastAccessed: "4/3/2023",
    },
    {
      name: "tolulope@mofuba.io",
      email: "tolulope@mofuba.io",
      access: "Stakeholder",
      dateAdded: "4/11/2021",
      lastAccessed: "Never",
    },
  ];

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Management
        </h1>
        <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white">
          <Download size={16} />
          Export Users
        </Button>
      </div>

      {/* Tabs & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <MyTabs />

      </div>

         <div className="relative w-full pb-3">
          <Filter className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Filter Users or Access Level"
            className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
          />
          <div className="absolute right-3 top-3 flex gap-2 text-gray-400">
            <ChevronDown size={16} />
            <X size={16} className="cursor-pointer hover:text-gray-600" />
          </div>
        </div>


      {/* Summary & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <p className="text-sm text-gray-600 mb-2 sm:mb-0">
          Total:{" "}
          <span className="font-semibold text-gray-800">{users.length}</span>{" "}
          users
        </p>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-gray-300 hover:bg-gray-100 text-gray-700 text-sm"
          >
            Summary
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
            Add User
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 border-b">
            <tr className="text-left text-gray-600">
              <th className="py-3 px-4 w-8">
                <input type="checkbox" className="w-4 h-4" />
              </th>
              <th className="py-3 px-4 font-medium flex items-center gap-1">
                Name <ArrowUp size={14} className="text-gray-400" />
              </th>
              <th className="py-3 px-4 font-medium">Access Level</th>
              <th className="py-3 px-4 font-medium">Date Added</th>
              <th className="py-3 px-4 font-medium">Last Accessed</th>
              <th className="py-3 px-4 text-right font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading
              ? // 🔹 Skeleton Loader
                Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={i} className="animate-pulse border-b">
                      <td className="py-3 px-4">
                        <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="h-4 bg-gray-200 rounded w-6 ml-auto"></div>
                      </td>
                    </tr>
                  ))
              : // 🔹 Actual User Data
                users.map((user, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-3 px-4">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-800">{user.name}</p>
                        <p className="text-gray-500 text-xs">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.access === "Stakeholder"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.access}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {user.dateAdded}
                    </td>
                    <td className="py-3 px-4 text-gray-700">
                      {user.lastAccessed}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded">
                        <MoreVertical size={16} className="text-gray-500" />
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
