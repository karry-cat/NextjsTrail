import Image from "next/Image"
import {StarIcon} from "@/components/icons";
import {Button} from "@/components/ui/Button";

export default function ProductScreen() {

    const sizeOptions = [
        {label: "s", value: "smallSize"},
        {label: "M", value: "mediumSize"},
        {label: "L", value: "largeSize"}
    ]

    return (
        <div className="my-10 p-5 rounded-xl bg-white grid grid-cols-2 gap-5">
            <div className="w-full h-full bg-gray-100 rounded-xl p-3">
                <Image
                    className="w-full h-full max-h-[calc(100vh-150px)] rounded-xl m-auto"
                    src="/next.svg"
                    alt="product"
                    width={0}
                    height={0}
                    sizes="100vw"/>
            </div>
            <div className="px-5">
                <div className="flex justify-end">
                    <div className="product-type-label">
                        Product Type
                    </div>
                </div>
                <h1 className="text-2xl font-medium">Product Name</h1>
                <div className="flex gap-x-1">
                    {
                        [...Array(5)].map((_, index) => (
                            <StarIcon key={index}/>
                        ))
                    }
                </div>
                <div className="my-7">
                    <h6 className="text-sm font-medium text-green-600">
                        Special Price
                    </h6>
                    <div className="text-xl font-medium flex gap-x-3 items-center">
                        <span className="text-2xl">$16.99</span>
                        <span className="text-gray-500 line-through">$19.99</span>
                    </div>
                    <span className="text-gray-500 font-medium">123 item left</span>
                </div>
                <div className="my-7 space-y-1">
                    <h6 className="text-lg font-semibold">Size</h6>
                    <div className="flex flex-wrap gap-3">
                        {
                            sizeOptions.map((size, index) => (
                                <div>
                                    <input type="radio"
                                           id={`sizes-${size.value}`}
                                           name="sizes"
                                           className="hidden peer"/>
                                    <label htmlFor="sizes" className="checkbox-button-label">
                                        {size.label}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <p className="text-lg font-semibold">Description</p>
                <p className="text-gray-600">This is the product description.</p>
                <div className="my-7 flex gap-x-5">
                    <Button className="custom-outline-btn w-full">
                        Add to Cart
                    </Button>
                    <Button className="w-full">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    )
}