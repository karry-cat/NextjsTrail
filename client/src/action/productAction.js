'use server'

const BASE_URL = process.env.BASE_URL;

export async function getProducts() {

    const res = await fetch(`${BASE_URL}/api/products`);
    const data = await res.json();
    // console.log(data);
    return data;
}

export async function getProductTypes() {
    const res = await fetch(`${BASE_URL}/api/products/product-type`);
    const data = await res.json();
    // console.log(data);
    return data;
}