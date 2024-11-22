export const syncService = {
    async syncWithExternalService(serviceId) {
        try {
            const response = await fetch(`/api/sync/${serviceId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Sync failed:', error);
            throw error;
        }
    },

    async getSyncStatus(serviceId) {
        try {
            const response = await fetch(`/api/sync/${serviceId}/status`);
            return await response.json();
        } catch (error) {
            console.error('Failed to get sync status:', error);
            throw error;
        }
    },

    async getSyncHistory(serviceId) {
        try {
            const response = await fetch(`/api/sync/${serviceId}/history`);
            return await response.json();
        } catch (error) {
            console.error('Failed to get sync history:', error);
            throw error;
        }
    }
};
