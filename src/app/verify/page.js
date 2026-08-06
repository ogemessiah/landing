'use client';

import { useSearchParams } from 'next/navigation';

export default function VerifyPage() {

  const searchParams = useSearchParams();

  const oobCode = searchParams.get('oobCode');

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "100px auto",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#04B559" }}>
        TunnelMouth
      </h1>

      <h2>Email Verification</h2>

      <p>Verification code:</p>

      <p
        style={{
          wordBreak: "break-all",
          color: "#666"
        }}
      >
        {oobCode || "No verification code found"}
      </p>
    </div>
  );
}