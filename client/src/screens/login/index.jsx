import Label from "@/components/ui/Label";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import Link from "next/link";
import {loginUser} from "@/action/authAction";

const LoginScreen = ({searchParams}) => {
    const {errorMessage} = searchParams;
    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-200 bg-white">
                <h1 className="text-4xl font-medium text-center mb-7">Login</h1>
                {
                    errorMessage && (
                        <div className="border border-red-500 rounded-xl p-3 bg-red-50 w-full text-center my-3">
                            <span className="text-red-500 text-lg font-500">
                                {errorMessage}
                            </span>
                        </div>
                    )
                }
                <form className="grid gap-6" action={loginUser}>
                    <div className="grid gap-2">
                        <Label required>Email</Label>
                        <Input type="email"
                               placeholder="Enter your Email"
                               name="email"
                               required/>
                    </div>
                    <div className="grid gap-2">
                        <Label required>Password</Label>
                        <Input type="password"
                               minLength={8}
                               placeholder="Enter Your Password"
                               name="password"
                               required/>
                    </div>
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                    <div className="text-center">
                        <span className="text-base font-medium">
                        Don't have an account?
                        <Link href="/sign-up"
                              className="text-blue-600 font-semibold mx-1 hover:underline">
                            SignUp
                        </Link>
                    </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginScreen;