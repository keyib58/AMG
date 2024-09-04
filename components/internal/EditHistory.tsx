// components/internal/EditHistory.tsx
'use client'
import { useEffect, useState, useCallback } from "react";

interface HistoryEntry {
    id: string;
    action: string;
    editorId: string;
    editorEmail: string;
    timestamp: string;
    details: string;
}

export default function EditHistory() {
    const [history, setHistory] = useState<HistoryEntry[]>([]);

    // Function to fetch edit history
    const fetchHistory = useCallback(async () => {
        try {
            const response = await fetch('/api/games/history');
            if (!response.ok) {
                throw new Error("Failed to fetch history");
            }
            const data = await response.json();
            setHistory(data);
        } catch (error) {
            console.error("Error fetching edit history:", error);
        }
    }, []);

    useEffect(() => {
        fetchHistory();
    }, [fetchHistory]);

    return (
        <div className="space-y-4 bg-neutral-800 p-6 rounded-lg text-white">
            <h2 className="text-xl font-semibold mb-4">All Edit Histories</h2>
            {history.length > 0 ? (
                <ul>
                    {history.map((entry) => (
                        <li key={entry.id} className="mb-4 border-b border-neutral-600 pb-2">
                            <div className="flex justify-between items-center">
                                <span>
                                    {entry.action} by {entry.editorEmail} on {new Date(entry.timestamp).toLocaleString()}
                                </span>
                                <details className="text-sm text-neutral-400">
                                    <summary>Details</summary>
                                    <pre className="whitespace-pre-wrap">{entry.details}</pre>
                                </details>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No edit history available.</p>
            )}
        </div>
    );
}
