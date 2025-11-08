"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BranchDetailsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4 bg-gray-50 border border-gray-100 rounded-lg px-5 py-3 shadow-sm">
        <Skeleton className="h-6 w-32" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Branch Info */}
      <Card className="p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-64" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-9 w-48 rounded-md" />
            <Skeleton className="h-9 w-28 rounded-md" />
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="overflow-x-auto shadow-sm">
        <CardContent className="p-0">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-4 items-center px-6 py-3 border-b"
            >
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <div className="flex justify-end">
                <Skeleton className="h-5 w-5 rounded-full" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
