import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Menu,
    MenuItem,
    Box,
    Avatar
} from '@mui/material'
import {
    Menu as MenuIcon,
    Notifications,
    AccountCircle,
    Settings,
    Logout
} from '@mui/icons-material'

export default function TopBar({ drawerWidth, onMenuClick }) {
    const [anchorEl, setAnchorEl] = useState(null)
    const [notificationsAnchor, setNotificationsAnchor] = useState(null)

    const handleProfileMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleNotificationsMenu = (event) => {
        setNotificationsAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setNotificationsAnchor(null)
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={onMenuClick}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Library Management System
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" onClick={handleNotificationsMenu}>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>

                    <IconButton
                        onClick={handleProfileMenu}
                        sx={{ ml: 2 }}
                    >
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>A</Avatar>
                    </IconButton>
                </Box>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <AccountCircle sx={{ mr: 1 }} /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Settings sx={{ mr: 1 }} /> Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Logout sx={{ mr: 1 }} /> Logout
                    </MenuItem>
                </Menu>

                <Menu
                    anchorEl={notificationsAnchor}
                    open={Boolean(notificationsAnchor)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>New Book Added</MenuItem>
                    <MenuItem onClick={handleClose}>Membership Renewed</MenuItem>
                    <MenuItem onClick={handleClose}>System Update Available</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
