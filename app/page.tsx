import { sql } from "drizzle-orm";
import Link from "next/link";

import { db } from "@/db";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const result = await db.execute(sql`SELECT current_database();`);
  return (
    <main className="flex flex-col justify-center h-screen gap-6 text-center max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invocipedia</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
      <p>{JSON.stringify(result)}</p>
    </main>
  );
}
