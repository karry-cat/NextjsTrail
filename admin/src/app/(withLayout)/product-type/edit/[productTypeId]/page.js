import EditProductType from "@/screens/product-type/edit";

// const EditProductTypePage = async ({params, searchParams})=>{
const EditProductTypePage = async ({params})=>{
    return (
        <>
            <EditProductType params={await params}></EditProductType>
        </>
    )
}

export default EditProductTypePage;