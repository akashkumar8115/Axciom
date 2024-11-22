export const statisticsService = {
    async getLibraryMetrics() {
        try {
            const response = await fetch('/api/statistics/metrics');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch metrics:', error);
            throw error;
        }
    },

    async generateReport(params) {
        try {
            const response = await fetch('/api/statistics/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to generate report:', error);
            throw error;
        }
    },

    async getCustomMetrics(metricNames) {
        try {
            const response = await fetch('/api/statistics/custom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ metrics: metricNames })
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch custom metrics:', error);
            throw error;
        }
    }
};
