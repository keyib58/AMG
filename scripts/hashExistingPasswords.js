// scripts/update-passwords.js
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function hashPasswords() {
  try {
    const users = await prisma.user.findMany()

    for (const user of users) {
      // Check if the password is already hashed (bcrypt hashes are typically 60 characters long)
      if (user.password.length < 60) {
        const hashedPassword = bcrypt.hashSync(user.password, 10)
        await prisma.user.update({
          where: { id: user.id },
          data: { password: hashedPassword },
        })
        console.log(`Updated password for user: ${user.email}`)
      }
    }
  } catch (error) {
    console.error('Error updating passwords:', error)
  } finally {
    await prisma.$disconnect()
  }
}

hashPasswords().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})
