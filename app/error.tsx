"use client";

import NextError from "next/error";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <NextError statusCode={500} title={error.message} />
    </div>
  );
}
