"use client";

import { useState, useEffect } from "react";
import ListBranch from "@/components/list-branch/ListBranch";
import { Button } from "@/components/ui/button";
import MyDropdownMenu from "@/shadCN/Mydropdown-menu";
import { Bell, Plus, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

/**
 * Branch type (kept here for local ease; you can move to a shared file)
 */
type BranchItem = {
  id: number;
  name: string;
  address: string;
  location: string;
  phone: string;
  users?: number;
  status: "Active" | "Suspended";
};

/** initial data used for display (no setState inside effect) */
const INITIAL_BRANCHES: BranchItem[] = [
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

export default function Branch() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [branches, setBranches] = useState<BranchItem[]>(() => INITIAL_BRANCHES);
  const [search, setSearch] = useState("");

  // simulate slow network for skeleton only (no synchronous setState in effect)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700); // shorter, pleasant delay
    return () => clearTimeout(t);
  }, []);

  const filteredBranches = branches.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add new branch handler (form will call this)
  const addBranch = (payload: Omit<BranchItem, "id" | "users">) => {
    const newBranch: BranchItem = {
      ...payload,
      id: Date.now(),
      users: 0,
    };
    setBranches((prev) => [newBranch, ...prev]);
    toast.success("Branch added successfully");
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6 bg-background border border-border rounded-xl px-6 py-3 shadow-sm">
        <h1 className="text-lg font-semibold">Sales History</h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell size={20} className="text-muted-foreground" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border border-background" />
          </div>
          <MyDropdownMenu />
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="space-y-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-base font-medium text-foreground/80">Branches</p>

          <div className="flex items-center gap-3">
            <div className="relative w-[260px]">
              <Search className="absolute left-3 top-2.5 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search branches..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Branch
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Branch</DialogTitle>
                </DialogHeader>

                {/* --- FORM --- */}
                <AddBranchForm
                  onAdd={(data) => {
                    addBranch(data);
                    setOpen(false); // close modal on success
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* LIST / SKELETON */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="w-full h-28 rounded-lg" />
            ))}
          </div>
        ) : filteredBranches.length ? (
          <ListBranch data={filteredBranches} />
        ) : (
          <p className="text-muted-foreground text-sm italic">
            No matching branches found.
          </p>
        )}
      </div>
    </>
  );
}

/* ---------- AddBranchForm component (local) ---------- 
   Required fields: name, location, address, phone, status (radio)
*/
function AddBranchForm({
  onAdd,
}: {
  onAdd: (payload: {
    name: string;
    location: string;
    address: string;
    phone: string;
    status: "Active" | "Suspended";
  }) => void;
}) {
  // local state for controlled form (keeps validations and UX simple)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"Active" | "Suspended">("Active");
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location || !address || !phone) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitting(true);
    // emulate async save
    setTimeout(() => {
      onAdd({ name, location, address, phone, status });
      setName("");
      setLocation("");
      setAddress("");
      setPhone("");
      setStatus("Active");
      setSubmitting(false);
    }, 300);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="space-y-1">
        <label className="text-sm font-medium">Branch Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Enter branch name" required />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Location</label>
        <Input value={location} onChange={(e) => setLocation(e.target.value)} name="location" placeholder="City / State" required />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Address</label>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} name="address" placeholder="Full address" required />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Phone Number</label>
        <Input value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" placeholder="e.g. 0909xxxxxxx" required />
      </div>

      <div className="flex items-center gap-4">
        <div>
          <label className="text-sm font-medium block">Status</label>
          <div className="flex items-center gap-3 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={status === "Active"}
                onChange={() => setStatus("Active")}
                className="accent-primary"
              />
              <span>Active</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Suspended"
                checked={status === "Suspended"}
                onChange={() => setStatus("Suspended")}
                className="accent-red-500"
              />
              <span>Suspended</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" type="button" onClick={() => {
          setName(""); setLocation(""); setAddress(""); setPhone(""); setStatus("Active");
        }}>
          Cancel
        </Button>
        <Button type="submit" className="ml-auto" disabled={submitting}>
          {submitting ? "Saving..." : "Save Branch"}
        </Button>
      </div>
    </form>
  );
}
