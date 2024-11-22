import { Paper, Stack, TextField, Select, MenuItem } from '@mui/material'

export default function RecommendationFilters() {
    return (
        <Paper sx={{ p: 2 }}>
            <Stack direction="row" spacing={2}>
                <TextField
                    label="Search Recommendations"
                    variant="outlined"
                    size="small"
                />
                <Select
                    value="all"
                    size="small"
                    sx={{ minWidth: 200 }}
                >
                    <MenuItem value="all">All Categories</MenuItem>
                    <MenuItem value="books">Books</MenuItem>
                    <MenuItem value="digital">Digital Content</MenuItem>
                    <MenuItem value="courses">Courses</MenuItem>
                </Select>
            </Stack>
        </Paper>
    )
}
