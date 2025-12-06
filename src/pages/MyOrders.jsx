import axios from 'axios';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable'
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const [loading, setLoading] = useState(true);
    const { user } = use(AuthContext)


    useEffect(() => {
        setLoading(true)
        axios(`https://paw-mart-server-pi.vercel.app/orders?email=${user.email}`)
            .then(res => {
                setMyOrders(res.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error);
            })
    }, []);

    // console.log(myOrders);

    // pdf download

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("My Orders Report", 14, 15);

        const tableColumn = [
            "Product",
            "Buyer",
            "Price",
            "Qty",
            "Address",
            "Date",
            "Phone",
        ];

        const tableRows = [];

        myOrders.forEach((order) => {
            const formattedDate = new Date(order.date).toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            const row = [
                order.productName,
                order.buyerName,
                order.price,
                order.quantity,
                order.address,
                formattedDate,
                order.phone,
            ];

            tableRows.push(row);
        });

        // AutoTable
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 25,
        });

        doc.save("MyOrdersReport.pdf");
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 text-center">
                    My <span className="text-orange-600">Orders</span>
                </h2>
                {/* Download Button */}
                <button
                    onClick={downloadPDF}
                    className="bg-orange-600 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-700 mb-4"
                >
                    Download Order
                </button>


                <div className="overflow-x-auto shadow-lg rounded-xl">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-orange-600 text-white">
                            <tr>
                                <th className="p-4">Product Name</th>
                                <th className="p-4">Buyer Name</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Address</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Phone</th>
                            </tr>
                        </thead>

                        <tbody>
                            {myOrders.map((order) => (
                                <tr
                                    key={order._id}
                                    className="border-b hover:bg-orange-100 hover:text-black transition"
                                >
                                    <td className="p-4 font-semibold">{order.productName}</td>
                                    <td className="p-4">{order.buyerName}</td>
                                    <td className="p-4">{order.price}</td>
                                    <td className="p-4">{order.quantity}</td>
                                    <td className="p-4">{order.address}</td>
                                    <td className="p-4">
                                        {new Date(order.date).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            hour12: true,
                                        })}
                                    </td>
                                    <td className="p-4">{order.phone}</td>
                                </tr>
                            ))}

                            {myOrders?.length === 0 && (
                                <tr>
                                    <td colSpan="7" className="p-6 text-center text-gray-500">
                                        No orders found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default MyOrders;