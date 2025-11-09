"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bell, Trash2, UserPlus } from "lucide-react";
import MyDropdownMenu from "@/shadCN/Mydropdown-menu";
import { toast } from "sonner";
import BranchDetailsSkeleton from "@/components/skeleton/BranchDetailsSkeleton";

interface StaffMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  branch: string;
  status: "Active" | "Suspended";
}

interface BranchItem {
  id: number;
  name: string;
  address: string;
  location: string;
  phone: string;
  users: number;
  status: "Active" | "Suspended";
}

// fallback data
const BRANCHES: BranchItem[] = [
  {
    id: 1,
    name: "Ikeja Branch",
    address: "2, Mobolaji Bank Anthony Way, Ikeja GRA, Ikeja, Lagos",
    location: "Lagos",
    phone: "09097654323",
    users: 22,
    status: "Active",
  },
  {
    id: 2,
    name: "Lekki Branch",
    address: "45 Admiralty Way, Lekki Phase 1, Lagos",
    location: "Lagos",
    phone: "09091234567",
    users: 18,
    status: "Active",
  },
  {
    id: 3,
    name: "Yaba Branch",
    address: "12 Commercial Avenue, Sabo, Yaba, Lagos",
    location: "Lagos",
    phone: "09099887766",
    users: 10,
    status: "Suspended",
  },
];

export default function BranchDetails() {
  const { id } = useParams();
  const branchId = Number(id);

  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [newUser, setNewUser] = useState<Omit<StaffMember, "id" | "branch">>({
    name: "",
    email: "",
    phone: "",
    role: "",
    status: "Active",
  });

  const branch = BRANCHES.find((b) => b.id === branchId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStaff([
        {
          id: 1,
          name: "Donna Ortiz",
          email: "donna-ortiz@example.com",
          phone: "(517) 757-3435",
          role: "Store Accountant",
          branch: branch?.name ?? "",
          status: "Active",
        },
        {
          id: 2,
          name: "Linda Ramos",
          email: "linda.ramos@example.com",
          phone: "(118) 839-8852",
          role: "Inventory Manager",
          branch: branch?.name ?? "",
          status: "Active",
        },
        {
          id: 3,
          name: "Johnny Pierce",
          email: "johnny-86@example.com",
          phone: "(858) 839-3358",
          role: "Store Sales Rep",
          branch: branch?.name ?? "",
          status: "Suspended",
        },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [branch?.name]);

  if (!branch) return <p>Branch not found</p>;
  if (loading) return <BranchDetailsSkeleton />;

  const handleDelete = (id: number) => {
    const deletedUser = staff.find((s) => s.id === id);
    setStaff(staff.filter((s) => s.id !== id));
    toast.success(`${deletedUser?.name} deleted successfully`, {
      description: "User removed from branch",
    });
  };

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.role) {
      toast.error("Please fill all fields before adding user");
      return;
    }

    const newEntry: StaffMember = {
      ...newUser,
      id: staff.length + 1,
      branch: branch.name,
    };

    setStaff([...staff, newEntry]);
    toast.success(`${newUser.name} added successfully`, {
      description: "New user has been added to branch",
    });

    setNewUser({ name: "", email: "", phone: "", role: "", status: "Active" });
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 bg-gray-50 border border-gray-100 rounded-lg px-5 py-2 shadow-sm">
        <h1 className="text-lg font-semibold text-gray-800">Sales History</h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={20} className="text-gray-700" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
          </div>
          <MyDropdownMenu />
        </div>
      </div>

      {/* Branch Info */}
      <Card className="p-4 shadow-sm">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div>
            <h2 className="text-base font-semibold text-gray-800">{branch.name}</h2>
            <p className="text-sm text-gray-500">{branch.address}</p>
          </div>

          {/* Add User */}
          <div className="flex gap-3">
            <Input placeholder="Search staff..." className="w-48" />

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <UserPlus size={16} /> Add User
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New User</DialogTitle>
                </DialogHeader>

                <div className="space-y-3 py-2">
                  <Input
                    placeholder="Full Name"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Email Address"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Phone Number"
                    value={newUser.phone}
                    onChange={(e) =>
                      setNewUser({ ...newUser, phone: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Role"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                  />
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddUser}>Add User</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card>

      {/* Staff List */}
      <Card className="overflow-x-auto shadow-sm">
        <CardContent className="p-0">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 px-6 py-3 bg-gray-50 border-b text-sm font-medium text-gray-600">
              <p>Name</p>
              <p>Contact No.</p>
              <p>Branch</p>
              <p>Role</p>
              <p>Status</p>
              <p className="text-right">Actions</p>
            </div>

            {/* Table Rows */}
            {staff.map((person) => (
              <div
                key={person.id}
                className="grid grid-cols-6 gap-4 items-center px-6 py-3 border-b text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <div className="flex flex-col">
                  <p className="font-medium">{person.name}</p>
                  <p className="text-xs text-gray-500">{person.email}</p>
                </div>

                <p>{person.phone}</p>
                <p>{person.branch}</p>
                <p>{person.role}</p>

                <Badge
                  variant="secondary"
                  className={`${
                    person.status === "Active"
                      ? "bg-green-100 text-green-700 hover:bg-green-100"
                      : "bg-red-100 text-red-700 hover:bg-red-100"
                  }`}
                >
                  {person.status}
                </Badge>

                <div className="flex justify-end">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(person.id)}
                  >
                    <Trash2
                      size={16}
                      className="text-gray-500 hover:text-red-600"
                    />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
