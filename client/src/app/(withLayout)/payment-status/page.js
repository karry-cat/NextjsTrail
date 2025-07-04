import {getCheckoutSession, updateCheckoutData} from "@/action/stripeAction";
import PaymentStatusScreen from "@/screens/payment-status";

export default async function PaymentStatusPage({searchParams}) {
    const {session_id} = await searchParams
    const session = await getCheckoutSession(session_id)
    console.log(session)
    const updatedResObj = {
        address: session?.customer_details?.address?.line1,
        city: session?.customer_details?.address?.city,
        customerId: session?.metadata?.customerId,
        customerEmail: session?.customer_email,
        SODateTime: session?.created,
        grandTotalPrice: session?.amount_total/100,
        paymentMode: session?.payment_method_types [0],
        products: JSON.parse(session?.metadata?.products),
    };

    const response = await updateCheckoutData(updatedResObj);
    return (
        <>
            <PaymentStatusScreen status={response?.message}/>
        </>
    );
}
