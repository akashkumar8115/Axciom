export const reportingService = {
    async generateFinancialReport(startDate, endDate) {
        try {
            const response = await fetch('/api/reports/financial', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ startDate, endDate })
            });
            return await response.json();
        } catch (error) {
            console.error('Financial report generation failed:', error);
            throw error;
        }
    },

    async generateInventoryReport() {
        try {
            const response = await fetch('/api/reports/inventory');
            return await response.json();
        } catch (error) {
            console.error('Inventory report generation failed:', error);
            throw error;
        }
    },

    async generateMembershipReport() {
        try {
            const response = await fetch('/api/reports/membership');
            return await response.json();
        } catch (error) {
            console.error('Membership report generation failed:', error);
            throw error;
        }
    }
};
