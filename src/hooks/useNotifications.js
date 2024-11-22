import { useState, useEffect } from 'react';
import { notificationService } from '../services/notificationService';

export function useNotifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const unsubscribe = notificationService.subscribe((notification) => {
            setNotifications(prev => [...prev, { ...notification, id: Date.now() }]);
        });

        return () => unsubscribe();
    }, []);

    const clearNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    };

    return {
        notifications,
        clearNotification,
    };
}
