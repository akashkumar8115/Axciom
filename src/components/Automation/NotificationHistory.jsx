import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../DataTable';

export default function NotificationHistory() {
    const [history, setHistory] = useState([]);
    const [filters, setFilters] = useState({
        type: 'all',
        status: 'all',
        dateRange: {
            start: '',
            end: ''
        }
    });

    const columns = [
        { key: 'timestamp', label: 'Time' },
        { key: 'type', label: 'Type' },
        { key: 'recipient', label: 'Recipient' },
        { key: 'status', label: 'Status' },
        { key: 'channel', label: 'Channel' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Notification History</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="rounded-md border-gray-300"
                >
                    <option value="all">All Types</option>
                    <option value="overdue">Overdue</option>
                    <option value="reservation">Reservation</option>
                </select>
                <select
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="rounded-md border-gray-300"
                >
                    <option value="all">All Statuses</option>
                    <option value="sent">Sent</option>
                    <option value="failed">Failed</option>
                </select>
            </div>
            <DataTable columns={columns} data={history} />
        </motion.div>
    );
}
