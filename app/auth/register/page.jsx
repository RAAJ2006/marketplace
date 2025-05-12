'use client';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [did, setDid] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error before making the request
        setLoading(true); // Set loading state to true

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            setDid(data.did);
            setTimeout(() => {
                router.push("/auth/login")
            }, 3000); // Set the DID if registration is successful

            // Redirect after a successful registration (delay to show success message)

        } catch (err) {
            setError(err.message); // Set error message if an error occurs
        } finally {
            setLoading(false); // Always reset loading state
            if (!error) { // Reset form only if there's no error
                setUsername('');
                setPassword('');
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#63e_100%)]">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-4xl font-bold text-black text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <Label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                            Username:
                        </Label>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password:
                        </Label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
                        />
                    </div>
                    {error && (
                        <p className="text-sm text-red-500 text-center">
                            {error}
                        </p>
                    )}
                    {did && (
                        <p className="text-sm text-purple-500 text-center">
                            Your DID: {did}
                        </p>
                    )}
                    {loading && (
                        <p className="text-sm text-blue-400 text-center">
                            You are being directed to the main login page...
                        </p>
                    )}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </form>
            </div>
        </div>


    );
}
