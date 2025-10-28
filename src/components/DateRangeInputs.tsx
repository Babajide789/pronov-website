"use client";

import { useState } from "react";


function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  // e.g. Mar 03, 2023
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export default function DateRangeInputs() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  return (
    <div className="flex gap-3">
      {/* Start Date */}
      <div className="relative w-full">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded-md text-transparent focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          aria-label="Start date"
        />
        <span
          className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            startDate ? "text-gray-800" : "text-gray-400"
          }`}
        >
          {startDate ? formatDate(startDate) : "Start Date"}
        </span>
      </div>

      {/* End Date */}
      <div className="relative w-full">
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded-md text-transparent focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          aria-label="End date"
        />
        <span
          className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            endDate ? "text-gray-800" : "text-gray-400"
          }`}
        >
          {endDate ? formatDate(endDate) : "End Date"}
        </span>
      </div>
    </div>
  );
}
