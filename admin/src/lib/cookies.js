'use server'
import {cookies} from "next/headers";

export async function setCookie(name, value, options = {}) {
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        ...options
    }
    await cookies().set(name, value, cookieOptions);
}

export async function getCookie(name) {
    const cookie = await cookies().get(name);
    return cookie?.value || null;
}

export async function deleteCookie(name) {
    await cookies().delete(name);
}