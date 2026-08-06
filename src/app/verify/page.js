"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function VerifyContent() {
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");

  const verified =
    mode === "verifyEmail" && !!oobCode;

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

      {verified ? (
        <>
          <h2>Email Verification</h2>

          <p>
            Your email has been verified successfully.
          </p>

        </>
      ) : (
        <>
          <h2>Verify Your Email</h2>

          <p>
            This page is used to verify your TunnelMouth account.
          </p>

          <p>
            Please open the verification email we sent to your inbox
            and click the <strong>Verify Email</strong> button.
          </p>

          <p style={{ color: "#666", marginTop: 25 }}>
            If you haven't received the email, check your spam folder
            or request a new verification email from the app.
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