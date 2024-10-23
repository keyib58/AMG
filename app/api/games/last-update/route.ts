// // app/api/games/last-update/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prisma";

import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   try {
//     // Fetch the most recent edit history entry
//     const latestHistory = await prisma.gameEditHistory.findFirst({
//       orderBy: {
//         timestamp: 'desc',  // Order by timestamp descending to get the latest entry
//       },
//     });

//     // If no history is found, return a null timestamp
//     if (!latestHistory) {
//       return NextResponse.json({ lastUpdate: null }, { status: 200 });
//     }

//     return NextResponse.json({ lastUpdate: latestHistory.timestamp }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching latest edit history:", error);
//     return NextResponse.json({ error: "Error fetching latest edit history" }, { status: 500 });
//   }
// }
export async function GET(request: NextRequest) {
    return new Response('Hello World');
  }