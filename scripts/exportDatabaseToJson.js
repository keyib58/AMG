// scripts/exportDatabaseToJson.js

const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function exportDatabase() {
  try {
    // Fetch data from each table in your schema
    const users = await prisma.user.findMany();
    const accounts = await prisma.account.findMany();
    const sessions = await prisma.session.findMany();
    const verificationTokens = await prisma.verificationToken.findMany();
    const news = await prisma.news.findMany();
    const games = await prisma.game.findMany();
    const tags = await prisma.tag.findMany();
    const languageInfos = await prisma.languageInfo.findMany();
    const targetMarkets = await prisma.targetMarket.findMany();
    const targetCountriesByIP = await prisma.targetCountryByIP.findMany();

    // Create an object to hold all the data
    const database = {
      users,
      accounts,
      sessions,
      verificationTokens,
      news,
      games,
      tags,
      languageInfos,
      targetMarkets,
      targetCountriesByIP,
    };

    // Convert the data to JSON format
    const jsonContent = JSON.stringify(database, null, 2);

    // Define the output path for the JSON file in the scripts folder
    const outputPathJson = path.join(__dirname, 'database_backup.json');

    // Write the JSON to a file in the scripts folder
    fs.writeFileSync(outputPathJson, jsonContent, 'utf-8');

    console.log('Database export to JSON completed successfully!');

    // Create the seed.ts file content
    const seedContent = generateSeedScript(database);

    // Define the output path for the seed.ts file in the scripts folder
    const outputPathSeed = path.join(__dirname, 'seed.ts');

    // Write the seed.ts content to a file in the scripts folder
    fs.writeFileSync(outputPathSeed, seedContent, 'utf-8');

    console.log('Seed script created successfully!');
  } catch (error) {
    console.error('Error exporting database or creating seed script:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Function to generate seed.ts content based on exported data
function generateSeedScript(database) {
  return `
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    // Seed Users
    ${database.users
      .map((user) => {
        return `await prisma.user.create({
      data: ${JSON.stringify(user, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed Accounts
    ${database.accounts
      .map((account) => {
        return `await prisma.account.create({
      data: ${JSON.stringify(account, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed Sessions
    ${database.sessions
      .map((session) => {
        return `await prisma.session.create({
      data: ${JSON.stringify(session, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed Verification Tokens
    ${database.verificationTokens
      .map((token) => {
        return `await prisma.verificationToken.create({
      data: ${JSON.stringify(token, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed News
    ${database.news
      .map((news) => {
        return `await prisma.news.create({
      data: ${JSON.stringify(news, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed Games
    ${database.games
      .map((game) => {
        return `await prisma.game.create({
      data: ${JSON.stringify(game, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed Tags
    ${database.tags
      .map((tag) => {
        return `await prisma.tag.create({
      data: ${JSON.stringify(tag, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed LanguageInfos
    ${database.languageInfos
      .map((languageInfo) => {
        return `await prisma.languageInfo.create({
      data: ${JSON.stringify(languageInfo, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed TargetMarkets
    ${database.targetMarkets
      .map((market) => {
        return `await prisma.targetMarket.create({
      data: ${JSON.stringify(market, null, 2)},
    });`;
      })
      .join('\n    ')}

    // Seed TargetCountriesByIP
    ${database.targetCountriesByIP
      .map((country) => {
        return `await prisma.targetCountryByIP.create({
      data: ${JSON.stringify(country, null, 2)},
    });`;
      })
      .join('\n    ')}
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
  `;
}

exportDatabase();
