import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, Stars } from '@react-three/drei'
import { TextField, Button, Card, Alert } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const { resetPassword } = useAuth()

    const Scene = () => (
        <>
            <Stars />
            <Float speed={1.5} rotationIntensity={1.2}>
                <Text3D 
                    font="/fonts/inter-bold.json"
                    size={0.6}
                    height={0.2}
                    position={[-2, 0, 0]}
                >
                    Reset Password
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await resetPassword(email)
            setMessage('Check your email for password reset instructions')
            setError('')
        } catch (err) {
            setError('Failed to reset password')
            setMessage('')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
                <div className="h-48 rounded-t-2xl overflow-hidden">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <Scene />
                    </Canvas>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Card className="p-8 backdrop-blur-lg bg-white/90">
                        {message && <Alert severity="success" className="mb-4">{message}</Alert>}
                        {error && <Alert severity="error" className="mb-4">{error}</Alert>}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                className="bg-gradient-to-r from-violet-600 to-indigo-600"
                            >
                                Reset Password
                            </Button>

                            <div className="text-center mt-4">
                                <Link to="/login" className="text-violet-600 hover:text-violet-700">
                                    Back to Login
                                </Link>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default ForgotPassword
