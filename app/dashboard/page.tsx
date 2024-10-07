import React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="flex flex-col h-screen gap-6 text-center max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <p>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/invoices/new">
              <CirclePlus className="h-4 w-4" />
              Create Invoice
            </Link>
          </Button>
        </p>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="p-4 text-left w-[100px]">Date</TableHead>
            <TableHead className="p-4 text-left">Customer</TableHead>
            <TableHead className="p-4 text-left">Email</TableHead>
            <TableHead className="p-4 text-center">Status</TableHead>
            <TableHead className="p-4 text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="p-4 text-left font-medium">
              <span className="font-semibold">10/31/2024</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span className="font-semibold">Philip J. Fry</span>
            </TableCell>
            <TableCell className="p-4 text-left">
              <span>fry@latetexpress.com</span>
            </TableCell>
            <TableCell className="p-4 text-center">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="p-4 text-right">
              <span>$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
