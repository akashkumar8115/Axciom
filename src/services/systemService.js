export const systemService = {
    async getSystemSettings() {
        try {
            const response = await fetch('/api/system/settings');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch system settings:', error);
            throw error;
        }
    },

    async updateSystemSettings(settings) {
        try {
            const response = await fetch('/api/system/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(settings)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to update system settings:', error);
            throw error;
        }
    },

    async checkSystemHealth() {
        try {
            const response = await fetch('/api/system/health');
            return await response.json();
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    },

    async toggleMaintenanceMode(enabled) {
        try {
            const response = await fetch('/api/system/maintenance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ enabled })
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to toggle maintenance mode:', error);
            throw error;
        }
    }
};
