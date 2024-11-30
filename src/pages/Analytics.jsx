import { Box } from '@mui/material'
import AnalyticsDashboard from '../components/Analytics/AnalyticsDashboard'
import { useAnalytics } from '../hooks/useLibraryData'

// 
import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Line, Text3D } from '@react-three/drei'
import { Chart } from 'react-chartjs-2'
import { Card, Grid, Typography } from '@mui/material'

const Analytics = () => {
    const { data, isLoading } = useAnalytics()

    if (isLoading) {
        return <Box>Loading analytics...</Box>
    }
    const Scene = () => (
        <>
            <Float speed={1.5}>
                <Text3D font="/fonts/inter-bold.json" size={1.5}>
                    Analytics Dashboard
                    <meshNormalMaterial />
                </Text3D>
            </Float>
            <Line
                points={[[-2, -2, 0], [2, 2, 0]]}
                color="violet"
                lineWidth={2}
            />
        </>
    )

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'User Growth',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgb(124, 58, 237)',
            tension: 0.4
        }]
    }

    return (
        <>
            <Box>
                <AnalyticsDashboard data={data} />
            </Box>
            <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 p-8">
                <div className="h-64 rounded-2xl overflow-hidden mb-8">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <Scene />
                        <ambientLight intensity={0.5} />
                    </Canvas>
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card className="p-6 backdrop-blur-lg bg-white/90">
                                <Typography variant="h6" className="mb-4">
                                    Performance Overview
                                </Typography>
                                <Chart type="line" data={chartData} />
                            </Card>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <StatCard title="Total Users" value="1,234" />
                            <StatCard title="Active Sessions" value="456" />
                            <StatCard title="Conversion Rate" value="23%" />
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
        </>

    )
}

const StatCard = ({ title, value }) => (
    <Card className="p-6 backdrop-blur-lg bg-white/90">
        <Typography variant="subtitle2" color="textSecondary">
            {title}
        </Typography>
        <Typography variant="h4" className="mt-2">
            {value}
        </Typography>
    </Card>
)

export default Analytics
