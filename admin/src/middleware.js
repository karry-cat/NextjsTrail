import {NextResponse} from "next/server";
import {verifyJWT} from "@/lib/util";
import {deleteCookie} from "@/lib/cookies";

export default async function handler(req, res) {
    const token = req?.cookies?.get("jwt_token")?.value;
    const publicRoutes = ["/login"];
    const isValidToken = await verifyJWT(token);
    if (!isValidToken && !publicRoutes.includes(req.nextUrl.pathname)) {
        await deleteCookie("jwt_token");
        return NextResponse.redirect(new URL("/login", req.url));
    } else if (isValidToken && publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|api|uploads).*)"],
    // runtime: 'nodejs',
}