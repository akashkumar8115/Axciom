import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { TrendingUp, LocalLibrary, Timeline, Psychology } from '@mui/icons-material'

export default function AIInsights({ insights }) {
    const insightIcons = {
        trend: <TrendingUp color="primary" />,
        reading: <LocalLibrary color="secondary" />,
        pattern: <Timeline color="success" />,
        suggestion: <Psychology color="info" />
    }

    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                AI-Powered Insights
            </Typography>
            <List>
                {insights?.map((insight, index) => (
                    <div key={insight.id}>
                        <ListItem>
                            <ListItemIcon>
                                {insightIcons[insight.type]}
                            </ListItemIcon>
                            <ListItemText
                                primary={insight.title}
                                secondary={insight.description}
                            />
                        </ListItem>
                        {index < insights.length - 1 && <Divider />}
                    </div>
                ))}
            </List>
        </Paper>
    )
}
