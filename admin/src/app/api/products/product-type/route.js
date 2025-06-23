import {getProducts} from "@/actions/productActions";
import {NextResponse} from "next/server";
import {getProductTypes} from "@/actions/productTypeActions";

export async function GET() {
    try {
        const productTypes = await getProductTypes()
        return NextResponse.json(
            {
                status: 200,
                message: "Product Types fetched successfully!",
                data: productTypes
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