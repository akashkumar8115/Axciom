import { useState, useEffect } from 'react'
import {
    Snackbar,
    Alert,
    Slide
} from '@mui/material'

export default function RealTimeNotifications() {
    const [notifications, setNotifications] = useState([])
    const [currentNotification, setCurrentNotification] = useState(null)

    useEffect(() => {
        // Simulated real-time notifications
        const events = [
            { id: 1, type: 'success', message: 'New book added to library' },
            { id: 2, type: 'info', message: 'Member checked out a book' },
            { id: 3, type: 'warning', message: 'Book return deadline approaching' }
        ]

        let index = 0
        const interval = setInterval(() => {
            if (index < events.length) {
                setNotifications(prev => [...prev, events[index]])
                index++
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (notifications.length > 0 && !currentNotification) {
            setCurrentNotification(notifications[0])
            setNotifications(prev => prev.slice(1))
        }
    }, [notifications, currentNotification])

    const handleClose = () => {
        setCurrentNotification(null)
    }

    return (
        <Snackbar
            open={Boolean(currentNotification)}
            autoHideDuration={3000}
            onClose={handleClose}
            TransitionComponent={Slide}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            {currentNotification && (
                <Alert
                    onClose={handleClose}
                    severity={currentNotification.type}
                    variant="filled"
                    elevation={6}
                >
                    {currentNotification.message}
                </Alert>
            )}
        </Snackbar>
    )
}
