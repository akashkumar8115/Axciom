export const integrationService = {
    async generateAPIKey(name) {
        try {
            const response = await fetch('/api/integration/keys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name })
            });
            return await response.json();
        } catch (error) {
            console.error('API key generation failed:', error);
            throw error;
        }
    },

    async revokeAPIKey(keyId) {
        try {
            const response = await fetch(`/api/integration/keys/${keyId}`, {
                method: 'DELETE'
            });
            return await response.json();
        } catch (error) {
            console.error('API key revocation failed:', error);
            throw error;
        }
    },

    async validateAPIKey(key) {
        try {
            const response = await fetch('/api/integration/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key })
            });
            return await response.json();
        } catch (error) {
            console.error('API key validation failed:', error);
            throw error;
        }
    }
};
