"use server";

import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import path from "path";
import fs from "fs"
import {writeFile} from "fs/promises"

const UPLOAD_DIR = path.resolve("public/uploads");

export const createProductType = async (formData) => {

    const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        sellPrice: formData.get("sellPrice"),
        mrp: formData.get("mrp"),
        smallsize: formData.get("smallSize"),
        mediumSize: formData.get("mediumSize"),
        largeSize: formData.get("largeSize"),
        productTypeId: formData.get("productType"),
        isActive: formData.get("isActive")
    }

    const productType = await db.productType.findUnique({
        where: {
            id: parseInt(data.productTypeId)
        }
    });
    if (!productType) {
        return redirect(`/products/add?errorMessage=Product Type not found. Please try with different product type.`);
    }

    const file = formData.get("image");
    let imagePath = "";
    if(file){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        if(!fs.existsSync(UPLOAD_DIR)){
            fs.mkdirSync(UPLOAD_DIR);
        }
        const filename = Date.now() + path.extname(file.name)
        imagePath = `uploads/${filename}`

        const fullPath = path.join(process.cwd(), "public", imagePath);
        await writeFile(fullPath, buffer);
    }



    // await db.productType.create({
    //     data: {
    //         name: data.name,
    //     }
    // })
    //
    // revalidatePath("/product-type", "page");
    // redirect("/product-type");
}

// export const getProductTypes = async () => {
//     const productTypes = await db.productType.findMany();
//     return productTypes;
// }
//
// export const getUniqueProductType = async (productTypeId) => {
//     const productType = await db.productType.findUnique({
//         where: {
//             id: productTypeId
//         }
//     })
//     return productType;
// }
//
// export const updateProductType = async (formData) => {
//     const data = {
//         name: formData.get("name"),
//     };
//
//     await db.productType.update({
//         where: {
//             id: parseInt(formData.get("id"))
//         },
//         data: {
//             name: data.name,
//         }
//     });
//
//     revalidatePath("/product-type", "page");
//     redirect("/product-type");
//
// }
//
// export async function deleteProductType(productTypeId) {
//     await db.productType.delete({
//         where:{
//             id: productTypeId
//         }
//     });
//     revalidatePath("/product-type","page");
// }