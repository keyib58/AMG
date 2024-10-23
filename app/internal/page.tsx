// app/internal/page.tsx

// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../api/auth/[...nextauth]/options";
// import InternalContainer from "@/components/internal/InternalContainer";
// import { redirect } from "next/navigation";


export default async function InternalPage() {
    // const session = await getServerSession(authOptions);

    // if (!session || (session.user.role !== 'ADMIN' && session.user.role !== 'EDITOR')) {
    //     redirect('/');
    // }

    return (
        <div className="flex w-full flex-col items-center">
            <div className="z-10 w-full px-5 xl:px-0">
                {/* <InternalContainer /> */}
            </div>
        </div>
    );
}
