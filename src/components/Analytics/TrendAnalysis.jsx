import { Box, Typography } from '@mui/material'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function TrendAnalysis() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Book Borrowings',
                data: [65, 59, 80, 81, 56, 90],
                borderColor: '#1976d2',
                tension: 0.4
            },
            {
                label: 'Digital Access',
                data: [28, 48, 40, 59, 86, 97],
                borderColor: '#2e7d32',
                tension: 0.4
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Library Usage Trends'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Usage Trends
            </Typography>
            <Box sx={{ height: 300 }}>
                <Line data={data} options={options} />
            </Box>
        </Box>
    )
}
