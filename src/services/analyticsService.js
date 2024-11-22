export const analyticsService = {
    async getReadingPatterns(timeframe = 'weekly') {
        try {
            const response = await fetch(`/api/analytics/reading-patterns?timeframe=${timeframe}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch reading patterns:', error);
            throw error;
        }
    },

    async getGenreAnalytics() {
        try {
            const response = await fetch('/api/analytics/genres');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch genre analytics:', error);
            throw error;
        }
    },

    async getUserEngagementMetrics(period = '6months') {
        try {
            const response = await fetch(`/api/analytics/engagement?period=${period}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch user engagement metrics:', error);
            throw error;
        }
    },

    async generateCustomReport(params) {
        try {
            const response = await fetch('/api/analytics/custom-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to generate custom report:', error);
            throw error;
        }
    }
};
