import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Text3D, MeshDistortMaterial } from '@react-three/drei';
import { Typography, Grid, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';

const PrivacyPolicyScene = () => (
    <mesh>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Text3D font="/fonts/inter-bold.json" size={0.8} height={0.2}>
                Privacy Policy
                <meshNormalMaterial />
            </Text3D>
        </Float>
        <mesh position={[0, -1.5, 0]}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial color="#6C63FF" attach="material" distort={0.4} speed={2} />
        </mesh>
    </mesh>
);

export default function PrivacyPolicy() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200"
        >
            <Container maxWidth="lg" className="py-12">
                {/* 3D Canvas Section */}
                <div className="relative w-full h-72">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <OrbitControls enableZoom={false} />
                        <Stars radius={100} depth={50} count={5000} factor={4} fade />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1} />
                        <PrivacyPolicyScene />
                    </Canvas>
                </div>

                {/* Privacy Policy Content */}
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
                        Privacy Policy
                    </Typography>
                    <Typography variant="body1" paragraph className="text-gray-600">
                        At our company, your privacy is of utmost importance. This Privacy Policy outlines the types
                        of information we collect, how we use it, and the measures we take to ensure its security.
                    </Typography>

                    <Grid container spacing={3} className="mt-6">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Information Collection
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                We collect information that you provide directly to us, such as when you register for
                                an account or contact our support team. Additionally, we may gather data automatically
                                through cookies and analytics tools.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Use of Information
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                The information we collect is used to enhance your experience, improve our services,
                                and ensure the security of our platform. We do not share your personal data with
                                third-party advertisers.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom className="text-gray-800 font-semibold">
                                Your Rights
                            </Typography>
                            <Typography variant="body2" className="text-gray-600">
                                You have the right to access, modify, or delete your personal information at any time.
                                If you have any concerns about how we handle your data, feel free to contact us.
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </motion.div>
    );
}
