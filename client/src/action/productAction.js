'use server'

import {objectToQueryString} from "@/lib/util";
import {revalidatePath} from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProducts(searchParams) {
    const filteredParams= {...await searchParams}
    delete filteredParams.openAccordion
    const res = await fetch(`${BASE_URL}/api/products?${objectToQueryString(filteredParams)}`);
    const data = await res.json();
    // console.log(data);
    // todo Error: Route / used "revalidatePath /" during render which is unsupported.
    // revalidatePath("/", "page")
    return data;
}

export async function getProductTypes() {
    const res = await fetch(`${BASE_URL}/api/products/product-type`);
    const data = await res.json();
    // console.log(data);
    return data;
}

export async function getProductById(productId) {
    const res = await fetch(`${BASE_URL}/api/products/${productId}`);
    const data = await res.json();
    return data;
}