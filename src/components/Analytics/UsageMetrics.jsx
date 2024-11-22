import { Box, Typography, Grid } from '@mui/material'
import {
    PeopleAlt,
    MenuBook,
    TrendingUp,
    AccessTime
} from '@mui/icons-material'
import MetricCard from './MetricCard'

export default function UsageMetrics() {
    const metrics = [
        {
            title: 'Active Users',
            value: '2,453',
            change: '+12%',
            icon: <PeopleAlt />,
            color: '#1976d2'
        },
        {
            title: 'Books Borrowed',
            value: '1,234',
            change: '+23%',
            icon: <MenuBook />,
            color: '#2e7d32'
        },
        {
            title: 'Digital Access',
            value: '3,678',
            change: '+45%',
            icon: <TrendingUp />,
            color: '#9c27b0'
        },
        {
            title: 'Avg. Session',
            value: '24m',
            change: '+8%',
            icon: <AccessTime />,
            color: '#ed6c02'
        }
    ]

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Usage Metrics
            </Typography>
            <Grid container spacing={2}>
                {metrics.map((metric) => (
                    <Grid item xs={12} sm={6} key={metric.title}>
                        <MetricCard {...metric} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
