import {getProductTypes} from "@/actions/productTypeActions";
import EditProducts from "@/screens/products/edit";
import {getUniqueProduct} from "@/actions/productActions";

export default async function EditProductsPage ({searchParams, params}) {
    const product = await getUniqueProduct(params.productId);
    return (
        <>
            <EditProducts
                searchParams={await searchParams}
                product={product}
                productTypes={await getProductTypes()}/>
        </>
    );
}