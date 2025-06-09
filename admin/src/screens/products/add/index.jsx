'use client'
import Label from "@/components/ui/Label";
import {Button} from "@/components/ui/Button";
import {Input} from "@/components/ui/Input";
import {createUser} from "@/actions/userActions";
import Switch from "@/components/ui/Switch";
import CustomFileInput from "@/components/ui/CustomFileInput";

export default function AddProducts({searchParams, productTypes}) {
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
                        {
                            productTypes?.map((productType, index) => (
                                <option value={productType.id} key={productType.id}>
                                    {productType.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>MRP</Label>
                    <Input placeholder="Enter MRP" name="mrp"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Selling Price</Label>
                    <Input type="number" placeholder="Enter Selling Price" name="sellPrice"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Image</Label>
                    <CustomFileInput name="image" required/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Small Size</Label>
                    <Input type="number" placeholder="Enter Stock of Small Size" name="smallsize"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Medium Size</Label>
                    <Input type="number" placeholder="Stock of Medium Size" name="mediumsize"/>
                </div>
                <div className="grid gap-2">
                    <Label required={true}>Stock of Large Size</Label>
                    <Input type="number" placeholder="Stock of Large Size" name="largeSize"/>
                </div>
                {/*<div className="grid gap-2">*/}
                <div className="grid gap-2">
                    <Label required={true}>Product Status</Label>
                    <Switch name="isActive"/>
                </div>
                <div className="grid col-span-2 gap-2">
                    <Label required={true}>Description</Label>
                    <textarea
                        className="custom-input h-auto"
                        name="description"
                        rows={5}
                        placeholder="Enter Product Description"
                    />
                </div>

                <Button className="w-52 col-span-2 mt-2">
                    Submit
                </Button>
            </form>
        </div>
    );
}