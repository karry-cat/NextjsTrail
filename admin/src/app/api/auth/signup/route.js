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
        if (existingCustomer) {
            return NextResponse.json(
                {
                    message: "User with this email already exists.",
                }, {
                    status: 409
                }
            )
        }
        const salt = bcrypt.genSaltSync(5);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const newCustomer = await db.buyerMaster.create({
            data: {
                customerName: data.name,
                email: data.email,
                password: hashedPassword,
            }
        });
        const token = await createJWT(newCustomer)
        return NextResponse.json(
            {
                message: "User Created successfully!",
                data: newCustomer,
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