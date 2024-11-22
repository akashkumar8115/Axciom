import { useState } from 'react'
import {
    Paper,
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Stack
} from '@mui/material'

export default function ContentFilters({ onFilterChange }) {
    const [filters, setFilters] = useState({
        search: '',
        type: 'all',
        categories: []
    })

    const contentTypes = ['All', 'E-Books', 'Videos', 'PDFs', 'Audio']
    const categories = ['Fiction', 'Non-Fiction', 'Academic', 'Technical', 'Arts']

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    return (
        <Paper sx={{ p: 2, mb: 3 }}>
            <Stack spacing={2}>
                <TextField
                    fullWidth
                    label="Search Digital Content"
                    variant="outlined"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                />

                <Box display="flex" gap={2}>
                    <FormControl fullWidth>
                        <InputLabel>Content Type</InputLabel>
                        <Select
                            value={filters.type}
                            label="Content Type"
                            onChange={(e) => handleFilterChange('type', e.target.value)}
                        >
                            {contentTypes.map(type => (
                                <MenuItem key={type} value={type.toLowerCase()}>
                                    {type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Categories</InputLabel>
                        <Select
                            multiple
                            value={filters.categories}
                            label="Categories"
                            onChange={(e) => handleFilterChange('categories', e.target.value)}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {categories.map(category => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
        </Paper>
    )
}
