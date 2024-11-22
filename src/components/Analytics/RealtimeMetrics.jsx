import { useEffect, useState } from 'react'
import { Box, Typography, Grid, Paper } from '@mui/material'
import {
    PersonAdd,
    MenuBook,
    Search,
    CloudDownload
} from '@mui/icons-material'

export default function RealtimeMetrics() {
    const [metrics, setMetrics] = useState({
        activeUsers: 0,
        currentBorrowings: 0,
        searches: 0,
        downloads: 0
    })

    useEffect(() => {
        // Simulated real-time updates
        const interval = setInterval(() => {
            setMetrics(prev => ({
                activeUsers: prev.activeUsers + Math.floor(Math.random() * 5),
                currentBorrowings: prev.currentBorrowings + Math.floor(Math.random() * 3),
                searches: prev.searches + Math.floor(Math.random() * 10),
                downloads: prev.downloads + Math.floor(Math.random() * 4)
            }))
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    const metricCards = [
        { icon: <PersonAdd />, label: 'Active Users', value: metrics.activeUsers },
        { icon: <MenuBook />, label: 'Current Borrowings', value: metrics.currentBorrowings },
        { icon: <Search />, label: 'Searches', value: metrics.searches },
        { icon: <CloudDownload />, label: 'Downloads', value: metrics.downloads }
    ]

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Real-time Activity
            </Typography>
            <Grid container spacing={2}>
                {metricCards.map((metric) => (
                    <Grid item xs={12} sm={6} md={3} key={metric.label}>
                        <Paper sx={{ p: 2 }}>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ mr: 2, color: 'primary.main' }}>
                                    {metric.icon}
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {metric.label}
                                    </Typography>
                                    <Typography variant="h6">
                                        {metric.value}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
