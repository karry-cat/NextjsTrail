import HomeScreen from "@/screens/home";
import {getProducts, getProductTypes} from "@/action/productAction";

export default async function Home({searchParams}) {
    const products = await getProducts(searchParams);
    const productTypesRes = await getProductTypes();
    const productTypes = [
        {label: "All", value: "all"},
        ...productTypesRes?.data?.map((item)=>({
            label: item.name,
            value: item.id
        }))
    ]
    // console.log(products);
    return (
        <HomeScreen
            searchParams={await searchParams}
            products={products}
            productTypes = {productTypes}
        />
    );
}
