import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UserPreferences() {
    const [preferences, setPreferences] = useState({
        theme: 'light',
        notifications: {
            email: true,
            push: false,
            sms: false
        },
        language: 'en',
        displayDensity: 'comfortable'
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">User Preferences</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Theme</label>
                    <select
                        value={preferences.theme}
                        onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                    </select>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-2">Notifications</h3>
                    <div className="space-y-2">
                        {Object.entries(preferences.notifications).map(([key, value]) => (
                            <label key={key} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={(e) => setPreferences({
                                        ...preferences,
                                        notifications: {
                                            ...preferences.notifications,
                                            [key]: e.target.checked
                                        }
                                    })}
                                    className="rounded border-gray-300"
                                />
                                <span className="capitalize">{key}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
