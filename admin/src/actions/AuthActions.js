"use server";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import {createJWT, verifyJWT} from "@/lib/util";
import {deleteCookie, getCookie, setCookie} from "@/lib/cookies";

export async function loginUser(formData) {
    const data = {
        userName: formData.get("userName"),
        password: formData.get("password"),
    }
    const user = await db.adminUser.findUnique({
        where: {
            userName: data.userName
        }
    })
    if (!user) {
        return redirect(`/login?errorMessage="Invalid credentials. Please try again."`);
    }
    const isValidPassword = await bcrypt.compare(data.password, user?.password);
    if (!isValidPassword) {
        return redirect(`/login?errorMessage="Invalid credentials. Please try again."`);
    }
    const token = await createJWT(user);
    // console.log(token);
    await setCookie("jwt_token", token, {maxAge: 2 * 60 * 60})
    redirect("/")
}

export async function jwtTokenVerification() {
    const token =  await getCookie("jwt_token");
    const tokenData = await verifyJWT(token);
    if (!tokenData) {
        await deleteCookie("jwt_token");
        return redirect("/login");
    }
    return tokenData;
}

export async function getUserData() {
    const decodedToken = await jwtTokenVerification();
    const userData = await db.adminUser.findUnique({
        where: {
            id: decodedToken.id
        }
    })
    return userData;
}

export async function logoutUser() {
    await deleteCookie("jwt_token");
    redirect("/login");
}