import Sidebar from "@/components/Sidebar";

export default function WithLayout({children}) {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <Sidebar/>
                </div>
                <div className="col-span-10 p-6 mr-8 border-1 border-gray-300 rounded-xl shadow-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}