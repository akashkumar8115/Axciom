import { Grid } from '@mui/material'
import AIRecommendations from '../components/AIRecommendations'
import RecommendationFilters from '../components/RecommendationFilters'
import { useRecommendations } from '../hooks/useLibraryData'

export default function AIRecommendationsPage() {
    const { data, isLoading } = useRecommendations()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <RecommendationFilters />
            </Grid>
            <Grid item xs={12}>
                <AIRecommendations
                    recommendations={data}
                    isLoading={isLoading}
                />
            </Grid>
        </Grid>
    )
}
