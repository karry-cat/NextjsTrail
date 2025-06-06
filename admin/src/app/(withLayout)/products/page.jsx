import ProductsScreen from "@/screens/products";
import {getProductTypes} from "@/actions/productTypeActions";

export default async function productsManagement() {
    return (
        <>
            <ProductsScreen productTypes={await getProductTypes()}/>
        </>
    );
}
