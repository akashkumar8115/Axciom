import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';

export default function LibraryMetrics() {
    const [metrics, setMetrics] = useState({
        booksByGenre: {
            labels: ['Fiction', 'Non-Fiction', 'Science', 'History', 'Art'],
            data: [300, 250, 200, 150, 100]
        },
        membershipTrends: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [150, 180, 210, 240, 270, 300]
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
        >
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Books by Genre</h3>
                <Doughnut
                    data={{
                        labels: metrics.booksByGenre.labels,
                        datasets: [{
                            data: metrics.booksByGenre.data,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                '#4BC0C0',
                                '#9966FF'
                            ]
                        }]
                    }}
                />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Membership Growth</h3>
                <Bar
                    data={{
                        labels: metrics.membershipTrends.labels,
                        datasets: [{
                            label: 'Members',
                            data: metrics.membershipTrends.data,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)'
                        }]
                    }}
                />
            </div>
        </motion.div>
    );
}
