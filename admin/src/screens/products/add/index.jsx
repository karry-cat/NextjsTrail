import Label from "@/components/ui/Label";
import {Button} from "@/components/ui/Button";
import {Input} from "@/components/ui/Input";
import {createUser} from "@/actions/userActions";

export default function AddProducts({searchParams}) {
    console.log(searchParams)
    const {errorMessage} = searchParams;
    return (
        <div>
            <h1 className="font-semibold text-2xl p-2">Add Product</h1>
            {/*<hr className="my-5 "/>*/}
            <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2" action={createUser}>
                {
                    errorMessage && (
                        <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            <span className="text-red-500 col-span-2 text-md my-0 font-500">{errorMessage}</span>
                        </div>
                    )
                }
                <div className="grid gap-2">
                    <Label required={true}>Username</Label>
                    <Input placeholder="Enter Product Name" name="name"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Product Type</Label>
                    <select className="custom-input appearance-none cursor-pointer" name="productType">
                        <option value="">Select Product Type</option>
                        <option value="Kid's Clothing">Kid's Clothing</option>
                        <option value="Men's Clothing">Men's Clothing</option>
                    </select>
                </div>

                <Button className="w-52 col-span-2 mt-2">
                    Submit
                </Button>
            </form>
        </div>
    );
}