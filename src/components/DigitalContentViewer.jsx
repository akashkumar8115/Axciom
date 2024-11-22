import { useState } from 'react'
import {
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Dialog
} from '@mui/material'
import {
    PlayArrow,
    PictureAsPdf,
    Book,
    Close
} from '@mui/icons-material'

export default function DigitalContentViewer({ content, filters }) {
    const [selectedContent, setSelectedContent] = useState(null)
    const [viewerOpen, setViewerOpen] = useState(false)

    const getContentIcon = (type) => {
        const icons = {
            video: <PlayArrow />,
            pdf: <PictureAsPdf />,
            ebook: <Book />
        }
        return icons[type] || <Book />
    }

    return (
        <>
            <Grid container spacing={3}>
                {content?.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card
                            sx={{
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.02)' }
                            }}
                            onClick={() => {
                                setSelectedContent(item)
                                setViewerOpen(true)
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.thumbnail}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h6" noWrap>
                                    {item.title}
                                </Typography>
                                <Box display="flex" alignItems="center" mt={1}>
                                    {getContentIcon(item.type)}
                                    <Typography variant="body2" color="text.secondary" ml={1}>
                                        {item.type.toUpperCase()}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog
                fullScreen
                open={viewerOpen}
                onClose={() => setViewerOpen(false)}
            >
                <Box sx={{ height: '100%', position: 'relative' }}>
                    <IconButton
                        sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
                        onClick={() => setViewerOpen(false)}
                    >
                        <Close />
                    </IconButton>
                    {selectedContent && (
                        <Box sx={{ height: '100%', p: 3 }}>
                            {/* Content viewer based on type */}
                            {selectedContent.type === 'video' && (
                                <video
                                    controls
                                    style={{ width: '100%', height: '100%' }}
                                    src={selectedContent.url}
                                />
                            )}
                            {selectedContent.type === 'pdf' && (
                                <iframe
                                    src={selectedContent.url}
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                />
                            )}
                            {selectedContent.type === 'ebook' && (
                                <div className="ebook-viewer">
                                    {/* Implement ebook viewer */}
                                </div>
                            )}
                        </Box>
                    )}
                </Box>
            </Dialog>
        </>
    )
}
