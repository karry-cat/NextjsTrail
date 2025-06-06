import Label from "@/components/ui/Label";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import {getUniqueProductType, updateProductType} from "@/actions/productTypeActions";

const EditProductType = async ({params}) => {
    const id = parseInt(params.productTypeId);
    const productTypeData = await getUniqueProductType(id);
    return (
        <div>
            <h1 className="font-semibold text-2xl p-2">Edit Product Type</h1>
            {/*<hr className="my-5 "/>*/}
            <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2" action={updateProductType}>
                {
                    // errorMessage && (
                    //     <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                    //         <span className="text-red-500 col-span-2 text-md my-0 font-500">{errorMessage}</span.   >
                    //     </div>
                    // )
                }
                <input type="hidden" name="id" value={id}/>
                <div className="grid gap-2">
                    <Label required={true}>Product Type</Label>
                    <Input placeholder="Enter Product Type" name="name" defaultValue={productTypeData.name}/>
                </div>

                <Button className="w-52 col-span-2 mt-2">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default EditProductType;