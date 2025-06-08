import AddProducts from "@/screens/products/add";

export default async function ({searchParams}) {
    return (
        <>
            <AddProducts searchParams={await searchParams}></AddProducts>
        </>
    );
}