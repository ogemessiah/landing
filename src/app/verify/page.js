"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function VerifyContent() {

  const searchParams = useSearchParams();

  const oobCode = searchParams.get("oobCode");

  const [status, setStatus] = useState("loading");

  useEffect(() => {

    if (!oobCode) {
      setStatus("missing");
      return;
    }

    async function verifyEmail() {

      try {

        const response = await fetch(
          "https://api.tunnelmouth.com/auth/verify-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oobCode,
            }),
          }
        );

        const data = await response.json();

        if (response.ok && data.success) {
          setStatus("success");
        } else {
          setStatus("invalid");
        }

      } catch (error) {

        console.log(error);

        setStatus("invalid");

      }

    }

    verifyEmail();

  }, [oobCode]);

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

      {status === "loading" && (
        <>
          <h2>Verifying your email...</h2>
          <p>Please wait a moment.</p>
        </>
      )}

      {status === "success" && (
        <>
          <h2>✅ Email Verified</h2>

          <p>
            Your email has been verified successfully.
          </p>

          
        </>
      )}

      {status === "missing" && (
        <>

          <p>
            Please use the verification link sent to your email.
          </p>
        </>
      )}

      {status === "invalid" && (
        <>
          <h2>Verification Failed</h2>

          <p>
            This verification link is invalid, has expired, or has already been used.
          </p>

          <p>
            Please request a new verification email from the TunnelMouth app.
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