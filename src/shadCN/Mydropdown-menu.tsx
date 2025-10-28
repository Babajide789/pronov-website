"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

export default function MyDropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium transition">
  {/* Avatar */}
  <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
    <RxAvatar size={18} />
  </div>

  {/* Name + Role */}
  <div className="flex flex-col leading-tight">
    <span className="text-sm font-medium">Alex Song</span>
    <span className="text-xs text-gray-500">Admin</span>
  </div>

  {/* Dropdown Icon */}
  <ChevronDown
    size={16}
    className={`ml-1 transition-transform duration-200 ${
      open ? "rotate-180 text-green-600" : "rotate-0 text-gray-500"
    }`}
  />
</DropdownMenuTrigger>


      <DropdownMenuContent className="w-40 mt-1 shadow-lg">
        <DropdownMenuLabel> My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
