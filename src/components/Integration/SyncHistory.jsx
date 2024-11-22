import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../DataTable';

export default function SyncHistory() {
    const [syncLogs, setSyncLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { key: 'timestamp', label: 'Time' },
        { key: 'service', label: 'Service' },
        { key: 'status', label: 'Status' },
        { key: 'itemsProcessed', label: 'Items Processed' },
        { key: 'duration', label: 'Duration' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Sync History</h2>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <DataTable columns={columns} data={syncLogs} />
            )}
        </motion.div>
    );
}