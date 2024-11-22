import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, Line } from 'react-chartjs-2';

export default function FinancialReports() {
    const [reportData, setReportData] = useState({
        revenue: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Revenue',
                data: [4500, 5200, 4800, 5800, 6200, 5900],
                backgroundColor: 'rgba(54, 162, 235, 0.5)'
            }]
        },
        fines: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Fine Collections',
                data: [800, 950, 720, 880, 990, 850],
                borderColor: 'rgb(255, 99, 132)',
                fill: false
            }]
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
        >
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Revenue Overview</h3>
                <Bar data={reportData.revenue} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Fine Collections</h3>
                <Line data={reportData.fines} />
            </div>
        </motion.div>
    );
}
