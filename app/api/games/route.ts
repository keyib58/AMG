// api/games/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const games = await prisma.game.findMany({
      include: {
        languageInfo: true,
        tags: true,
      },
    });
    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json({ error: "Error fetching games" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const game = await prisma.game.create({
      data: {
        ...data,
        RTP: parseFloat(data.RTP.toString()),
        maxWin: parseFloat(data.maxWin.toString()),
        popularRank: parseInt(data.popularRank.toString(), 10),
        languageInfo: {
          create: data.languageInfo,
        },
        tags: {
          create: data.tags,
        },
      },
    });

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    console.error("Error creating game:", error);
    return NextResponse.json({ error: "Error creating game" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await request.json();

    const game = await prisma.game.update({
      where: { id },
      data: {
        ...data,
        RTP: parseFloat(data.RTP.toString()),
        maxWin: parseFloat(data.maxWin.toString()),
        popularRank: parseInt(data.popularRank.toString(), 10),
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
      },
    });

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    console.error("Error updating game:", error);
    return NextResponse.json({ error: "Error updating game" }, { status: 500 });
  }
}
