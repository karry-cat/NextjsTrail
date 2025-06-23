import HomeScreen from "@/screens/home";
import {getProducts} from "@/action/productAction";

export default async function Home({searchParams}) {
    const products = await getProducts();
    console.log(products);
    return (
        <HomeScreen searchParams={await searchParams} products={products} />
    );
}
