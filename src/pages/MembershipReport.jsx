import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function MembershipReport() {
    const [reportData, setReportData] = useState({
        labels: ['6 Months', '1 Year', '2 Years'],
        datasets: [{
            label: 'Membership Distribution',
            data: [30, 45, 25],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
            ],
        }],
    });

    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                <h1 className="text-3xl font-bold mb-8">Membership Reports</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Membership Distribution</h2>
                        <Bar data={reportData} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Total Members:</span>
                                <span className="font-semibold">100</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Active Members:</span>
                                <span className="font-semibold text-green-600">85</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Expired Members:</span>
                                <span className="font-semibold text-red-600">15</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
