"use client"


import Label from "@/components/ui/Label";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import {loginUser} from "@/actions/AuthActions";

const LoginScreen = ({searchParams}) => {
    const {errorMessage} = searchParams;
    return (
        <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex justify-center items-center">
            <div className="w-full max-w-xl rounded-xl shadow-lg p-10 border border-gray-200 bg-white">
                <h1 className="text-4xl font-medium text-center mb-7">Admin Login</h1>
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
                        <Label required>UserName</Label>
                        <Input type="text"
                               placeholder="Enter UserName"
                               name="userName"
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
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;