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
//
// export const getUniqueUser = async (userId) => {
//     const user = await db.adminUser.findUnique({
//         where: {
//             id: userId
//         }
//     })
//     return user;
// }
//
// export const updateUser = async (formData) => {
//     const data = {
//         userName: formData.get("userName"),
//         userType: formData.get("userType"),
//         password: formData.get("password"),
//         confirmPassword: formData.get("confirmPassword")
//     };
//     if (data.password) {
//         const salt = bcrypt.genSaltSync(5);
//         const hashedPassword = await bcrypt.hash(formData.get("password"), salt);
//     }
//
//     await db.adminUser.update({
//         where: {
//             id: parseInt(formData.get("id"))
//         },
//         data: {
//             userType: data.userType,
//             userName: data.userName,
//             // ...(data.password && {hashedPassword})
//             ...(data.password && {password: hashedPassword})
//         }
//     });
//
//     revalidatePath("/users", "page");
//     redirect("/users");
//
// }
//
// export async function deleteUser(userId) {
//     await db.adminUser.delete({
//         where:{
//             id: userId
//         }
//     });
//     revalidatePath("/users","page");
// }