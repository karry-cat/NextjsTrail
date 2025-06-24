'use client'

import {loadStripe} from "@stripe/stripe-js";

export default function CheckoutScreen({product}) {
    const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    return (
        <div>
            checkout screen
        </div>
    )
}