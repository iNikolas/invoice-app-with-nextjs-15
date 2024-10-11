import Link from "next/link";

import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex flex-col justify-center h-screen gap-6 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invocipedia</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </main>
  );
}
