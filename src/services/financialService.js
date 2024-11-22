export const financialService = {
    async getRevenueReport(period) {
        try {
            const response = await fetch(`/api/financial/revenue?period=${period}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch revenue report:', error);
            throw error;
        }
    },

    async getFineCollections(dateRange) {
        try {
            const response = await fetch('/api/financial/fines', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dateRange)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch fine collections:', error);
            throw error;
        }
    },

    async generateFinancialStatement(params) {
        try {
            const response = await fetch('/api/financial/statement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to generate financial statement:', error);
            throw error;
        }
    }
};
