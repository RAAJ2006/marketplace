import connectMongo from '@/app/utils/connectMongo';
import User from '@/app/models/User';
import { hashPassword } from '@/app/utils/cryptoUtils';
import { createJWT } from 'did-jwt';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectMongo();
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);
        const did = `${username}-${Date.now()}`; // this is creating a username so that it doesnt get duplicated
        const pseudoname = `${Math.random().toString(36).substring(2, 8)}`;

        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists.' }, { status: 400 });
        }

        const user = new User({ username, hashedPassword, did, pseudoname });
        await user.save();

        return NextResponse.json({ message: 'Registration successful.', did }, { status: 200 });
    } catch (err) {
        return NextResponse.json({
            message: err.message
        }, { status: 500 });
    }
}
