import Label from "@/components/ui/Label";
import {Button} from "@/components/ui/Button";
import {Input} from "@/components/ui/Input";

export default function AddProductType({searchParams}) {
    const {errorMessage} = searchParams;
    return (
        <div>
            <h1 className="font-semibold text-2xl p-2">Add Product Type</h1>
            {/*<hr className="my-5 "/>*/}
            <form className="grid gap-x-6 gap-y-10 mt-10 grid-cols-2 px-2">
                {
                    errorMessage && (
                        <div className="col-span-2 border border-red-500 rounded-xl px-5 py-3 bg-red-50 w-fit">
                            <span className="text-red-500 col-span-2 text-md my-0 font-500">{errorMessage}</span>
                        </div>
                    )
                }
                <div className="grid gap-2">
                    <Label required={true}>Product Type</Label>
                    <Input placeholder="Enter Product Type" name="name"/>
                </div>
                <div className="grid gap-2"/>
                <Button className="w-52 col-span-2 mt-2">
                    Submit
                </Button>
            </form>
        </div>
);
}