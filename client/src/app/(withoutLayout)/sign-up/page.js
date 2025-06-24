import SignUpScreen from "@/screens/sign-up";

export default async function SignUpPage({searchParams}) {
    return (
        <>
            <SignUpScreen searchParams={await searchParams} />
        </>
    );
}
