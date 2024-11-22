export const maintenanceService = {
    async performBackup() {
        try {
            const response = await fetch('/api/maintenance/backup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Backup failed:', error);
            throw error;
        }
    },

    async optimizeDatabase() {
        try {
            const response = await fetch('/api/maintenance/optimize', {
                method: 'POST'
            });
            return await response.json();
        } catch (error) {
            console.error('Database optimization failed:', error);
            throw error;
        }
    },

    async checkSystemHealth() {
        try {
            const response = await fetch('/api/maintenance/health-check');
            return await response.json();
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    }
};
