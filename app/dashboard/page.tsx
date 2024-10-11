import React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

import { db } from "@/db";
import { Invoices } from "@/db/schema";
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
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

export default async function DashboardPage() {
  const results = await db.select().from(Invoices);
  return (
    <main className="h-screen my-12">
      <Container>
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
            {results.map((result) => (
              <TableRow className="[&_td]:p-0" key={result.id}>
                <TableCell className="text-left font-medium">
                  <Link
                    className="p-4 block font-semibold"
                    href={`/invoices/${result.id}`}
                  >
                    {new Date(result.createTs).toLocaleDateString()}
                  </Link>
                </TableCell>
                <TableCell className="text-left">
                  <Link
                    className="p-4 block font-semibold"
                    href={`/invoices/${result.id}`}
                  >
                    Philip J. Fry
                  </Link>
                </TableCell>
                <TableCell className="text-left">
                  <Link className="p-4 block" href={`/invoices/${result.id}`}>
                    fry@latetexpress.com
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <Link className="p-4 block" href={`/invoices/${result.id}`}>
                    <Badge
                      className={cn(
                        "rounded-full capitalize",
                        result.status === "open" && "bg-blue-500",
                        result.status === "paid" && "bg-green-600",
                        result.status === "void" && "bg-zinc-700",
                        result.status === "uncollectible" && "bg-red-600",
                      )}
                    >
                      {result.status}
                    </Badge>
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link className="p-4 block" href={`/invoices/${result.id}`}>
                    ${(result.value / 100).toFixed(2)}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </main>
  );
}
