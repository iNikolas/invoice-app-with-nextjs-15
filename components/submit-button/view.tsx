import React from "react";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

export function SubmitButton({ className, ...props }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={cn("w-full font-semibold relative", className)}
      type="submit"
      {...props}
    >
      <span className={cn(pending && "text-transparent")}>Submit</span>
      {pending && (
        <span className="absolute flex items-center justify-center">
          <LoaderCircle className="animate-spin text-gray-400" />
        </span>
      )}
    </Button>
  );
}
