import React from 'react'
import { useQuery } from 'react-query'
import { getAIInsights } from '../api/api'
import { Card, CardContent, Typography, Button } from '@mui/material'

const AIInsights = () => {
    const { data: insights, isLoading } = useQuery('ai-insights', getAIInsights)

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">AI Insights</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insights?.map((insight) => (
                    <Card key={insight.id}>
                        <CardContent>
                            <Typography variant="h6">{insight.title}</Typography>
                            <Typography variant="body2">{insight.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default AIInsights
