import AIrecommendations from '../components/AIRecommendations'
import RecommendationFilters from '../components/RecommendationFilters'
import { useRecommendations } from '../hooks/useLibraryData'


import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Stars, Text3D } from '@react-three/drei'
import { Card, Chip, Grid } from '@mui/material'

const AIRecommendations = () => {

    const { data, isLoading } = useRecommendations()
    const recommendations = [
        {
            id: 1,
            title: "Career Path Analysis",
            confidence: 92,
            suggestions: ["Data Science", "AI Engineering", "Cloud Architecture"]
        },
        {
            id: 2,
            title: "Skill Gap Analysis",
            confidence: 88,
            suggestions: ["Machine Learning", "Python", "Big Data"]
        }
    ]

    const Scene = () => {
        return (
            <>
                <Stars />
                <Float speed={1.5} rotationIntensity={1.5}>
                    <Text3D
                        font="/fonts/roboto.json"
                        size={0.5}
                        height={0.2}
                        curveSegments={12}
                    >
                        AI Insights
                        <meshNormalMaterial />
                    </Text3D>
                </Float>
            </>
        )
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-8">
                <div className="h-72 rounded-2xl overflow-hidden mb-8">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <Scene />
                    </Canvas>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {recommendations.map((rec) => (
                        <motion.div
                            key={rec.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Card className="p-6 backdrop-blur-lg bg-white/90">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold">{rec.title}</h3>
                                    <Chip
                                        label={`${rec.confidence}% Match`}
                                        color="primary"
                                    />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {rec.suggestions.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            variant="outlined"
                                        />
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <RecommendationFilters />
                </Grid>
                <Grid item xs={12}>
                    <AIrecommendations
                        recommendations={data}
                        isLoading={isLoading}
                    />
                </Grid>
            </Grid>
        </>


    )
}

export default AIRecommendations;
