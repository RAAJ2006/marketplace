'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
    const [session, setSession] = useState({ isLoggedIn: false, pseudoname: '' });
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await fetch('/api/auth/session', {
                    method: 'POST',
                    credentials: 'include',
                });

                if (!response.ok) {
                    router.push('/auth/login');
                    return;
                }

                const data = await response.json();
                if (data.isLoggedIn) {
                    setSession({ isLoggedIn: true, pseudoname: data.pseudoname });
                } else {
                    router.push('/auth/login');
                }
            } catch (error) {
                console.error('Error fetching session:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSession();
    }, [router]);

    return (
        <SessionContext.Provider value={{ session, setSession, loading }}>
            {!loading && children}
        </SessionContext.Provider>
    );
};

export const useSession = () => useContext(SessionContext);
