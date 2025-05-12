
import connectMongo from '@/app/utils/connectMongo';
import User from '@/app/models/User';
import { verifyPassword } from '@/app/utils/cryptoUtils';
import { NextResponse } from 'next/server';


export async function POST(req) {
    try {
        await connectMongo();
        const { did, password } = await req.json();

        if (!did || !password) {
            return NextResponse.json({ error: 'DID and password are required.' }, { status: 400 });
        }

        const user = await User.findOne({ did });
        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
        }
        console.log(user)
        const isPasswordValid = await verifyPassword(password, user.hashedPassword);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
        }

        const sessionToken = `session-${user._id}-${Date.now()}`;
        let response = NextResponse.json({ message: 'Login successful.', pseudoname: user.pseudoname }, { status: 200 });

        response.cookies.set('session', sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Ensure secure flag is conditional on environment
            sameSite: 'strict',
            path: '/', // Make the cookie available to all routes
        });

        return response;
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
