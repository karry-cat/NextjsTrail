import {NextResponse} from "next/server";
import {db} from "@/lib/db";
import {verifyJWT} from "@/lib/util";

export async function GET(request) {
    try {
        const token = request?.cookies?.get("customer_jwt_token")?.value;
        // console.log(request?.cookies);
        const decodedToken = await verifyJWT(token);
        if(!decodedToken){
            return NextResponse.json(
                {
                    message: "Unauthorized.",
                }, {
                    status: 401
                }
            );
        }
        const customerData = await db.buyerMaster.findUnique({
            where: {
                email: decodedToken.email
            }
        })
        return NextResponse.json(
            {
                status: 200,
                message: "Custom's data fetched successfully!",
                data: customerData
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