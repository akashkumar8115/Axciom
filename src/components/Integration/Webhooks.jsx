import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Webhooks() {
    const [webhooks, setWebhooks] = useState([]);
    const [newWebhook, setNewWebhook] = useState({
        url: '',
        events: [],
        active: true
    });

    const availableEvents = [
        'book.checkout',
        'book.return',
        'member.created',
        'fine.created'
    ];

    const addWebhook = () => {
        if (newWebhook.url && newWebhook.events.length > 0) {
            setWebhooks([...webhooks, { ...newWebhook, id: Date.now() }]);
            setNewWebhook({ url: '', events: [], active: true });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Webhook Management</h2>
            <div className="space-y-6">
                <div className="border p-4 rounded-lg">
                    <h3 className="font-semibold mb-4">Add New Webhook</h3>
                    <div className="space-y-4">
                        <input
                            type="url"
                            value={newWebhook.url}
                            onChange={(e) => setNewWebhook({ ...newWebhook, url: e.target.value })}
                            placeholder="Webhook URL"
                            className="w-full rounded-md border-gray-300"
                        />
                        <div className="grid grid-cols-2 gap-2">
                            {availableEvents.map(event => (
                                <label key={event} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={newWebhook.events.includes(event)}
                                        onChange={(e) => {
                                            const events = e.target.checked
                                                ? [...newWebhook.events, event]
                                                : newWebhook.events.filter(e => e !== event);
                                            setNewWebhook({ ...newWebhook, events });
                                        }}
                                        className="rounded border-gray-300"
                                    />
                                    <span>{event}</span>
                                </label>
                            ))}
                        </div>
                        <button
                            onClick={addWebhook}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Webhook
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
