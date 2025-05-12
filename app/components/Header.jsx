'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useSession } from '@/app/context/SessionContext';
import Link from 'next/link';

export default function Header() {
    const router = useRouter();
    const {session, setSession } = useSession();

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        setSession({ isLoggedIn: false, pseudoname: '' });
        router.push('/auth/register');
    };

    return (
        <header className="flex flex-row mt-6 mx-8 rounded-lg justify-between items-center bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#c7a7ff_100%)] py-6 px-8 shadow-lg">
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => {
                        session.isLoggedIn ? router.push("/dashboard") : router.push("/");
                    }}
                    className="text-purple-400 font-bold font-mono italic text-3xl hover:text-purple-300 transition-colors"
                >
                    CandyBay
                </button>
                <nav className="hidden md:flex space-x-6 ml-8">
                    <Link href="/products" className="text-gray-600 hover:text-purple-500 transition-colors">
                        Products
                    </Link>
                    <Link href="/categories" className="text-gray-600 hover:text-purple-500 transition-colors">
                        Categories
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-purple-500 transition-colors">
                        About
                    </Link>
                </nav>
            </div>

            <form className="flex items-center space-x-3 bg-white p-2 rounded-full shadow-md hover:shadow-xl transition-shadow">
                <Input
                    name="search"
                    type="text"
                    placeholder="Search for products..."
                    className="w-80 px-4 py-2 rounded-full text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 focus:outline-none transition-colors">
                    Search
                </Button>
            </form>

            {session.isLoggedIn ? (
                <div className="flex items-center space-x-4">
                    <span className="text-black text-lg font-medium">Welcome, {session.pseudoname}!</span>
                    <button
                        onClick={handleLogout}
                        className="text-purple-400 font-bold font-mono italic text-4xl py-2 px-4 rounded-full transition-all"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="flex items-center space-x-4">
                    <Link
                        href="/auth/register"
                        className="text-purple-500 hover:text-purple-600 font-semibold transition-colors"
                    >
                        Register
                    </Link>
                   
                </div>
            )}
        </header>
    );
}

// Still some work left but it is working thanks also make this component good night good night bro okay