import { NextRequest, NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

// Set your SendGrid API key
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, phone, department, subject, message } = await request.json();

  const emailContent = `
    You have received a new contact form submission:

    Name: ${firstname} ${lastname}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Department: ${department || "Not provided"}
    Subject: ${subject}
    Message: ${message}

    Please respond as soon as possible.
  `;

  const mailOptions = {
    to: "hello@amgaming.ca", // Your email address
    from: "no-reply@amgaming.ca", // Must be verified in SendGrid
    subject: `New Contact Form Submission: ${subject}`,
    text: emailContent,
  };

  try {
    // Send email using SendGrid
    await sendgrid.send(mailOptions);

    return NextResponse.json({ message: "Form submitted successfully and email sent!" });
  } catch (error) {
    console.error("Error sending email:", error.response?.body || error.message);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
