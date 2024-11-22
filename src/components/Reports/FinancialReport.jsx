import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../utils/formatters';

export default function FinancialReport() {
    const [financialData, setFinancialData] = useState({
        revenue: [],
        expenses: [],
        fines: []
    });

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Revenue',
                data: financialData.revenue,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Expenses',
                data: financialData.expenses,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Fines Collected',
                data: financialData.fines,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Financial Report</h2>
            <Bar data={chartData} />
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-green-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Total Revenue</h3>
                    <p className="text-2xl">{formatCurrency(50000)}</p>
                </div>
                <div className="p-4 bg-red-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Total Expenses</h3>
                    <p className="text-2xl">{formatCurrency(30000)}</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Net Profit</h3>
                    <p className="text-2xl">{formatCurrency(20000)}</p>
                </div>
            </div>
        </motion.div>
    );
}
