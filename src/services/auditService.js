export const auditService = {
    async logAction(action) {
        try {
            const response = await fetch('/api/audit/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action)
            });
            return await response.json();
        } catch (error) {
            console.error('Audit logging failed:', error);
            throw error;
        }
    },

    async getAuditLogs(filters) {
        try {
            const queryParams = new URLSearchParams(filters);
            const response = await fetch(`/api/audit/logs?${queryParams}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch audit logs:', error);
            throw error;
        }
    },

    async generateAuditReport(startDate, endDate) {
        try {
            const response = await fetch('/api/audit/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ startDate, endDate })
            });
            return await response.json();
        } catch (error) {
            console.error('Audit report generation failed:', error);
            throw error;
        }
    }
};
