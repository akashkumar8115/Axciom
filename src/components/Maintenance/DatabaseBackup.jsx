import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DatabaseBackup() {
    const [backupStatus, setBackupStatus] = useState({
        isRunning: false,
        lastBackup: null,
        progress: 0
    });

    const startBackup = async () => {
        setBackupStatus(prev => ({ ...prev, isRunning: true }));
        try {
            // Implement backup logic here
            for (let i = 0; i <= 100; i += 10) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setBackupStatus(prev => ({ ...prev, progress: i }));
            }
            setBackupStatus(prev => ({
                isRunning: false,
                lastBackup: new Date().toISOString(),
                progress: 100
            }));
        } catch (error) {
            setBackupStatus(prev => ({ ...prev, isRunning: false }));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-xl font-bold mb-4">Database Backup</h2>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span>Last Backup:</span>
                    <span>{backupStatus.lastBackup ? new Date(backupStatus.lastBackup).toLocaleString() : 'Never'}</span>
                </div>
                {backupStatus.isRunning && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{ width: `${backupStatus.progress}%` }}
                        ></div>
                    </div>
                )}
                <button
                    onClick={startBackup}
                    disabled={backupStatus.isRunning}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {backupStatus.isRunning ? 'Backup in Progress...' : 'Start Backup'}
                </button>
            </div>
        </motion.div>
    );
}
