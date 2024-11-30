import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, Stars } from '@react-three/drei'
import { TextField, Button, Card, Alert } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const { token } = useParams()
    const navigate = useNavigate()
    const { confirmPasswordReset } = useAuth()

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
                    New Password
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            return setError('Passwords do not match')
        }
        try {
            await confirmPasswordReset(token, password)
            navigate('/login')
        } catch (err) {
            setError('Failed to reset password')
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
                        {error && <Alert severity="error" className="mb-4">{error}</Alert>}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <TextField
                                fullWidth
                                label="New Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            <TextField
                                fullWidth
                                label="Confirm New Password"
                                type="password"
                                variant="outlined"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                className="bg-gradient-to-r from-violet-600 to-indigo-600"
                            >
                                Set New Password
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default ResetPassword
