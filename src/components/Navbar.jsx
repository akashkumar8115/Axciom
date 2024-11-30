// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// export default function Navbar() {
//     const navigate = useNavigate();
//     const user = JSON.parse(localStorage.getItem('user'));

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     return (
//         <nav className="bg-gray-800">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <Link to="/" className="text-white font-bold">
//                             Library Management
//                         </Link>
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             {user?.role === 'admin' && (
//                                 <Link
//                                     to="/maintenance"
//                                     className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
//                                 >
//                                     Maintenance
//                                 </Link>
//                             )}
//                             <Link
//                                 to="/reports"
//                                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
//                             >
//                                 Reports
//                             </Link>
//                             <Link
//                                 to="/transactions"
//                                 className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
//                             >
//                                 Transactions
//                             </Link>
//                         </div>
//                     </div>
//                     <button
//                         onClick={handleLogout}
//                         className="text-gray-300 hover:text-white px-3 py-2 rounded-md"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// }


// 2nd attempt
import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Menu,
    MenuItem,
    Box,
    Badge,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import {
    Menu as MenuIcon,
    Dashboard,
    LibraryBooks,
    People,
    Analytics,
    Settings,
    Notifications,
    AccountCircle,
    Computer,
    Psychology,
    Assignment,
    ExitToApp
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [notificationAnchor, setNotificationAnchor] = useState(null)

    const menuItems = [
        { title: 'Dashboard', path: '/', icon: <Dashboard /> },
        { title: 'Digital Library', path: '/digital-library', icon: <Computer /> },
        { title: 'Members', path: '/members', icon: <People /> },
        { title: 'Analytics', path: '/analytics', icon: <Analytics /> },
        { title: 'AI Insights', path: '/ai-insights', icon: <Psychology /> },
        { title: 'Reports', path: '/reports', icon: <Assignment /> }
    ]

    const notifications = [
        { id: 1, message: 'New member registration', path: '/members', unread: true, icon: <People /> },
        { id: 2, message: 'Book return due today', path: '/members', unread: false, icon: <LibraryBooks /> },
        { id: 3, message: 'System update available', path: '/settings', unread: true, icon: <Settings /> },
    ]

    const handleProfileMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleNotificationMenu = (event) => {
        setNotificationAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setNotificationAnchor(null)
    }

    return (
        <>
            <AppBar className='bg-gray-800' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Library Management System
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.path}
                                color="inherit"
                                onClick={() => navigate(item.path)}
                                sx={{ display: { xs: 'none', md: 'flex' } }}
                                startIcon={item.icon}
                            >
                                {item.title}
                            </Button>
                        ))}

                        <IconButton color="inherit" onClick={handleNotificationMenu}>
                            <Badge badgeContent={notifications.length} color="error">
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
                </Toolbar>
            </AppBar>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { navigate('/profile'); handleClose(); }}>
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    Profile
                </MenuItem>
                <MenuItem onClick={() => { navigate('/settings'); handleClose(); }}>
                    <ListItemIcon><Settings /></ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => { navigate('/logout'); handleClose(); }}>
                    <ListItemIcon><ExitToApp /></ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

            <Menu
                anchorEl={notificationAnchor}
                open={Boolean(notificationAnchor)}
                onClose={handleClose}
            >
                {notifications.map((notification) => (
                    <MenuItem key={notification.id} onClick={() => { navigate(notification.path); handleClose(); }} >
                        <ListItemIcon>{notification.icon}</ListItemIcon>
                        {notification.message}
                    </MenuItem>

                ))}
            </Menu>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { width: 240 }
                }}
            >
                <Toolbar />
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            button
                            key={item.path}
                            onClick={() => {
                                navigate(item.path)
                                setMobileOpen(false)
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className='h-24'></div>
        </>
    )
}
