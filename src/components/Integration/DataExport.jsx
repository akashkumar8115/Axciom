import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DataExport() {
    const [exportConfig, setExportConfig] = useState({
        format: 'csv',
        dataType: 'books',
        dateRange: {
            start: '',
            end: ''
        }
    });

    const handleExport = async () => {
        try {
            // Export logic implementation
        } catch (error) {
            console.error('Export failed:', error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Data Export</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Export Format</label>
                    <select
                        value={exportConfig.format}
                        onChange={(e) => setExportConfig({ ...exportConfig, format: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="csv">CSV</option>
                        <option value="json">JSON</option>
                        <option value="xlsx">Excel</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Data Type</label>
                    <select
                        value={exportConfig.dataType}
                        onChange={(e) => setExportConfig({ ...exportConfig, dataType: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="books">Books</option>
                        <option value="members">Members</option>
                        <option value="transactions">Transactions</option>
                    </select>
                </div>
                <button
                    onClick={handleExport}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Export Data
                </button>
            </div>
        </motion.div>
    );
}
