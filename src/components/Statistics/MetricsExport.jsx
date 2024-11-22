import { useState } from 'react';
import { motion } from 'framer-motion';
import { statisticsService } from '../../services/statisticsService';

export default function MetricsExport() {
    const [exportConfig, setExportConfig] = useState({
        format: 'pdf',
        dateRange: {
            start: '',
            end: ''
        },
        metrics: []
    });

    const availableMetrics = [
        'booksByGenre',
        'membershipTrends',
        'circulationStats',
        'fineCollection',
        'popularBooks'
    ];

    const handleExport = async () => {
        try {
            const report = await statisticsService.generateReport(exportConfig);
            // Handle report download
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
            <h2 className="text-2xl font-bold mb-6">Export Statistics</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Export Format</label>
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
                <div className="grid grid-cols-2 gap-4">
                    {availableMetrics.map(metric => (
                        <label key={metric} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={exportConfig.metrics.includes(metric)}
                                onChange={(e) => {
                                    const metrics = e.target.checked
                                        ? [...exportConfig.metrics, metric]
                                        : exportConfig.metrics.filter(m => m !== metric);
                                    setExportConfig({ ...exportConfig, metrics });
                                }}
                                className="rounded border-gray-300"
                            />
                            <span className="capitalize">{metric.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </label>
                    ))}
                </div>
                <button
                    onClick={handleExport}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Generate Report
                </button>
            </div>
        </motion.div>
    );
}
