import ProductTypeScreen from "@/screens/product-type";
import {getProductTypes} from "@/actions/productTypeActions";

export default async function productTypeManagement() {
    return (
        <>
            <ProductTypeScreen productTypes={await getProductTypes()}/>
        </>
    );
}
