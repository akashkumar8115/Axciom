import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import { Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const CookieScene = () => (
    <mesh>
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
            <Text3D font="/fonts/inter-bold.json" size={0.8} height={0.2}>
                Cookie Policy
                <meshNormalMaterial />
            </Text3D>
        </Float>
        <mesh position={[0, -1.5, 0]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <MeshDistortMaterial color="#FFB74D" attach="material" distort={0.5} speed={1.5} />
        </mesh>
    </mesh>
);

export default function CookiePolicy() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200"
        >
            <Container maxWidth="lg" className="py-12">
                {/* 3D Canvas Section */}
                <div className="relative w-full h-72">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <OrbitControls enableZoom={false} />
                        <Stars radius={100} depth={50} count={4000} factor={4} fade />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <CookieScene />
                    </Canvas>
                </div>

                {/* Cookie Policy Content */}
                <Paper
                    sx={{
                        p: 4,
                        mt: 4,
                        boxShadow: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Typography variant="h4" gutterBottom className="text-gray-800 font-bold">
                        Cookie Policy
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                        This Cookie Policy explains how we use cookies and similar technologies to enhance your
                        experience on our platform. By using our platform, you agree to the use of cookies as
                        described in this policy.
                    </Typography>

                    <Grid container spacing={3} className="mt-6">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                What Are Cookies?
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                Cookies are small data files stored on your device by your browser. They help us
                                remember your preferences, analyze usage, and improve our services.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Types of Cookies We Use
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                - **Essential Cookies**: Necessary for the platform to function. <br />
                                - **Analytics Cookies**: Help us understand user interactions. <br />
                                - **Advertising Cookies**: Tailor ads based on your preferences.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Managing Cookies
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                You can control or delete cookies through your browser settings. Please note that
                                disabling cookies may affect the functionality of certain features on our platform.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </motion.div>
    );
}
