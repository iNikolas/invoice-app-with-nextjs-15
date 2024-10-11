import React from "react";

import { cn } from "@/lib/utils";

import { ContainerProps } from "./types";

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("max-w-5xl mx-auto px-5", className)} {...props}>
      {children}
    </div>
  );
}
