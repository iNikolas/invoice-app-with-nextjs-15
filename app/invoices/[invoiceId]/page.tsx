import React from "react";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default async function InvoicePage({
  params,
}: {
  params: { invoiceId: string };
}) {
  const [invoice] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, Number.parseInt(params.invoiceId, 10)));

  return (
    <main className="h-screen max-w-5xl mx-auto my-12">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          Invoice #{params.invoiceId}
          <Badge
            className={cn(
              "rounded-full capitalize",
              invoice.status === "open" && "bg-blue-500",
              invoice.status === "paid" && "bg-green-600",
              invoice.status === "void" && "bg-zinc-700",
              invoice.status === "uncollectible" && "bg-red-600",
            )}
          >
            {invoice.status}
          </Badge>
        </h1>
        <p></p>
      </div>
      <p className="text-3xl mb-3">${(invoice.value / 100).toFixed(2)}</p>
      <p className="text-lg mb-8">{invoice.description}</p>

      <h2 className="font-bold text-lg mb-4">Billing Details</h2>

      <ul className="grid gap-2">
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice ID
          </strong>
          <span>{invoice.id}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Date
          </strong>
          <span>{new Date(invoice.createTs).toLocaleDateString()}</span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Name
          </strong>
          <span></span>
        </li>
        <li className="flex gap-4">
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Email
          </strong>
          <span></span>
        </li>
      </ul>
    </main>
  );
}
