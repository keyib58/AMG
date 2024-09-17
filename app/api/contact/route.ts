import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, phone, department, subject, message } = await request.json();

  // Construct the body for HubSpot API submission
  const body = {
    fields: [
      { name: "firstname", value: firstname },
      { name: "lastname", value: lastname },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "department", value: department }, // Ensure this matches HubSpot's property name and expected value
      { name: "subject", value: subject },       // Ensure this matches HubSpot's property name and expected value
      { name: "message", value: message },
    ],
  };

  try {
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/40119618/93524f13-da86-4637-aee9-6b2f4d477756`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: "Form submitted successfully!" });
    } else {
      // Log the error response for debugging
      console.error('HubSpot API Error:', result);
      return NextResponse.json(
        { message: `Failed to submit form: ${result.message || 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred while submitting the form.' },
      { status: 500 }
    );
  }
}
