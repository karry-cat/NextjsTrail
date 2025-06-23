
export default function CartScreen({product}) {


    return (
        <div className="my-10">
            <h1 className="text-3xl font-semibold">
                Cart
            </h1>
            <div className="grid grid-cols-4 gap-5 my-5">
                <div className="col-span-3 space-y-5">
                    Cart Items
                </div>
                <div>
                    Cart Summary
                </div>
            </div>
        </div>
    )
}