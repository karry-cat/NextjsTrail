import ProductScreen from "@/screens/product";

export default async function ProductPage({params}) {
    return (
        <>
            <ProductScreen params={await params}/>
        </>
    );
}
