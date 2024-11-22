import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material'
import {
    MenuBook,
    Person,
    Computer,
    Assignment
} from '@mui/icons-material'
import { format } from 'date-fns'

export default function RecentActivity({ activities }) {
    const getActivityIcon = (type) => {
        const icons = {
            borrow: <MenuBook />,
            return: <Assignment />,
            login: <Person />,
            digital: <Computer />
        }
        return icons[type] || <MenuBook />
    }

    const getActivityColor = (type) => {
        const colors = {
            borrow: '#1976d2',
            return: '#2e7d32',
            login: '#ed6c02',
            digital: '#9c27b0'
        }
        return colors[type] || '#1976d2'
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Recent Activity
                </Typography>
                <List>
                    {activities?.map((activity) => (
                        <ListItem key={activity.id}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: getActivityColor(activity.type) }}>
                                    {getActivityIcon(activity.type)}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={activity.description}
                                secondary={format(new Date(activity.timestamp), 'MMM dd, yyyy HH:mm')}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}
