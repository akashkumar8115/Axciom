import { Paper, Box, Typography } from '@mui/material'

export default function MetricCard({ title, value, change, icon, color }) {
    return (
        <Paper sx={{ p: 2 }}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="h4">
                        {value}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={change.startsWith('+') ? 'success.main' : 'error.main'}
                    >
                        {change}
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: `${color}15`,
                    p: 1,
                    borderRadius: 2,
                    color: color
                }}>
                    {icon}
                </Box>
            </Box>
        </Paper>
    )
}
