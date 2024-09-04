// app/api/games/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    // Get session to verify user role
    const session = await getServerSession(authOptions);

    // Check if session exists and if user role is ADMIN
    if (!session || !session.user || session.user.role !== "ADMIN") {
      console.log("Unauthorized access attempt: User role is not ADMIN");
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    console.log("User role:", session.user.role); // This will log "ADMIN" if the user is authorized

    const data = await request.json();

    const game = await prisma.game.update({
      where: { id },
      data: {
        ...data,
        maxWin: parseFloat(data.maxWin),
        assetUrl: data.assetUrl, // Ensure assetUrl is included in the update
        languageInfo: {
          deleteMany: {},
          create: data.languageInfo.map((info: any) => ({
            language: info.language,
            trailerLink: info.trailerLink,
            demoLink: info.demoLink,
          })),
        },
        tags: {
          deleteMany: {},
          create: data.tags.map((tag: any) => ({
            name: tag.name,
          })),
        },
        targetMarkets: {
          deleteMany: {},
          create: data.targetMarkets.map((market: any) => ({
            market: market.market,
          })),
        },
        targetCountriesByIP: {
          deleteMany: {},
          create: data.targetCountriesByIP.map((country: any) => ({
            country: country.country,
          })),
        },
      },
    });

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    console.error("Error updating game:", error);
    return NextResponse.json({ error: "Error updating game" }, { status: 500 });
  }
}
