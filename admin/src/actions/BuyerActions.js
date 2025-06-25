"use server";

import {db} from "@/lib/db";

export async function getBuyers() {
    const buyers = await db.buyerMaster.findMany({
        where: {
            sales: {
                some: {}
            }
        }
    })
    return buyers;
}