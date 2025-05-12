'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [did, setDid] = useState('');
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ did, password }),
                credentials: 'include',
            });

            const data = await response.json();
            if (!response.ok) { throw new Error(data.error) };


            router.push('/dashboard');
        } catch (err) {
            setError(err.message);

        }


    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>DID: <input
                    type="text"
                    value={did}
                    onChange={(e) => setDid(e.target.value)}
                    required
                /></label>
                <label>
                    Password:<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />

                </label>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" >
                    Login
                </button>
            </form>
        </div>
    );
}
