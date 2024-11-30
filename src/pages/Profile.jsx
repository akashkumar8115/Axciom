import React from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { Avatar, Card, Button } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const Profile = () => {
    const { user, updateUserProfile } = useAuth()

    const ProfileModel = () => {
        return (
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="purple" />
            </mesh>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                {/* 3D Header */}
                <div className="h-64 mb-8 rounded-xl overflow-hidden">
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <Stars />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} />
                        <ProfileModel />
                    </Canvas>
                </div>

                {/* Profile Content */}
                <Card className="p-8 backdrop-blur-lg bg-white/90">
                    <div className="flex items-center gap-8">
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Avatar
                                src={user?.avatar}
                                alt={user?.name}
                                className="w-32 h-32"
                            />
                        </motion.div>
                        <div>
                            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
                                {user?.name}
                            </h1>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProfileSection title="Personal Information" />
                        <ProfileSection title="Preferences" />
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

const ProfileSection = ({ title }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100"
    >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {/* Add section content */}
    </motion.div>
)

export default Profile
