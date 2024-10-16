"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/submit-button";
import { createAction } from "@/app/actions";
import { useFormStatus } from "react-dom";
import { Container } from "@/components/container";

export default function DashboardPage() {
  useFormStatus();
  const [state, setState] = React.useState("ready");
  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (state === "pending") {
      event.preventDefault();
      return;
    }

    setState("pending");
  };

  return (
    <main>
      <Container>
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold">Create Incvoice</h1>
        </div>

        <form
          action={createAction}
          onSubmit={handleOnSubmit}
          className="grid gap-4 max-w-xs"
        >
          <div>
            <Label htmlFor="name" className="block mb-2 font-semibold text-sm">
              Billing Name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block mb-2 font-semibold text-sm">
              Billing Email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label htmlFor="value" className="block mb-2 font-semibold text-sm">
              Value
            </Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label
              htmlFor="description"
              className="block mb-2 font-semibold text-sm"
            >
              Description
            </Label>
            <Textarea id="description" name="description" />
          </div>
          <div>
            <SubmitButton />
          </div>
        </form>
      </Container>
    </main>
  );
}
