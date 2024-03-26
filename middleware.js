import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log("middleware", req.nextauth);
    if (
      req.nextUrl.pathname.startsWith("/student") &&
      req.nextauth.token?.user.role !== "student"
    ) {
      return NextResponse.redirect(new URL("/denied", req.url));
    }
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.user.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/denied", req.url));
    }
    if (
      req.nextUrl.pathname.startsWith("/charity") &&
      req.nextauth.token?.user.role !== "charity"
    ) {
      return NextResponse.redirect(new URL("/denied", req.url));
    }
    if (
      req.nextUrl.pathname.startsWith("/auth/admin/signup") &&
      req.nextauth.token?.user.role !== "admin"
    ) {
      return NextResponse.redirect(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
    secret: process.env.SECRET,
  }
);

export const config = {
  matcher: [
    "/student/:path*",
    "/admin/:path*",
    "/charity/:path*",
    "/auth/admin/:path*",
  ],
};
