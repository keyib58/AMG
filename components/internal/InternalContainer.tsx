// components/internal/InternalContainer.tsx
'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import GameForm from './GameForm';
import EditHistory from './EditHistory';

export default function InternalContainer() {
    const [activeView, setActiveView] = useState<'editGames' | 'checkLogs'>('editGames');
    const { data: session, status } = useSession();
    const [isAdmin, setIsAdmin] = useState(false);
    const [lastUpdate, setLastUpdate] = useState<string | null>(null);  // State to store the last update time

    useEffect(() => {
        // Check if the user is admin
        if (session?.user?.role === 'ADMIN') {
            setIsAdmin(true);
        }
    }, [session]);

    useEffect(() => {
        // Fetch the last update time from the API
        const fetchLastUpdate = async () => {
            try {
                const response = await fetch('/api/games/last-update');
                const data = await response.json();
                setLastUpdate(data.lastUpdate);  // Set the last update time
            } catch (error) {
                console.error("Error fetching last update:", error);
            }
        };

        fetchLastUpdate();
    }, [activeView]);  // Fetch last update whenever the active view changes

    // Render loading state while session is loading
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-1/4 bg-neutral-900 text-white p-4">
                <h3 className="text-2xl font-bold mb-4">Internal Dashboard</h3>
                <div>Last updated: {lastUpdate ? new Date(lastUpdate).toLocaleString() : 'No updates yet'}</div> {/* Display last update time */}
                <ul>
                    <li
                        className={`cursor-pointer mb-2 p-2 rounded-md ${activeView === 'editGames' ? 'bg-neutral-700' : 'hover:bg-neutral-800'}`}
                        onClick={() => setActiveView('editGames')}
                    >
                        Edit Games
                    </li>
                    {/* Conditionally render "Check Logs" only if user is admin */}
                    {isAdmin && (
                        <li
                            className={`cursor-pointer p-2 rounded-md ${activeView === 'checkLogs' ? 'bg-neutral-700' : 'hover:bg-neutral-800'}`}
                            onClick={() => setActiveView('checkLogs')}
                        >
                            Check Logs
                        </li>
                    )}
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 bg-neutral-700 overflow-y-auto">
                {activeView === 'editGames' && <GameForm />}
                {/* Render EditHistory only if user is admin */}
                {activeView === 'checkLogs' && isAdmin && <EditHistory />}
            </main>
        </div>
    );
}
