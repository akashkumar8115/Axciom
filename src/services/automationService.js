export const automationService = {
    async createTask(taskData) {
        try {
            const response = await fetch('/api/automation/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskData)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to create task:', error);
            throw error;
        }
    },

    async getTasks() {
        try {
            const response = await fetch('/api/automation/tasks');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch tasks:', error);
            throw error;
        }
    },

    async updateTaskStatus(taskId, status) {
        try {
            const response = await fetch(`/api/automation/tasks/${taskId}/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to update task status:', error);
            throw error;
        }
    },

    async deleteTask(taskId) {
        try {
            const response = await fetch(`/api/automation/tasks/${taskId}`, {
                method: 'DELETE'
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to delete task:', error);
            throw error;
        }
    }
};
