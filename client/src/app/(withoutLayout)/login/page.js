import LoginScreen from "@/screens/login";

export default async function LoginPage({searchParams}) {
    return (
        <>
            <LoginScreen searchParams={await searchParams} />
        </>
    );
}
