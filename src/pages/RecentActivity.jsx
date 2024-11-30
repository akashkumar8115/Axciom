import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const RecentActivity = () => {
    const activities = [
        'User John Doe borrowed "Advanced Algorithms"',
        'New AI module deployed',
        'Membership increased by 5%',
        'Digital content library updated',
    ];

    return (
        <Paper className="p-4 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <List>
                {activities.map((activity, index) => (
                    <ListItem key={index} divider>
                        <ListItemText primary={activity} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default RecentActivity;

