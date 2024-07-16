//app/api/games/[id]/route.ts

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
        RTP: parseFloat(data.RTP),
        maxWin: parseFloat(data.maxWin),
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
