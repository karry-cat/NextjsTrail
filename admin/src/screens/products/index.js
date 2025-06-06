"use client"

import Link from "next/link";
import {DeleteIcon, EditIcon} from "@/components/icons";
import {Button} from "@/components/ui/Button";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import {useState} from "react";
import {deleteProductType} from "@/actions/productTypeActions";
import Image from "next/image";

const ProductsScreen = ({productTypes}) => {
    const [isDeleteModalOpen, setIsDeleteModal0pen] = useState(false)
    const [selectedId, setSelectedId] = useState()

    const handleDelete = async () => {
        await deleteProductType(selectedId);
        setIsDeleteModal0pen(false)
        setSelectedId(null)
    }

    return (
        <div>
            <div className="flex justify-between">
                <h1 className="font-semibold text-2xl p-2">Products Management</h1>
                <button>
                    <Link href="/products/add" className="custom-primary-btn">
                        Add Product
                    </Link>
                </button>
            </div>
            <hr className="my-5 "/>

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                    <tr>
                        <th>Product</th>
                        <th>Product Type</th>
                        <th>MRP</th>
                        <th>Selling Price</th>
                        <th>Current Stock</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody className="text-gray-700 font-medium text-lg text-center">
                    {
                        productTypes.map((productType, index) => (
                            <tr key={productType.id}>
                                <td className="grid grid-cols-[auto_1fr] gap-3">
                                    <Image
                                        src="/next.svg"
                                        alt="Product Image"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-20 h-20"/>
                                    <div className="flex flex-col self-center">
                                        <span>Product Name</span>
                                        <span className="text-sm text-gray-500 truncate max-w-52">
                                            This is the Product Description with truncate.
                                        </span>
                                    </div>
                                </td>
                                <td>{productType.name}</td>
                                <td>{productType.name}</td>
                                <td>{productType.name}</td>
                                <td>{productType.name}</td>
                                <td className="text-green-500">{productType.name}</td>
                                <td>
                                    <div className="flex self-center gap-x-3">
                                        <Link href={`/products/edit/${productType.id}`} className="w-fit">
                                            <EditIcon></EditIcon>
                                        </Link>
                                        <Button className="bg-transparent p-0 px-2 border-none text-red-500"
                                                onClick={() => {
                                                    setIsDeleteModal0pen(true);
                                                    setSelectedId(productType.id);
                                                }}>
                                            <DeleteIcon></DeleteIcon>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))

                    }
                    </tbody>
                </table>
                {isDeleteModalOpen &&
                    <DeleteConfirmationModal
                        setIsOpen={setIsDeleteModal0pen}
                        onCancel={() => setIsDeleteModal0pen(false)}
                        handleComfirm={handleDelete}
                    />}
            </div>
        </div>
    )
}

export default ProductsScreen;