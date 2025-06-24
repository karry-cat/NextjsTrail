"use server";
import bcrypt from "bcrypt";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import {createJWT} from "@/lib/util";
import {setCookie} from "@/lib/cookies";

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
    const isValidPassword = await bcrypt.compare(data.password, user?.password);
    if (!user || !isValidPassword) {
        return redirect(`/login?errorMessage="Invalid credentials. Please try again."}`);
    }
    const token = await createJWT(user);
    // console.log(token);
    setCookie("jwt_token", token, {maxAge: 2*60*60})
    redirect("/")
}