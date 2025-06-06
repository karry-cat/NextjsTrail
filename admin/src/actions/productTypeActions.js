"use server";

import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const createProductType = async (formData) => {
    const data = {
        name: formData.get("name"),
    }

    const existingUser = await db.productType.findUnique({
        where: {
            name: data.name
        }
    });
    if (existingUser) {
        return redirect(`/product-type/add?errorMessage=Product Type already exists.`);
    }



    await db.productType.create({
        data: {
            name: data.name,
        }
    })

    revalidatePath("/product-type", "page");
    redirect("/product-type");
}

export const getProductTypes = async () => {
    const productTypes = await db.productType.findMany();
    return productTypes;
}

export const getUniqueProductType = async (productTypeId) => {
    const productType = await db.productType.findUnique({
        where: {
            id: productTypeId
        }
    })
    return productType;
}

export const updateProductType = async (formData) => {
    const data = {
        name: formData.get("name"),
    };

    await db.productType.update({
        where: {
            id: parseInt(formData.get("id"))
        },
        data: {
            name: data.name,
        }
    });

    revalidatePath("/product-type", "page");
    redirect("/product-type");

}

export async function deleteProductType(productTypeId) {
    await db.productType.delete({
        where:{
            id: productTypeId
        }
    });
    revalidatePath("/product-type","page");
}