"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function VerifyContent() {
  const searchParams = useSearchParams();

  const verified = searchParams.get("verified");

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "100px auto",
        textAlign: "center",
        fontFamily: "Arial",
        padding: 30,
      }}
    >
      <h1 style={{ color: "#04B559" }}>
        TunnelMouth
      </h1>

      {verified === "true" ? (
        <>

          <p>
            Your email has been verified successfully.
          </p>

          <p>
            You can now return to the TunnelMouth app and sign in.
          </p>

          
        </>
      ) : (
        <>
       

          

          <p>
            Please use the verification link that was sent to your email.
          </p>
        </>
      )}
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