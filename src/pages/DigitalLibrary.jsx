import { useState, Suspense } from 'react'
import { useDigitalContent } from '../hooks/useLibraryData'
import DigitalContentViewer from '../components/DigitalContentViewer'
import ContentFilters from '../components/ContentFilters'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, Float } from '@react-three/drei'
import { Card, TextField, Grid, CircularProgress } from '@mui/material'
import { FaSearch, FaBookOpen } from 'react-icons/fa'

// Preload the 3D model
useGLTF.preload('/models/book.glb')

const Book = () => {
    try {
        const { scene } = useGLTF('/models/book.glb')
        return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
    } catch (error) {
        console.error('Error loading 3D model:', error)
        return null
    }
}

const LoadingFallback = () => (
    <div className="flex justify-center items-center h-64">
        <CircularProgress />
    </div>
)

export default function DigitalLibrary() {
    const [filters, setFilters] = useState({})
    const { data: content, isLoading } = useDigitalContent()
    const [searchTerm, setSearchTerm] = useState('')

    const resources = [
        {
            id: 1,
            title: "Advanced Machine Learning",
            type: "Course",
            duration: "8 weeks",
            rating: 4.8,
        },
        {
            id: 2,
            title: "Cloud Computing Fundamentals",
            type: "Workshop",
            duration: "4 weeks",
            rating: 4.6,
        },
        {
            id: 3,
            title: "Introduction to AI Ethics",
            type: "Seminar",
            duration: "2 weeks",
            rating: 4.7,
        },
        {
            id: 4,
            title: "Full-Stack Web Development",
            type: "Bootcamp",
            duration: "12 weeks",
            rating: 4.9,
        },
        {
            id: 5,
            title: "Data Analysis with Python",
            type: "Course",
            duration: "6 weeks",
            rating: 4.5,
        },
        {
            id: 6,
            title: "Blockchain for Beginners",
            type: "Workshop",
            duration: "3 weeks",
            rating: 4.3,
        },
        {
            id: 7,
            title: "Cybersecurity Essentials",
            type: "Course",
            duration: "5 weeks",
            rating: 4.6,
        },
        {
            id: 8,
            title: "Big Data Analytics",
            type: "Bootcamp",
            duration: "10 weeks",
            rating: 4.8,
        },
        {
            id: 9,
            title: "UI/UX Design Principles",
            type: "Seminar",
            duration: "1 week",
            rating: 4.4,
        },
        {
            id: 10,
            title: "Game Development with Unity",
            type: "Course",
            duration: "8 weeks",
            rating: 4.7,
        },
        {
            id: 11,
            title: "Advanced React Techniques",
            type: "Workshop",
            duration: "2 weeks",
            rating: 4.5,
        },
        {
            id: 12,
            title: "IoT and Smart Devices",
            type: "Bootcamp",
            duration: "6 weeks",
            rating: 4.7,
        },
        {
            id: 13,
            title: "Digital Marketing Strategies",
            type: "Seminar",
            duration: "3 days",
            rating: 4.6,
        },
        {
            id: 14,
            title: "Introduction to Quantum Computing",
            type: "Course",
            duration: "5 weeks",
            rating: 4.4,
        },
        {
            id: 15,
            title: "Mobile App Development",
            type: "Workshop",
            duration: "3 weeks",
            rating: 4.5,
        },
    ];
    

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-8">
            {/* 3D Header */}
            <div className="h-64 rounded-2xl overflow-hidden mb-8 bg-white/30">
                <Suspense fallback={<LoadingFallback />}>
                    <Canvas>
                        <Environment preset="sunset" />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.2}>
                            <Book />
                        </Float>
                    </Canvas>
                </Suspense>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ContentFilters onFilterChange={setFilters} />
                </Grid>
                <Grid item xs={12}>
                    <DigitalContentViewer content={content} filters={filters} />
                </Grid>
            </Grid>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto my-12"
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: <FaSearch className="text-gray-400 mr-2" />
                    }}
                    className="backdrop-blur-lg bg-white/90"
                />
            </motion.div>

            {/* Resources Grid */}
            <Grid container spacing={4}>
                {resources.map((resource) => (
                    <Grid item xs={12} md={6} lg={4} key={resource.id}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="p-6 backdrop-blur-lg bg-white/90">
                                <div className="flex items-center gap-4 mb-4">
                                    <FaBookOpen className="text-2xl text-blue-600" />
                                    <div>
                                        <h3 className="text-xl font-bold">{resource.title}</h3>
                                        <p className="text-gray-600">{resource.type}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{resource.duration}</span>
                                    <span className="text-sm font-semibold">⭐ {resource.rating}</span>
                                </div>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
