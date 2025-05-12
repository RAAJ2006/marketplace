'use client';

import { useSession } from '@/app/context/SessionContext';

export default function Dashboard() {
    const { session } = useSession();

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            {session.pseudoname && <h2 className='text-black'>Signed in as {session.pseudoname}</h2>}
        </div>
    );
}
