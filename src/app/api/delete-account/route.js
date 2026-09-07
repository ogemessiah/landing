import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const TOKEN_EXPIRY_MINUTES = 30;

function createVerificationToken(email) {
  const timestamp = Date.now().toString();

  const payload = `${email}|${timestamp}`;

  const secret =
    process.env.DELETE_ACCOUNT_SECRET;

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const token = Buffer.from(
    `${payload}|${signature}`
  ).toString("base64url");

  return token;
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error(
        "RESEND_API_KEY is missing."
      );

      return NextResponse.json(
        {
          error:
            "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    if (
      !process.env.DELETE_ACCOUNT_SECRET
    ) {
      console.error(
        "DELETE_ACCOUNT_SECRET is missing."
      );

      return NextResponse.json(
        {
          error:
            "Deletion security is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const fullName =
      typeof body.fullName === "string"
        ? body.fullName.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const reason =
      typeof body.reason === "string"
        ? body.reason.trim()
        : "";

    if (!fullName) {
      return NextResponse.json(
        {
          error:
            "Please enter your full name.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          error:
            "Please enter your account email.",
        },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const token =
      createVerificationToken(email);

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://tunnelmouth.com";

    const verificationUrl =
      `${baseUrl}/api/delete-account/verify?token=${encodeURIComponent(
        token
      )}&name=${encodeURIComponent(
        fullName
      )}&reason=${encodeURIComponent(
        reason
      )}`;

    const adminEmail =
      process.env.DELETION_REQUEST_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL;

    if (!adminEmail || !fromEmail) {
      console.error(
        "Deletion email environment variables are missing."
      );

      return NextResponse.json(
        {
          error:
            "Email configuration is incomplete.",
        },
        { status: 500 }
      );
    }

    /*
     * Send verification email to the customer.
     */

    const customerEmail =
      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject:
          "Confirm your TunnelMouth account deletion request",
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222;max-width:600px;margin:0 auto;padding:30px;">
            
            <h2 style="color:#0A1628;">
              TunnelMouth Account Deletion
            </h2>

            <p>
              Hello ${escapeHtml(fullName)},
            </p>

            <p>
              We received a request to delete your
              TunnelMouth account.
            </p>

            <p>
              If you made this request, please confirm
              it by clicking the button below.
            </p>

            <p style="margin:30px 0;">
              <a
                href="${verificationUrl}"
                style="
                  display:inline-block;
                  background:#0F7B4D;
                  color:#ffffff;
                  text-decoration:none;
                  padding:14px 24px;
                  border-radius:7px;
                  font-weight:bold;
                "
              >
                Confirm Account Deletion
              </a>
            </p>

            <p>
              This verification link expires in
              ${TOKEN_EXPIRY_MINUTES} minutes.
            </p>

            <p>
              If you did not request account deletion,
              you can safely ignore this email.
            </p>

            <p style="margin-top:30px;color:#777;font-size:13px;">
              TunnelMouth
            </p>

          </div>
        `,
      });

    if (customerEmail.error) {
      console.error(
        "Resend customer email error:",
        customerEmail.error
      );

      return NextResponse.json(
        {
          error:
            "We couldn't send the verification email. Please try again.",
        },
        { status: 500 }
      );
    }

    /*
     * Notify TunnelMouth support that a deletion
     * request has been initiated.
     */

    const adminNotification =
      await resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        subject:
          "TunnelMouth account deletion request",
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222;">
            
            <h2>
              TunnelMouth Account Deletion Request
            </h2>

            <p>
              A user has initiated an account deletion
              request.
            </p>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(fullName)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            ${
              reason
                ? `
                  <p>
                    <strong>Reason:</strong><br />
                    ${escapeHtml(reason)}
                  </p>
                `
                : ""
            }

            <p>
              The user has been sent an email asking
              them to verify ownership of the email
              address before the deletion request is
              confirmed.
            </p>

          </div>
        `,
      });

    if (adminNotification.error) {
      console.error(
        "Resend admin email error:",
        adminNotification.error
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Verification email sent successfully.",
    });
  } catch (error) {
    console.error(
      "Delete account request error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong while processing your request.",
      },
      { status: 500 }
    );
  }
}

/*
 * Verification endpoint
 */

export async function GET(request) {
  try {
    const { searchParams } =
      new URL(request.url);

    const token =
      searchParams.get("token");

    const name =
      searchParams.get("name") || "";

    const reason =
      searchParams.get("reason") || "";

    if (!token) {
      return new NextResponse(
        verificationPage(
          "Invalid verification link",
          "This account deletion verification link is missing or invalid.",
          false
        ),
        {
          status: 400,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    const decoded =
      Buffer.from(
        token,
        "base64url"
      ).toString("utf8");

    const parts = decoded.split("|");

    if (parts.length !== 3) {
      return new NextResponse(
        verificationPage(
          "Invalid verification link",
          "This verification link is not valid.",
          false
        ),
        {
          status: 400,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    const [
      email,
      timestamp,
      signature,
    ] = parts;

    const timestampNumber =
      Number(timestamp);

    if (
      !Number.isFinite(timestampNumber)
    ) {
      return new NextResponse(
        verificationPage(
          "Invalid verification link",
          "This verification link is not valid.",
          false
        ),
        {
          status: 400,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    const age =
      Date.now() - timestampNumber;

    const expiry =
      TOKEN_EXPIRY_MINUTES *
      60 *
      1000;

    if (age < 0 || age > expiry) {
      return new NextResponse(
        verificationPage(
          "Link expired",
          "This deletion verification link has expired. Please submit a new deletion request.",
          false
        ),
        {
          status: 400,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    const payload =
      `${email}|${timestamp}`;

    const expectedSignature =
      crypto
        .createHmac(
          "sha256",
          process.env.DELETE_ACCOUNT_SECRET
        )
        .update(payload)
        .digest("hex");

    const validSignature =
      crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      );

    if (!validSignature) {
      return new NextResponse(
        verificationPage(
          "Invalid verification link",
          "This verification link is not valid.",
          false
        ),
        {
          status: 400,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    /*
     * IMPORTANT:
     *
     * At this stage the user has proven ownership
     * of the email address.
     *
     * We do NOT automatically delete Firebase
     * account data yet because TunnelMouth contains
     * orders, payments and wallet-related records
     * that need to be handled according to the
     * actual database structure and retention policy.
     *
     * Instead, we notify the administrator that the
     * deletion request has been verified.
     */

    const adminEmail =
      process.env.DELETION_REQUEST_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL;

    const adminNotification =
      await resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        subject:
          "VERIFIED - TunnelMouth account deletion request",
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222;">
            
            <h2 style="color:#0F7B4D;">
              Verified Account Deletion Request
            </h2>

            <p>
              The user has successfully verified
              ownership of the email address associated
              with this deletion request.
            </p>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(email)}
            </p>

            ${
              reason
                ? `
                  <p>
                    <strong>Reason:</strong><br />
                    ${escapeHtml(reason)}
                  </p>
                `
                : ""
            }

            <p>
              The account should now be processed for
              deletion according to TunnelMouth's
              account-deletion and data-retention
              procedures.
            </p>

          </div>
        `,
      });

    if (adminNotification.error) {
      console.error(
        "Verified deletion notification error:",
        adminNotification.error
      );

      return new NextResponse(
        verificationPage(
          "Verification completed",
          "Your email has been verified, but we could not notify TunnelMouth support automatically. Please contact support.",
          true
        ),
        {
          status: 200,
          headers: {
            "Content-Type":
              "text/html; charset=utf-8",
          },
        }
      );
    }

    return new NextResponse(
      verificationPage(
        "Deletion request verified",
        "Your TunnelMouth account deletion request has been successfully verified. TunnelMouth will process the deletion of your account and associated data.",
        true
      ),
      {
        status: 200,
        headers: {
          "Content-Type":
            "text/html; charset=utf-8",
        },
      }
    );
  } catch (error) {
    console.error(
      "Deletion verification error:",
      error
    );

    return new NextResponse(
      verificationPage(
        "Something went wrong",
        "We couldn't complete the verification. Please submit a new deletion request or contact TunnelMouth support.",
        false
      ),
      {
        status: 500,
        headers: {
          "Content-Type":
            "text/html; charset=utf-8",
        },
      }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function verificationPage(
  title,
  message,
  success
) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>${escapeHtml(title)} - TunnelMouth</title>
      </head>

      <body
        style="
          margin:0;
          background:#f7f9fb;
          font-family:Arial,Helvetica,sans-serif;
        "
      >
        <div
          style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            box-sizing:border-box;
          "
        >
          <div
            style="
              width:100%;
              max-width:600px;
              background:#ffffff;
              border-radius:16px;
              padding:40px;
              box-sizing:border-box;
              box-shadow:0 10px 35px rgba(0,0,0,0.08);
              text-align:center;
            "
          >

            <h1
              style="
                color:${success ? "#0F7B4D" : "#A32121"};
                margin-top:0;
              "
            >
              ${escapeHtml(title)}
            </h1>

            <p
              style="
                color:#555;
                line-height:1.7;
                font-size:16px;
              "
            >
              ${escapeHtml(message)}
            </p>

            <p
              style="
                margin-top:30px;
                color:#777;
                font-size:14px;
              "
            >
              TunnelMouth
            </p>

          </div>
        </div>
      </body>
    </html>
  `;
}