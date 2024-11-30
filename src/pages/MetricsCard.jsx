import React from 'react';
import { Card, Typography, Grid } from '@mui/material';

const MetricsCard = ({ metrics }) => {
    return (
        <Grid container spacing={2}>
            {metrics.map((metric, index) => (
                <Grid item xs={12} sm={6} key={index}>
                    <Card className="p-4 bg-gradient-to-br from-white to-indigo-50 shadow-md">
                        <Typography variant="h6">{metric.title}</Typography>
                        <Typography variant="h4" color="primary">
                            {metric.value}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {metric.trend}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MetricsCard;
