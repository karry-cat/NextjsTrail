import LoginScreen from "@/screens/login";
import {createJWT, verifyJWT} from "@/lib/util";

const LoginPage = async ({searchParams}) => {
    // const token = await createJWT({
    //     userId: 1,
    //     userType: "SuperAdmin"
    // });
    // console.log("jwt_token", token);
    //
    // const verify = await verifyJWT(token);
    // console.log("jwt_verify",verify);

    return (
        <>
            <LoginScreen searchParams={await searchParams}/>
        </>
    )
}
export default LoginPage;