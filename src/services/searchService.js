export const searchService = {
    async performAdvancedSearch(params) {
        try {
            const response = await fetch('/api/catalog/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            return await response.json();
        } catch (error) {
            console.error('Search failed:', error);
            throw error;
        }
    },

    async getSuggestions(query) {
        try {
            const response = await fetch(`/api/catalog/suggestions?q=${encodeURIComponent(query)}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
            throw error;
        }
    },

    async getPopularSearches() {
        try {
            const response = await fetch('/api/catalog/popular-searches');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch popular searches:', error);
            throw error;
        }
    }
};
