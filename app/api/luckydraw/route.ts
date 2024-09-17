// app/api/luckydraw/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the form data from the request
    const { firstname, lastname, email, country_code, mobilephone } = await request.json();

    // Make a POST request to HubSpot's API with the form data
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/40119618/c09c28e0-c27e-452b-87b0-70eda9145e97`,
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
            { name: 'country_code', value: country_code },
            { name: 'mobilephone', value: mobilephone },
          ],
        }),
      }
    );

    // Handle the response from HubSpot
    if (response.ok) {
      return NextResponse.json({ message: 'You have successfully entered the lucky draw!' });
    } else {
      const errorData = await response.json();
      return NextResponse.json({ message: `Failed to submit the form: ${errorData.message}` }, { status: 500 });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
  }
}
