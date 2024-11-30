import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, MeshWobbleMaterial } from '@react-three/drei';
import { Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const TermsScene = () => (
    <mesh>
        <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
            <Text3D font="/fonts/inter-bold.json" size={0.8} height={0.2}>
                Terms of Service
                <meshNormalMaterial />
            </Text3D>
        </Float>
        <mesh position={[0, -1.5, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshWobbleMaterial color="#FF6F61" attach="material" factor={0.6} speed={2} />
        </mesh>
    </mesh>
);

export default function TermsOfService() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-br from-red-100 to-orange-200"
        >
            <Container maxWidth="lg" className="py-12">
                {/* 3D Canvas Section */}
                <div className="relative w-full h-72">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <OrbitControls enableZoom={false} />
                        <Stars radius={100} depth={50} count={5000} factor={4} fade />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <TermsScene />
                    </Canvas>
                </div>

                {/* Terms of Service Content */}
                <Paper
                    sx={{
                        p: 4,
                        mt: 4,
                        boxShadow: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <Typography variant="h4" gutterBottom className="text-gray-800 font-bold">
                        Terms of Service
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                        By accessing and using our platform, you agree to comply with the terms and conditions set
                        forth below. These terms govern your use of the services we provide.
                    </Typography>

                    <Grid container spacing={3} className="mt-6">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                User Responsibilities
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                Users are expected to provide accurate information during registration and comply with
                                all applicable laws while using our platform. Any misuse of the platform may result in
                                account suspension or termination.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Limitations of Liability
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                We are not liable for any damages or losses resulting from the use of our platform.
                                This includes, but is not limited to, data loss, unauthorized access, or service
                                interruptions.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Modifications to Terms
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                We reserve the right to modify these terms at any time. Continued use of the platform
                                after changes are made indicates your acceptance of the updated terms.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </motion.div>
    );
}
