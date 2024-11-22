import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExportOptions() {
    const [exportConfig, setExportConfig] = useState({
        format: 'pdf',
        includeCharts: true,
        dateRange: {
            start: '',
            end: ''
        }
    });

    const handleExport = async () => {
        // Export logic implementation
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Export Report</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Format</label>
                    <select
                        value={exportConfig.format}
                        onChange={(e) => setExportConfig({ ...exportConfig, format: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300"
                    >
                        <option value="pdf">PDF</option>
                        <option value="excel">Excel</option>
                        <option value="csv">CSV</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={exportConfig.includeCharts}
                        onChange={(e) => setExportConfig({ ...exportConfig, includeCharts: e.target.checked })}
                        className="rounded border-gray-300"
                    />
                    <label className="ml-2 text-sm text-gray-700">Include Charts</label>
                </div>
                <button
                    onClick={handleExport}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Generate Export
                </button>
            </div>
        </motion.div>
    );
}
