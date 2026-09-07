"use client";

import { useState } from "react";

export default function DeleteAccountPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          reason: form.reason,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "We couldn't submit your deletion request."
        );
      }

      setSubmitted(true);

      setMessage(
        "We've sent a verification email to your account email address. Please open that email and confirm your deletion request."
      );

      setForm({
        fullName: "",
        email: "",
        reason: "",
      });
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fb",
        padding: "60px 20px",
        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "40px",
          boxShadow:
            "0 10px 35px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "32px",
              color: "#0A1628",
            }}
          >
            Delete Your TunnelMouth Account
          </h1>

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            If you would like to permanently delete
            your TunnelMouth account and associated
            personal data, submit the request below.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              background: "#eaf8f1",
              border: "1px solid #b8e5ce",
              borderRadius: "12px",
              padding: "24px",
              color: "#145c3b",
              lineHeight: 1.7,
            }}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#0F7B4D",
              }}
            >
              Check your email
            </h2>

            <p>{message}</p>

            <p>
              Open the verification email sent to the
              email address you provided and click the
              confirmation button.
            </p>

            <p
              style={{
                marginBottom: 0,
                fontSize: "14px",
              }}
            >
              If you don't see the email, check your
              spam or junk folder.
            </p>
          </div>
        ) : (
          <>
            {error && (
              <div
                style={{
                  background: "#fff1f1",
                  border: "1px solid #f0b8b8",
                  borderRadius: "10px",
                  padding: "15px",
                  marginBottom: "20px",
                  color: "#a32121",
                }}
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="fullName"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  Full name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    border:
                      "1px solid #d5d9de",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  TunnelMouth account email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    border:
                      "1px solid #d5d9de",
                    borderRadius: "8px",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  htmlFor="reason"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                    color: "#222",
                  }}
                >
                  Reason for deletion
                  <span
                    style={{
                      fontWeight: "normal",
                      color: "#777",
                    }}
                  >
                    {" "}
                    (optional)
                  </span>
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  placeholder="Optional"
                  rows={4}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "14px",
                    border:
                      "1px solid #d5d9de",
                    borderRadius: "8px",
                    fontSize: "16px",
                    resize: "vertical",
                  }}
                />
              </div>

              <div
                style={{
                  background: "#f7f9fb",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "24px",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#555",
                }}
              >
                <strong
                  style={{ color: "#222" }}
                >
                  Important:
                </strong>{" "}
                Account deletion is permanent. Your
                account and associated personal data
                will be deleted when the request is
                processed. Certain information may need
                to be retained where required for
                legitimate legal, security, fraud
                prevention, accounting, or regulatory
                purposes.
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "none",
                  borderRadius: "8px",
                  background: loading
                    ? "#7da996"
                    : "#0F7B4D",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: loading
                    ? "not-allowed"
                    : "pointer",
                }}
              >
                {loading
                  ? "Sending..."
                  : "Request Account Deletion"}
              </button>
            </form>
          </>
        )}

        <div
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            borderTop:
              "1px solid #e5e7eb",
            textAlign: "center",
            fontSize: "14px",
            color: "#777",
          }}
        >
          TunnelMouth Technologies Limited
        </div>
      </div>
    </main>
  );
}