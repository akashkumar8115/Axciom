import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function NotificationCenter() {
    const [templates, setTemplates] = useState([
        {
            id: 1,
            type: 'overdue',
            subject: 'Book Return Reminder',
            content: 'Dear {name}, your book "{title}" is due on {date}.',
            channels: ['email', 'sms']
        },
        {
            id: 2,
            type: 'reservation',
            subject: 'Book Available',
            content: 'Good news! The book "{title}" is now available for pickup.',
            channels: ['email']
        }
    ]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Notification Templates</h2>
            <div className="space-y-6">
                {templates.map(template => (
                    <div key={template.id} className="border p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-semibold capitalize">{template.type}</h3>
                                <p className="text-sm text-gray-600">{template.subject}</p>
                            </div>
                            <div className="flex space-x-2">
                                {template.channels.map(channel => (
                                    <span
                                        key={channel}
                                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                    >
                                        {channel}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded">
                            <pre className="text-sm whitespace-pre-wrap">{template.content}</pre>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
