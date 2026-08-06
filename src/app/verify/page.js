"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function VerifyContent() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const success = mode === "verifyEmail";

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "100px auto",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#04B559" }}>
        TunnelMouth
      </h1>

      <h2>
        {success ? "Email Verified!" : "Verification Complete"}
      </h2>

      <p>
        {success
          ? "Your email has been verified successfully. You can now return to TunnelMouth app and sign in."
          : "This action has been completed successfully."}
      </p>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <VerifyContent />
    </Suspense>
  );
}