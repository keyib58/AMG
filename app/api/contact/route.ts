// app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, phone, department, subject, message } = await request.json();

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/40119618/5bec85bc-8d42-4aa4-b414-2570140283d1`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: firstname },
          { name: 'lastname', value: lastname },
          { name: 'email', value: email },
          { name: 'phone', value: phone },
          { name: 'department', value: department },
          { name: 'subject', value: subject },
          { name: 'message', value: message },
        ],
      }),
    }
  );

  if (response.ok) {
    return NextResponse.json({ message: 'Form submitted successfully!' });
  } else {
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}
