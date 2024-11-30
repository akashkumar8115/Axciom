import React from 'react'
import { motion } from 'framer-motion'
import { Switch, Card, Tabs, Tab } from '@mui/material'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

const Settings = () => {
    const [tab, setTab] = React.useState(0)

    const SettingsModel = () => (
        <Box>
            <meshStandardMaterial color="violet" />
        </Box>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                {/* 3D Header */}
                <div className="h-48 mb-8 rounded-xl overflow-hidden">
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <SettingsModel />
                    </Canvas>
                </div>

                <Card className="backdrop-blur-lg bg-white/90">
                    <Tabs value={tab} onChange={(e, v) => setTab(v)}>
                        <Tab label="General" />
                        <Tab label="Notifications" />
                        <Tab label="Security" />
                    </Tabs>

                    <div className="p-8">
                        {tab === 0 && <GeneralSettings />}
                        {tab === 1 && <NotificationSettings />}
                        {tab === 2 && <SecuritySettings />}
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}

const SettingItem = ({ title, description }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 mb-4"
    >
        <div className="flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <Switch />
        </div>
    </motion.div>
)

const GeneralSettings = () => (
    <div>
        <SettingItem
            title="Dark Mode"
            description="Enable dark mode for better visibility in low light"
        />
        <SettingItem
            title="Language"
            description="Choose your preferred language"
        />
    </div>
)

const NotificationSettings = () => (
    <div>
        <SettingItem
            title="Email Notifications"
            description="Receive updates via email"
        />
        <SettingItem
            title="Push Notifications"
            description="Get instant updates on your device"
        />
    </div>
)

const SecuritySettings = () => (
    <div>
        <SettingItem
            title="Two-Factor Authentication"
            description="Add an extra layer of security"
        />
        <SettingItem
            title="Session Management"
            description="Manage active sessions"
        />
    </div>
)

export default Settings
