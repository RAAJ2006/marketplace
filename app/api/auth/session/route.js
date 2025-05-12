import { NextResponse } from 'next/server';
import connectMongo from '@/app/utils/connectMongo';
import User from '@/app/models/User';

export async function POST(req) {
    await connectMongo();

    // Retrieve the session cookie
    const sessionCookie = req.cookies.get('session');

    console.log(sessionCookie)

    // Validate the session cookie
    if (!sessionCookie || !sessionCookie.value) {
        return NextResponse.json({ isLoggedIn: false });
    }

    const sessionToken = sessionCookie.value; // Extract the value from the cookie
    try {
        const userId = sessionToken.split('-')[1]; // Extract user ID from the session token
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({ isLoggedIn: false });
        }

        return NextResponse.json({
            isLoggedIn: true,
            pseudoname: user.pseudoName,
        });
    } catch (error) {
        console.error('Error validating session:', error);
        return NextResponse.json({ isLoggedIn: false });
    }
}
