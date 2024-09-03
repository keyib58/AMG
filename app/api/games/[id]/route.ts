// app/api/games/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
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
