import React from "react";
import { Container } from "../container";

export function Footer() {
  return (
    <header className="mt-6 mb-8">
      <Container className="flex justify-between gap-4">
        <p className="text-sm">
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm">
          Created by Mykola Lebid with Next.js Xata and Clerk
        </p>
      </Container>
    </header>
  );
}
