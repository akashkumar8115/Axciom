import { useState, useEffect } from 'react';
import { securityService } from '../services/securityService';

export function usePermissions(userId) {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const userPermissions = await securityService.getUserPermissions(userId);
                setPermissions(userPermissions);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchPermissions();
        }
    }, [userId]);

    const hasPermission = (permission) => {
        return permissions.includes(permission) || permissions.includes('all');
    };

    return { permissions, loading, error, hasPermission };
}
