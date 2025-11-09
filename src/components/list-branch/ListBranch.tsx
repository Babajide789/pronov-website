"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Users } from "lucide-react";
import { useRouter } from "next/navigation";

type BranchItem = {
  id: number;
  name: string;
  address: string;
  location: string;
  phone: string;
  users?: number;
  status: "Active" | "Suspended";
};

const FALLBACK_BRANCHES: BranchItem[] = [
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

export default function ListBranch({ data }: { data?: BranchItem[] }) {
  const router = useRouter();
  const branches = data ?? FALLBACK_BRANCHES;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {branches.map((branch) => (
        <Card
          key={branch.id}
          onClick={() => router.push(`/branch/${branch.id}`)}
          className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">{branch.name}</CardTitle>
              <Badge
                variant="secondary"
                className={`${
                  branch.status === "Active"
                    ? "bg-green-100 text-green-700 hover:bg-green-100"
                    : "bg-red-100 text-red-700 hover:bg-red-100"
                }`}
              >
                {branch.status}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5" />
              <p>{branch.address}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <p>{branch.phone}</p>
              </div>

              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <p>{branch.users ?? 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
