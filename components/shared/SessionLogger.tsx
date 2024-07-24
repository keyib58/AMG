// app/components/SessionLogger.js
'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Assuming you are using next-auth for session management

export default function SessionLogger() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (session) {
      console.log('User is logged in:', session.user);
    } else {
      console.log('User is not logged in');
    }
  }, [session, status]);

  return null; // This component doesn't render anything
}
