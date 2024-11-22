import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Radar, PolarArea } from 'react-chartjs-2';

export default function AdvancedAnalytics() {
    const [analyticsData, setAnalyticsData] = useState({
        readingPatterns: {
            labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
            data: [45, 60, 75, 20]
        },
        genrePopularity: {
            labels: ['Fiction', 'Science', 'History', 'Arts', 'Technology'],
            data: [80, 65, 45, 30, 55]
        },
        userEngagement: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            data: [85, 88, 92, 87, 94, 96]
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
        >
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Reading Time Patterns</h3>
                <PolarArea
                    data={{
                        labels: analyticsData.readingPatterns.labels,
                        datasets: [{
                            data: analyticsData.readingPatterns.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)'
                            ]
                        }]
                    }}
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Genre Popularity</h3>
                <Radar
                    data={{
                        labels: analyticsData.genrePopularity.labels,
                        datasets: [{
                            label: 'Popularity Score',
                            data: analyticsData.genrePopularity.data,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1
                        }]
                    }}
                />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">User Engagement Trends</h3>
                <Line
                    data={{
                        labels: analyticsData.userEngagement.labels,
                        datasets: [{
                            label: 'Engagement Score',
                            data: analyticsData.userEngagement.data,
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    }}
                />
            </div>
        </motion.div>
    );
}
