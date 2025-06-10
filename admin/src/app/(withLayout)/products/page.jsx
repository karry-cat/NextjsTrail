import ProductsScreen from "@/screens/products";
import {getProducts} from "@/actions/productActions";

export default async function productsManagement() {
    return (
        <>
            <ProductsScreen products={await getProducts()}/>
        </>
    );
}
