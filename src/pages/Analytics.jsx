import { Box } from '@mui/material'
import AnalyticsDashboard from '../components/Analytics/AnalyticsDashboard'
import { useAnalytics } from '../hooks/useLibraryData'

export default function Analytics() {
    const { data, isLoading } = useAnalytics()

    if (isLoading) {
        return <Box>Loading analytics...</Box>
    }

    return (
        <Box>
            <AnalyticsDashboard data={data} />
        </Box>
    )
}
