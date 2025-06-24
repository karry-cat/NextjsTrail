'use client'

import {loadStripe} from "@stripe/stripe-js";
import {EmbeddedCheckout, EmbeddedCheckoutProvider} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import {createCheckoutSession} from "@/action/stripeAction";

export default function CheckoutScreen({product}) {
    const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const [options, setOptions] = useState();
    const fetchClientSecret = async () => {
        const session = await createCheckoutSession();
        setOptions({clientSecret: session.clientSecret});
    }
    useEffect(() => {
        fetchClientSecret();
    }, []);
    // });

    return (
        <div>
            {
                options?.clientSecret && (
                    <EmbeddedCheckoutProvider stripe={StripePromise} options={options}>
                        <div className="my-10">
                            <EmbeddedCheckout/>
                        </div>
                    </EmbeddedCheckoutProvider>
                )
            }
        </div>
    )
}