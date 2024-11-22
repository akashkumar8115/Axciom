import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline, Drawer, AppBar } from '@mui/material'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import RealTimeNotifications from './RealTimeNotifications'

const drawerWidth = 280

export default function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar drawerWidth={drawerWidth} onMenuClick={() => setMobileOpen(!mobileOpen)} />
            <Drawer
                variant="permanent"
                sx={{ width: drawerWidth, flexShrink: 0 }}
            >
                <Sidebar />
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
            <RealTimeNotifications />
        </Box>
    )
}
