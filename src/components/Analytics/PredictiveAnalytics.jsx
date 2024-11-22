import { Box, Typography, Grid, Card, CardContent } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function PredictiveAnalytics() {
    const predictiveData = {
        labels: ['Next Week', 'Next Month', 'Next Quarter'],
        datasets: [
            {
                label: 'Predicted Borrowings',
                data: [420, 1800, 5400],
                backgroundColor: 'rgba(25, 118, 210, 0.6)',
                borderColor: 'rgba(25, 118, 210, 1)',
                borderWidth: 1
            },
            {
                label: 'Predicted Digital Access',
                data: [650, 2400, 7200],
                backgroundColor: 'rgba(46, 125, 50, 0.6)',
                borderColor: 'rgba(46, 125, 50, 1)',
                borderWidth: 1
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
                text: 'Usage Predictions'
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
                AI Predictions
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ height: 400 }}>
                        <Bar data={predictiveData} options={options} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Key Insights
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • Expected 15% growth in borrowings
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • Digital access trending upward
                            </Typography>
                            <Typography variant="body2" paragraph>
                                • Peak usage predicted next quarter
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
