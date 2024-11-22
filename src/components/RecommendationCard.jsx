import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material'

export default function RecommendationCard({ recommendation }) {
    const { title, author, cover, rating, category, description } = recommendation

    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="200"
                image={cover}
                alt={title}
                sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {author}
                </Typography>
                <Box sx={{ my: 1 }}>
                    <Rating value={rating} readOnly precision={0.5} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    {description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    fullWidth
                >
                    View Details
                </Button>
            </CardContent>
        </Card>
    )
}
