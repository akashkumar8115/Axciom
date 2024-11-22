export const preferenceService = {
    async getUserPreferences(userId) {
        try {
            const response = await fetch(`/api/preferences/${userId}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch preferences:', error);
            throw error;
        }
    },

    async updatePreferences(userId, preferences) {
        try {
            const response = await fetch(`/api/preferences/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferences)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to update preferences:', error);
            throw error;
        }
    },

    async resetPreferences(userId) {
        try {
            const response = await fetch(`/api/preferences/${userId}/reset`, {
                method: 'POST'
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to reset preferences:', error);
            throw error;
        }
    }
};
