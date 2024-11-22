// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Dashboard() {
//     const user = JSON.parse(localStorage.getItem('user'));

//     return (
//         <div>
//             <Navbar />
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//             >
//                 <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {user?.role === 'admin' && (
//                         <Link to="/maintenance">
//                             <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
//                                 <h3 className="text-xl font-semibold mb-2">Maintenance</h3>
//                                 <p className="text-gray-600">Manage system settings and configurations</p>
//                             </div>
//                         </Link>
//                     )}
//                     <Link to="/reports">
//                         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
//                             <h3 className="text-xl font-semibold mb-2">Reports</h3>
//                             <p className="text-gray-600">View and generate reports</p>
//                         </div>
//                     </Link>
//                     <Link to="/transactions">
//                         <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
//                             <h3 className="text-xl font-semibold mb-2">Transactions</h3>
//                             <p className="text-gray-600">Manage book transactions</p>
//                         </div>
//                     </Link>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }




// import { useState } from 'react'
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import { Grid, Paper, Typography } from '@mui/material'
// import { useAnalytics } from '../hooks/useLibraryData'
// import DashboardChart from '../components/DashboardChart'
// import MetricsCard from '../components/MetricsCard'
// import RecentActivity from '../components/RecentActivity'

// export default function Dashboard() {
//     const { data: analyticsData, isLoading } = useAnalytics()

//     const chartData = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//         datasets: [
//             {
//                 label: 'Physical Books',
//                 data: [30, 45, 57, 48, 63, 75],
//                 borderColor: '#1976d2',
//                 backgroundColor: 'rgba(25, 118, 210, 0.1)',
//                 fill: true
//             },
//             {
//                 label: 'Digital Content',
//                 data: [25, 35, 45, 55, 65, 85],
//                 borderColor: '#2e7d32',
//                 backgroundColor: 'rgba(46, 125, 50, 0.1)',
//                 fill: true
//             }
//         ]
//     }

//     const metrics = [
//         { title: 'Total Members', value: '2,453', trend: '+12%', type: 'users' },
//         { title: 'Books Borrowed', value: '1,234', trend: '+23%', type: 'books' },
//         { title: 'Digital Access', value: '3,678', trend: '+45%', type: 'digital' },
//         { title: 'Active Sessions', value: '892', trend: '+8%', type: 'time' }
//     ]

//     if (isLoading) return <div>Loading...</div>

//     return (
//         <div>
//             <Navbar />
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
//             >
//                 <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12} md={8}>
//                         <Paper sx={{ p: 2 }}>
//                             <DashboardChart data={chartData} />
//                         </Paper>
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                         <MetricsCard metrics={metrics} />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <RecentActivity />
//                     </Grid>
//                 </Grid>
//             </motion.div>
//         </div>
//     )
// }

// 3rd

import { useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { useAnalytics } from '../hooks/useLibraryData'
import DashboardChart from '../components/DashboardChart'
import MetricsCard from '../components/MetricsCard'
import RecentActivity from '../components/RecentActivity'
import Navbar from '../components/Navbar';
export default function Dashboard() {
    const { data: analyticsData, isLoading } = useAnalytics()

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Physical Books',
                data: [30, 45, 57, 48, 63, 75],
                borderColor: '#1976d2',
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                fill: true
            },
            {
                label: 'Digital Content',
                data: [25, 35, 45, 55, 65, 85],
                borderColor: '#2e7d32',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                fill: true
            }
        ]
    }

    const metrics = [
        { title: 'Total Members', value: '2,453', trend: '+12%', type: 'users' },
        { title: 'Books Borrowed', value: '1,234', trend: '+23%', type: 'books' },
        { title: 'Digital Access', value: '3,678', trend: '+45%', type: 'digital' },
        { title: 'Active Sessions', value: '892', trend: '+8%', type: 'time' }
    ]

    return (
        <>
            {/* <Navbar /> */}
            <Grid container spacing={3} className=''>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <DashboardChart data={chartData} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <MetricsCard metrics={metrics} />
                </Grid>
                <Grid item xs={12}>
                    <RecentActivity />
                </Grid>
            </Grid>
        </>
    )
}
