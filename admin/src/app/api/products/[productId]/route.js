import {getProductTypes} from "@/actions/productTypeActions";
import {NextResponse} from "next/server";
import {getUniqueProduct} from "@/actions/productActions";

export async function GET(request, {params}) {
    try {
        const productId = params.productId;
        const product = await getUniqueProduct(productId)
        if (!product) {
            return NextResponse.json(
                {
                    message: `Product with id ${productId} not found!`,
                },
                {
                    status: 404
                }
            );
        }
        return NextResponse.json(
            {
                status: 200,
                message: "product details fetched successfully!",
                data: product
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