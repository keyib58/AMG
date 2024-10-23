// // app/api/submit-form/route.ts

// import { NextRequest, NextResponse } from 'next/server';

// export async function PUT(request: NextRequest) {
//   const { email } = await request.json();

//   const response = await fetch(
//     `https://api.hsforms.com/submissions/v3/integration/submit/40119618/7d6a6b52-8b3a-4667-8ff7-7bddbabe4d49`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         fields: [
//           {
//             name: 'email',
//             value: email,
//           },
//         ],
//       }),
//     }
//   );

//   if (response.ok) {
//     return NextResponse.json({ message: 'Form submitted successfully' });
//   } else {
//     return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
//   }
// }
