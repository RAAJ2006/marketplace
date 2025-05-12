import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token");

  // If the token exists, verify it
  if (token) {
    try {
      // Verify the JWT token
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      // Attach user data to the request if needed
      req.user = decoded;
      return NextResponse.next();
    } catch (err) {
      // Token verification failed, redirect to login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // If no token, redirect to login
  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/dashboard/:path*", "/protected-route"], // Specify the routes that need authentication
};
