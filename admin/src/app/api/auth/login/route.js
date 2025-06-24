import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import bcrypt from "bcrypt";
import {createJWT} from "@/lib/util";

export async function POST(request) {
    try {
        const data = await request.json();
        const existingCustomer = await db.buyerMaster.findUnique({
            where: {
                email: data.email,
            }
        })
        if (!existingCustomer) {
            return NextResponse.json(
                {
                    message: "User not found.",
                }, {
                    status: 404
                }
            )
        }

        const isValidPassword = await bcrypt.compare(data.password, existingCustomer.password)
        if (!isValidPassword) {
            return NextResponse.json(
                {
                    message: "Invalid credentials. Please try again.",
                }, {
                    status: 401
                }
            )
        }
        const token = await createJWT(existingCustomer)
        return NextResponse.json(
            {
                message: "Login Successfully!",
                data: existingCustomer,
                token
            }
        )
    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong.",
            error: error.message
        }, {
            status: 500
        })
    }
}