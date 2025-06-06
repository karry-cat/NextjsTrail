"use client"

import Link from "next/link";
import {DeleteIcon, EditIcon} from "@/components/icons";
import {Button} from "@/components/ui/Button";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import {useState} from "react";
import {deleteProductType} from "@/actions/productTypeActions";

const ProductTypeScreen = ({productTypes}) => {
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
                <h1 className="font-semibold text-2xl p-2">Product Type Management</h1>
                <button>
                    <Link href="/product-type/add" className="custom-primary-btn">
                        Add Product Type
                    </Link>
                </button>
            </div>
            <hr className="my-5 "/>

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                    <tr>
                        <th>Sr. No.</th>
                        <th>Product Type</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody className="text-gray-700 font-medium text-lg text-center">
                    {
                        productTypes.map((productType, index) => (
                            <tr key={productType.id}>
                                <td>{index + 1}</td>
                                <td>{productType.name}</td>
                                <td className="flex items-center gap-x-3">
                                    <Link href={`/product-type/edit/${productType.id}`} className="w-fit">
                                        <EditIcon></EditIcon>
                                    </Link>
                                    <Button className="bg-transparent p-0 px-2 border-none text-red-500"
                                            onClick={() => {
                                                setIsDeleteModal0pen(true);
                                                setSelectedId(productType.id);
                                            }}>
                                        <DeleteIcon></DeleteIcon>
                                    </Button>
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

export default ProductTypeScreen;