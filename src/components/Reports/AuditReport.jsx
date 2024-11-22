import { useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { auditService } from '../../services/auditService';

export default function AuditReport() {
    const [reportData, setReportData] = useState({
        labels: [],
        datasets: [{
            label: 'Actions per Day',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    });

    const generateReport = async (startDate, endDate) => {
        try {
            const data = await auditService.generateAuditReport(startDate, endDate);
            // Process and set report data
            setReportData(data);
        } catch (error) {
            console.error('Failed to generate report:', error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Audit Report</h2>
            <div className="mb-6">
                <Line data={reportData} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold">Total Actions</h3>
                    <p className="text-2xl">1,234</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold">Unique Users</h3>
                    <p className="text-2xl">56</p>
                </div>
            </div>
        </motion.div>
    );
}
