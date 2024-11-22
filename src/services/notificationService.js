class NotificationService {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(cb => cb !== callback);
        };
    }

    notify(message, type = 'info') {
        this.subscribers.forEach(callback => {
            callback({ message, type });
        });
    }

    async sendEmail(to, subject, body) {
        try {
            const response = await fetch('/api/notifications/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to, subject, body }),
            });
            return response.json();
        } catch (error) {
            console.error('Email notification failed:', error);
            throw error;
        }
    }

    async sendSMS(phoneNumber, message) {
        try {
            const response = await fetch('/api/notifications/sms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, message }),
            });
            return response.json();
        } catch (error) {
            console.error('SMS notification failed:', error);
            throw error;
        }
    }
}

export const notificationService = {
    async sendNotification(userId, templateId, data) {
        try {
            const response = await fetch('/api/notifications/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, templateId, data })
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to send notification:', error);
            throw error;
        }
    },

    async getTemplates() {
        try {
            const response = await fetch('/api/notifications/templates');
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch templates:', error);
            throw error;
        }
    },

    async updateTemplate(templateId, data) {
        try {
            const response = await fetch(`/api/notifications/templates/${templateId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Failed to update template:', error);
            throw error;
        }
    },

    async getNotificationHistory(userId) {
        try {
            const response = await fetch(`/api/notifications/history/${userId}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch notification history:', error);
            throw error;
        }
    }
};