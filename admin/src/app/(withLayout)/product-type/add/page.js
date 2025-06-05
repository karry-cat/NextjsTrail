import AddProductType from "@/screens/product-type/add";

export default async function ({searchParams}) {
    return (
        <>
            <AddProductType searchParams={await searchParams}></AddProductType>
        </>
    );
}