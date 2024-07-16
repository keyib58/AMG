// app/not-found.tsx
'use client'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    const redirectToHome = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-4 text-white">Page Not Found or Not Ready</h1>
            <button
                onClick={redirectToHome}
                className="bg-blue-500 text-white p-2 rounded-md"
            >
                Go to Home
            </button>
        </div>
    );
}
