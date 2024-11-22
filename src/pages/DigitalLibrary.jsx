import { useState } from 'react'
import { Grid, Card, TextField } from '@mui/material'
import { useDigitalContent } from '../hooks/useLibraryData'
import DigitalContentViewer from '../components/DigitalContentViewer'
import ContentFilters from '../components/ContentFilters'

export default function DigitalLibrary() {
    const [filters, setFilters] = useState({})
    const { data: content, isLoading } = useDigitalContent()

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ContentFilters onFilterChange={setFilters} />
            </Grid>
            <Grid item xs={12}>
                <DigitalContentViewer content={content} filters={filters} />
            </Grid>
        </Grid>
    )
}
