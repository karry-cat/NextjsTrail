import {NextResponse} from "next/server";
import {getProducts} from "@/actions/productActions";

export async function GET() {
    try {
        const products = await getProducts();
        return NextResponse.json(
            {
                status: 200,
                message: "GET Called!",
                data: products
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