export const securityService = {
    async validatePermission(userId, permission) {
        try {
            const response = await fetch('/api/security/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, permission })
            });
            return await response.json();
        } catch (error) {
            console.error('Permission validation failed:', error);
            throw error;
        }
    },

    async updateRolePermissions(roleId, permissions) {
        try {
            const response = await fetch(`/api/security/roles/${roleId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ permissions })
            });
            return await response.json();
        } catch (error) {
            console.error('Role update failed:', error);
            throw error;
        }
    },

    async getUserPermissions(userId) {
        try {
            const response = await fetch(`/api/security/permissions/${userId}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch user permissions:', error);
            throw error;
        }
    }
};
