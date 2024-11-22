import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BackupManager() {
    const [backupStatus, setBackupStatus] = useState('idle');
    const [lastBackup, setLastBackup] = useState(null);

    const handleBackup = async () => {
        setBackupStatus('processing');
        try {
            // Implement backup logic
            setBackupStatus('completed');
            setLastBackup(new Date().toISOString());
        } catch (error) {
            setBackupStatus('failed');
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
                <div>
                    <p>Last Backup: {lastBackup ? new Date(lastBackup).toLocaleString() : 'Never'}</p>
                    <p>Status: {backupStatus}</p>
                </div>
                <button
                    onClick={handleBackup}
                    disabled={backupStatus === 'processing'}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {backupStatus === 'processing' ? 'Processing...' : 'Start Backup'}
                </button>
            </div>
        </motion.div>
    );
}
