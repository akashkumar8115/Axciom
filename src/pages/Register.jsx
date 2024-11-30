import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, Text3D, Stars } from '@react-three/drei'
import { TextField, Button, Card, Alert } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const { register } = useAuth()
    const navigate = useNavigate()

    const Scene = () => (
        <>
            <Stars />
            <Float speed={1.5} rotationIntensity={1.2}>
                <Text3D 
                    font="/fonts/inter-bold.json"
                    size={0.8}
                    height={0.2}
                    position={[-2, 0, 0]}
                >
                    Join Us
                    <meshNormalMaterial />
                </Text3D>
            </Float>
        </>
    )

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match')
        }
        try {
            await register(formData)
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center p-8">
            <div className="w-full max-w-4xl">
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && <Alert severity="error">{error}</Alert>}
                            
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                            />

                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />

                            <TextField
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                variant="outlined"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                required
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                className="bg-gradient-to-r from-violet-600 to-indigo-600"
                            >
                                Register
                            </Button>

                            <div className="text-center mt-4">
                                Already have an account?{' '}
                                <Link to="/login" className="text-violet-600 hover:text-violet-700">
                                    Login here
                                </Link>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default Register
