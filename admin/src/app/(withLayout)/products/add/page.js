import AddProducts from "@/screens/products/add";
import {getProductTypes} from "@/actions/productTypeActions";

export default async function ({searchParams}) {
    return (
        <>
            <AddProducts searchParams={await searchParams} productTypes={await getProductTypes()}></AddProducts>
        </>
    );
}