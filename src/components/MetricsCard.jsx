import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material'
import {
    TrendingUp,
    TrendingDown,
    PeopleAlt,
    MenuBook,
    Computer,
    Schedule
} from '@mui/icons-material'

export default function MetricsCard({ metrics }) {
    const getIcon = (type) => {
        const icons = {
            users: <PeopleAlt />,
            books: <MenuBook />,
            digital: <Computer />,
            time: <Schedule />
        }
        return icons[type] || <TrendingUp />
    }

    const getProgressValue = (trend) => {
        // Convert trend percentage to progress value
        return parseInt(trend.replace('%', '')) || 0
    }

    return (
        <Card>
            <CardContent>
                {metrics?.map((metric) => (
                    <Box key={metric.title} sx={{ mb: 2 }}>
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box display="flex" alignItems="center">
                                <Box sx={{ mr: 1, color: 'primary.main' }}>
                                    {getIcon(metric.type)}
                                </Box>
                                <Typography variant="subtitle1">
                                    {metric.title}
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="h6" sx={{ mr: 1 }}>
                                    {metric.value}
                                </Typography>
                                {metric.trend.startsWith('+') ? (
                                    <TrendingUp color="success" />
                                ) : (
                                    <TrendingDown color="error" />
                                )}
                            </Box>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={getProgressValue(metric.trend)}
                            sx={{ mt: 1 }}
                        />
                    </Box>
                ))}
            </CardContent>
        </Card>
    )
}