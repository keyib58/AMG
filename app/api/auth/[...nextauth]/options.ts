

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
// app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
  const { file } = await req.json();
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      upload_preset: 'your_upload_preset',
    });
    return NextResponse.json({ url: uploadResponse.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
  }
}
