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
    const session = await getServerSession(authOptions);

    // Check if the user is ADMIN OR EDITOR
    if (!session || !["ADMIN", "EDITOR"].includes(session.user.role)) {
      console.log("Unauthorized access attempt: User role is not ADMIN");
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    console.log("User role:", session.user.role); // This will log "ADMIN" if the user is authorized

    const data = await request.json();

    // Fetch the current game details for comparison, including related models
    const currentGame = await prisma.game.findUnique({
      where: { id },
      include: {
        tags: true,
        languageInfo: true,
        targetMarkets: true,
        targetCountriesByIP: true,
      },
    });

    if (!currentGame) {
      return NextResponse.json({ error: "Game not found" }, { status: 404 });
    }

    // Prepare the details string by comparing the current game data with the new data
    const changedFields: string[] = [];

    // Compare simple fields
    Object.keys(data).forEach((key) => {
      const oldValue = currentGame[key as keyof typeof currentGame];
      const newValue = data[key];

      const oldStr =
        oldValue !== undefined ? JSON.stringify(oldValue) : "undefined";
      const newStr =
        newValue !== undefined ? JSON.stringify(newValue) : "undefined";

      if (oldStr !== newStr) {
        changedFields.push(`${key}: ${oldStr} -> ${newStr}`);
      }
    });

    // Compare related models (tags, languageInfo, targetMarkets, targetCountriesByIP)
    const compareRelatedModels = (
      oldData: any[],
      newData: any[],
      modelName: string,
    ) => {
      const oldDataStr = JSON.stringify(oldData);
      const newDataStr = JSON.stringify(newData);
      if (oldDataStr !== newDataStr) {
        changedFields.push(`${modelName}: ${oldDataStr} -> ${newDataStr}`);
      }
    };

    compareRelatedModels(currentGame.tags, data.tags, "tags");
    compareRelatedModels(
      currentGame.languageInfo,
      data.languageInfo,
      "languageInfo",
    );
    compareRelatedModels(
      currentGame.targetMarkets,
      data.targetMarkets,
      "targetMarkets",
    );
    compareRelatedModels(
      currentGame.targetCountriesByIP,
      data.targetCountriesByIP,
      "targetCountriesByIP",
    );

    // Generate a descriptive details string
    const details = `${session.user.email} edited game '${
      currentGame.name
    }'. Changed fields: ${changedFields.join(", ")}`;

    // Update the game
    const game = await prisma.game.update({
      where: { id },
      data: {
        ...data,
        maxWin: parseFloat(data.maxWin),
        assetUrl: data.assetUrl,
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

    // Log edit history
    await prisma.gameEditHistory.create({
      data: {
        gameId: id,
        action: "updated",
        editorId: session.user.id,
        details, // Store the detailed edit information as a string
      },
    });

    return NextResponse.json(game, { status: 200 });
  } catch (error) {
    console.error("Error updating game:", error);
    return NextResponse.json({ error: "Error updating game" }, { status: 500 });
  }
}
