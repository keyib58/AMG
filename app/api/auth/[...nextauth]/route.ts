
// import NextAuth from "next-auth";
// import { authOptions } from "./options";

import { NextRequest } from "next/server";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// app/api/upload/route.ts
export async function GET(request: NextRequest) {
    return new Response('Hello World');
  }