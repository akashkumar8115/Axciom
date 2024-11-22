import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Transactions() {
    const [transactions] = useState([
        { id: 1, memberName: 'John Doe', bookTitle: 'React Basics', date: '2024-01-15', type: 'Borrow' },
        { id: 2, memberName: 'Jane Smith', bookTitle: 'JavaScript Pro', date: '2024-01-16', type: 'Return' },
    ]);

    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                <h1 className="text-3xl font-bold mb-8">Transactions</h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Member Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Book Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{transaction.memberName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{transaction.bookTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-xs ${transaction.type === 'Borrow' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                            }`}>
                                            {transaction.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    )
}