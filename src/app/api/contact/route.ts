import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, message, token } =
    await req.json();
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return NextResponse.json(
      { success: false, message: "reCAPTCHA token is missing." },
      { status: 400 },
    );
  }

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(verificationUrl, {
      method: "POST",
    });

    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      // reCAPTCHA verification successful, process form data here
      console.log("Form data:", { firstName, lastName, email, phone, message });
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully.",
      });
    } else {
      // reCAPTCHA verification failed
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed. Score: " + data.score,
        },
        { status: 400 },
      );
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return NextResponse.json(
      { success: false, message: "Error verifying reCAPTCHA." },
      { status: 500 },
    );
  }
}
