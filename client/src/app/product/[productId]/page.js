import ProductScreen from "@/screens/product";
import {getProductById} from "@/action/productAction";

export default async function ProductPage({params}) {
    const {productId} = params;
    const product = await getProductById(productId)
    return (
        <>
            <ProductScreen product={product?.data}/>
        </>
    );
}
