"use client";

import { useEffect, useState } from "react";
import DateRangeInputs from "@/components/DateRangeInputs";
import MyDropdownMenu from "@/shadCN/Mydropdown-menu";
import { Bell, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function SalesHistory() {
  const [loading, setLoading] = useState(true);

  // Simulate fetching for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 bg-gray-50 border border-gray-50 rounded-lg px-5 py-1 shadow-sm">
        {/* Title + Branch */}
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold text-gray-800">Sales History</h1>
        </div>

        {/* Notification & Dropdown */}
        <div className="flex items-center gap-4">
          {/* Notification Bell with Red Dot */}
          <div className="relative">
            <Bell size={20} className="text-gray-700" />
            {/* Red Dot on Bell */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
          </div>

          {/* Dropdown Menu (Alausa Branch) */}
          <MyDropdownMenu />
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-wrap gap-3 items-center mb-8">
        <div className="relative flex-1 min-w-[250px]">
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Keyword or Barcode"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-sm"
          />
        </div>

        <DateRangeInputs />

        <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
          Search
        </button>
      </div>

      {/* Transactions Section */}
      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-4">
          Recent Transactions
        </h2>

        {loading ? (
          // 🦴 Skeleton Loader (same structure as table)
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-14" />
              </div>
            ))}
          </div>
        ) : (
          // ✅ Actual Table
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-gray-700 font-medium">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Code</th>
                  <th className="py-3 px-4 text-left">Product Name</th>
                  <th className="py-3 px-4 text-center">Quantity</th>
                  <th className="py-3 px-4 text-right">Price</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                </tr>
              </thead>

              <tbody>
                {[...Array(10)].map((_, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition-all"
                  >
                    <td className="py-3 px-4 text-gray-600">12/03/2019</td>
                    <td className="py-3 px-4 text-gray-600">A4-3549</td>
                    <td className="py-3 px-4 text-gray-800">
                      Albemol Paracetamol Syrup 60ml
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">2pcs</td>
                    <td className="py-3 px-4 text-right text-gray-700">₦3,500</td>
                    <td className="py-3 px-4 text-right text-green-600 font-semibold">
                      ₦7,000
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
