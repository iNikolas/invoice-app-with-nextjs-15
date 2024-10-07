"use server";

import { redirect } from "next/navigation";

import { Invoices } from "@/db/schema";
import { db } from "@/db";

export async function createAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = String(formData.get("description"));
  console.log(value);

  const [result] = await db
    .insert(Invoices)
    .values({
      value,
      description,
      status: "open",
    })
    .returning({ id: Invoices.id });

  redirect(`/invoices/${result.id}`);
}
