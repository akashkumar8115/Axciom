import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SystemSettings() {
    const [settings, setSettings] = useState({
        backupSchedule: 'daily',
        retentionPeriod: 30,
        emailServer: {
            host: 'smtp.library.com',
            port: 587,
            secure: true
        },
        autoLogout: 30,
        maintenanceMode: false
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">System Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Backup Schedule</label>
                    <select
                        value={settings.backupSchedule}
                        onChange={(e) => setSettings({ ...settings, backupSchedule: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Data Retention (days)</label>
                    <input
                        type="number"
                        value={settings.retentionPeriod}
                        onChange={(e) => setSettings({ ...settings, retentionPeriod: parseInt(e.target.value) })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    />
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-2">Email Server Configuration</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={settings.emailServer.host}
                            placeholder="SMTP Host"
                            onChange={(e) => setSettings({
                                ...settings,
                                emailServer: { ...settings.emailServer, host: e.target.value }
                            })}
                            className="rounded-md border-gray-300"
                        />
                        <input
                            type="number"
                            value={settings.emailServer.port}
                            placeholder="Port"
                            onChange={(e) => setSettings({
                                ...settings,
                                emailServer: { ...settings.emailServer, port: parseInt(e.target.value) }
                            })}
                            className="rounded-md border-gray-300"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Maintenance Mode</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={settings.maintenanceMode}
                            onChange={(e) => setSettings({ ...settings, maintenanceMode: e.target.checked })}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </motion.div>
    );
}