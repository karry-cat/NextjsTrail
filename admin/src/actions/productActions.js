"use server";

import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import path from "path";
import fs from "fs"
import {writeFile} from "fs/promises"

const UPLOAD_DIR = path.resolve("public/uploads");

export const createProduct = async (formData) => {

    const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        sellPrice: formData.get("sellPrice"),
        mrp: formData.get("mrp"),
        smallSize: formData.get("smallSize"),
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


    const totalStock = parseInt(data.smallSize)+parseInt(data.mediumSize)+parseInt(data.largeSize);

    await db.product.create({
        data:{
            name : data.name,
            description : data.description,
            sellPrice : parseFloat(data.sellPrice),
            mrp : parseFloat(data.mrp),
            image : imagePath,
            currentStock : totalStock,
            productTypeId : parseInt(data.productTypeId),
            isActive : data.isActive==="on" ? true : false,
            smallSize : parseInt(data.smallSize),
            mediumSize : parseInt(data.mediumSize),
            largeSize : parseInt(data.largeSize),
            // productType: {
            //     connect: {
            //         id: parseInt(data.productTypeId)
            //     }
            // }
        }
    })

    revalidatePath("/products", "page");
    redirect("/products");
}

export const getProducts = async () => {
    const products = await db.product.findMany({
        include: {
            productType: true
        }
    });
    return products;
}

export const getUniqueProduct = async (productId) => {
    const product = await db.product.findUnique({
        where: {
            id: parseInt(productId)
        },
        include: {
            productType: true
        }
    })
    return product;
}

export const updateProduct = async (formData, existingImage) => {
    const data = {
        id: formData.get("id"),
        name: formData.get("name"),
        description: formData.get("description"),
        sellPrice: formData.get("sellPrice"),
        mrp: formData.get("mrp"),
        smallSize: formData.get("smallSize"),
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
    let imagePath = existingImage;
    if(file && file.size > 0){
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        if(!fs.existsSync(UPLOAD_DIR)){
            fs.mkdirSync(UPLOAD_DIR);
        }
        const filename = Date.now() + path.extname(file.name)
        imagePath = `uploads/${filename}`

        const fullPath = path.join(process.cwd(), "public", imagePath);
        await writeFile(fullPath, buffer);
        await handleDeleteImage(existingImage)
    }

    const totalStock = parseInt(data.smallSize)+parseInt(data.mediumSize)+parseInt(data.largeSize);

    await db.product.update({
        where: {
            id: parseInt(data.id)
        },
        data:{
            name : data.name,
            description : data.description,
            sellPrice : parseFloat(data.sellPrice),
            mrp : parseFloat(data.mrp),
            image : imagePath,
            currentStock : totalStock,
            productTypeId : parseInt(data.productTypeId),
            isActive : data.isActive==="on" ? true : false,
            smallSize : parseInt(data.smallSize),
            mediumSize : parseInt(data.mediumSize),
            largeSize : parseInt(data.largeSize),
            // productType: {
            //     connect: {
            //         id: parseInt(data.productTypeId)
            //     }
            // }
        }
    })

    revalidatePath("/products", "page");
    redirect("/products");

}

export async function handleDeleteImage(imagePath){
    if(imagePath){
        const existingImageFullPath = path.join(process.cwd(),"public",imagePath) ;
        if(fs.existsSync(existingImageFullPath))
            fs.unlinkSync(existingImageFullPath);
    }
}

//
// export async function deleteProductType(productTypeId) {
//     await db.productType.delete({
//         where:{
//             id: productTypeId
//         }
//     });
//     revalidatePath("/product-type","page");
// }