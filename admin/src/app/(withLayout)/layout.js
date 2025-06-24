import Sidebar from "@/components/Sidebar";
import {getUserData} from "@/actions/AuthActions";

export default async function WithLayout({children}) {
    const userData = await getUserData()
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar userData={userData}/>
                </div>
                <div className="col-span-10 p-6 mr-8 border-1 border-gray-300 rounded-xl shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}