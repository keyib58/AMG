// app/internal/page.tsx

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import GameForm from "@/components/internal/GameForm";
import { redirect } from "next/navigation";

export default async function InternalPage() {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
        redirect('/');
    }

    return (
        <div className="z-10 w-full max-w-xl px-5 xl:px-0">
            <GameForm />
        </div>
    );
}
