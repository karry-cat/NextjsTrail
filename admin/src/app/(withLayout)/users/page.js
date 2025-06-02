import Link from "next/link";

export default function Users() {
    return (<div>
        <div className="flex justify-between">
            <h1 className="font-semibold text-2xl p-2">User Management</h1>
            <button>
                <Link href="/users" className="custom-primary-btn">
                    Add User
                </Link>
            </button>
        </div>
        <hr className="my-5 "/>

        <div className="mt-20">
            <table className="cumtom-table">
                <thead className="border-y-2 border-gray-400">
                    <tr>
                        <td>Sr. No.</td>
                        <td>User Name</td>
                        <td>Action</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>);
}