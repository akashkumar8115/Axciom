import { useEffect, useState } from 'react'
import { Card, Grid, Typography, CircularProgress } from '@mui/material'
import { useRecommendations } from '../hooks/useLibraryData'
import RecommendationCard from './RecommendationCard'
import AIInsights from './AIInsights'

export default function AIRecommendations() {
    const { data: recommendations, isLoading } = useRecommendations()
    const [insights, setInsights] = useState([])

    useEffect(() => {
        if (recommendations) {
            processAIInsights(recommendations)
        }
    }, [recommendations])

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h5">AI-Powered Recommendations</Typography>
            </Grid>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            {recommendations?.map(rec => (
                                <Grid item xs={12} sm={6} key={rec.id}>
                                    <RecommendationCard recommendation={rec} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AIInsights insights={insights} />
                    </Grid>
                </>
            )}
        </Grid>
    )
}
