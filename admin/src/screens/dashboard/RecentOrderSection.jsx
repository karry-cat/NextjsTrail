import {formatDate} from "@/lib/util";

export default function RecentOrderSection({orders}) {
    return (
        <>
            <div className="grid dashboard-card">
                <h1 className="text-2xl font-bold">Recent Orders</h1>
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                    <tr>
                        <th> Sr.No.</th>
                        <th>Buyer's Name</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment Mode</th>
                        <th>Products</th>
                    </tr>
                    </thead>

                    <tbody className="text-gray-700 font-medium text-lg text-center">
                    {
                        orders.length > 0 ?
                            orders.map((order, index) => (
                                <tr key={order.id}>
                                    <td>{index + 1}</td>
                                    <td>{order.buyer.customerName}</td>
                                    <td>{formatDate(order.SODateTime)}</td>
                                    <td>{order.grandTotalPrice}</td>
                                    <td>{order.paymentMode}</td>
                                </tr>
                            )) : (<tr>
                                <td colSpan={6} className="!text-center">
                                    No Orders Found.
                                </td>
                            </tr>)

                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}