export const importService = {
    async processFile(file, type) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        try {
            const response = await fetch('/api/import', {
                method: 'POST',
                body: formData
            });
            return await response.json();
        } catch (error) {
            console.error('Import failed:', error);
            throw error;
        }
    },

    async validateData(data) {
        try {
            const response = await fetch('/api/import/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Validation failed:', error);
            throw error;
        }
    },

    async getImportHistory() {
        try {
            const response = await fetch('/api/import/history');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch import history:', error);
            throw error;
        }
    }
};
