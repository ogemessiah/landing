'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function VerifyPage() {

  const searchParams = useSearchParams();

  const oobCode = searchParams.get('oobCode');

  const [status, setStatus] = useState('loading');

  useEffect(() => {

    if (!oobCode) {
      setStatus('error');
      return;
    }

    const verifyEmail = async () => {

      try {

        const response = await fetch(
          'https://api.tunnelmouth.com/auth/verify-email',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              oobCode,
            }),
          }
        );

        if (!response.ok) {
          throw new Error();
        }

        setStatus('success');

      } catch {

        setStatus('error');

      }

    };

    verifyEmail();

  }, [oobCode]);

  return (

    <div
      style={{
        maxWidth: 600,
        margin: '100px auto',
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: 30,
      }}
    >

      <h1 style={{ color: '#04B559' }}>
        TunnelMouth
      </h1>

      {status === 'loading' && (
        <>
          <h2>Verifying your email...</h2>
          <p>Please wait.</p>
        </>
      )}

      {status === 'success' && (
        <>
          <h2>Email verified 🎉</h2>

          <p>
            Your email has been successfully verified.
          </p>

        </>
      )}

      {status === 'error' && (
        <>
          <h2>Verification failed</h2>

          <p>
            This verification link is invalid or has expired.
          </p>
        </>
      )}

    </div>

  );
}