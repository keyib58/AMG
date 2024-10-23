// // app/api/games/history/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/options";

import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   try {
//     const session = await getServerSession(authOptions);

//     if (!session || !session.user) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
//     }

//     // Fetch all game edit histories including the editor's email
//     const editHistories = await prisma.gameEditHistory.findMany({
//       include: {
//         editor: {
//           select: {
//             email: true,
//           },
//         },
//       },
//       orderBy: { timestamp: "desc" }, // Order by timestamp descending
//     });

//     // Format the data to include editorEmail in each history entry
//     const formattedHistories = editHistories.map((history) => ({
//       ...history,
//       editorEmail: history.editor.email,
//     }));

//     return NextResponse.json(formattedHistories, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching edit histories:", error);
//     return NextResponse.json(
//       { error: "Error fetching edit histories" },
//       { status: 500 },
//     );
//   }
// }


//just export a default route.ts to prevent error
export async function GET(request: NextRequest) {
  return new Response('Hello World');
}