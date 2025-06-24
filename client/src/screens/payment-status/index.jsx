'use client'


import Link from "next/link";
import {SuccessIcon} from "@/components/icons";

export default function PaymentStatusScreen({session}) {

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="my-20 bg-white rounded-xl shadow-lg w-[768px] px-10 py-20">
                    <div className="flex flex-col justify-center gap-y-6">
                        <SuccessIcon className="h-24 w-24 text-green-500 self-center"/>
                        <p className="text-center text-2xl font-semibold">Payment Successful!</p>
                        <Link href="/" className="custom-btn w-fit self-center">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}