import { useNavigate, useLocation } from 'react-router-dom'
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Divider,
    Typography
} from '@mui/material'
import {
    Dashboard,
    LibraryBooks,
    Build,
    PersonAdd,
    Update,
    Book,
    Analytics,
    Psychology
} from '@mui/icons-material'

export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        { title: 'Dashboard', path: '/', icon: <Dashboard /> },
        { title: 'Digital Library', path: '/digital-library', icon: <LibraryBooks /> },
        { title: 'Maintenance', path: '/maintenance', icon: <Build /> },
        { title: 'Add Membership', path: '/add-membership', icon: <PersonAdd /> },
        { title: 'Update Membership', path: '/update-membership', icon: <Update /> },
        { title: 'Analytics', path: '/analytics', icon: <Analytics /> },
        { title: 'AI Recommendations', path: '/recommendations', icon: <Psychology /> }
    ]

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 3, px: 2 }}>
                <Typography variant="h6" color="primary">
                    Library System
                </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton
                            selected={location.pathname === item.path}
                            onClick={() => navigate(item.path)}
                            sx={{
                                borderRadius: 1,
                                mb: 0.5,
                                '&.Mui-selected': {
                                    backgroundColor: 'primary.main',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                    '& .MuiListItemIcon-root': {
                                        color: 'white',
                                    },
                                },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
