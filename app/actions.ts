"use server";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { Invoices } from "@/db/schema";
import { db } from "@/db";

export async function createAction(formData: FormData) {
  const { userId } = auth();

  if (!userId) {
    redirect(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL ?? "/");
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
  const description = String(formData.get("description"));

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
