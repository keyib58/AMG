// Commenting out NextAuthOptions and Prisma-related code as it's not needed right now

// import { NextAuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/lib/prisma";
// import { verifyPassword } from "utils/auth";

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials || !credentials.email || !credentials.password) {
//           return null; // Return null if credentials are missing
//         }
  
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//           select: {
//             id: true,
//             email: true,
//             password: true,
//             role: true,
//           },
//         });
  
//         if (!user || !user.password) {
//           return null; // Return null if no user is found
//         }
  
//         const isValidPassword = await verifyPassword(
//           credentials.password,
//           user.password
//         );
  
//         if (!isValidPassword) {
//           return null; // Return null if password is invalid
//         }
  
//         return { id: user.id, email: user.email, role: user.role };
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/auth/signin",
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 24 * 60 * 60, // Set session expiration to 24 hours
//   },
//   callbacks: {
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.role = token.role as string;
//       }
//       return session;
//     },
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.role = user.role;
//       }
//       return token;
//     },
//   },
// };
