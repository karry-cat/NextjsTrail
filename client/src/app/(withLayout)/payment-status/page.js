import {getCheckoutSession} from "@/action/stripeAction";
import PaymentStatusScreen from "@/screens/payment-status";

export default async function PaymentStatusPage({searchParams}) {
    const {session_id} = await searchParams
    const session = await getCheckoutSession(session_id)
    return (
        <>
            <PaymentStatusScreen session={session}/>
        </>
    );
}
