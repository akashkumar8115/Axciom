// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Line, Pie, Bar } from 'react-chartjs-2';

// export default function AnalyticsDashboard() {
//     const [metrics, setMetrics] = useState({
//         dailyVisits: [],
//         popularBooks: [],
//         membershipTrends: []
//     });

//     const chartConfigs = {
//         visits: {
//             labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//             datasets: [{
//                 label: 'Daily Visits',
//                 data: metrics.dailyVisits,
//                 borderColor: 'rgb(75, 192, 192)',
//                 tension: 0.1
//             }]
//         },
//         books: {
//             labels: metrics.popularBooks.map(book => book.title),
//             datasets: [{
//                 data: metrics.popularBooks.map(book => book.checkouts),
//                 backgroundColor: [
//                     '#FF6384',
//                     '#36A2EB',
//                     '#FFCE56',
//                     '#4BC0C0',
//                     '#9966FF'
//                 ]
//             }]
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
//         >
//             <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Daily Visits</h2>
//                 <Line data={chartConfigs.visits} />
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//                 <h2 className="text-xl font-bold mb-4">Popular Books</h2>
//                 <Pie data={chartConfigs.books} />
//             </div>
//         </motion.div>
//     );
// }


// 2nd attempt
import { Box, Grid, Paper } from '@mui/material'
import UsageMetrics from './UsageMetrics'
import TrendAnalysis from './TrendAnalysis'
import PredictiveAnalytics from './PredictiveAnalytics'
import RealtimeMetrics from './RealtimeMetrics'

export default function AnalyticsDashboard() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <UsageMetrics />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <TrendAnalysis />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                        <PredictiveAnalytics />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <RealtimeMetrics />
                </Grid>
            </Grid>
        </Box>
    )
}

