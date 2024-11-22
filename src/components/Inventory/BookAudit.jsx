import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../DataTable';

export default function BookAudit() {
    const [auditLogs, setAuditLogs] = useState([]);
    const [filters, setFilters] = useState({
        startDate: '',
        endDate: '',
        action: 'all'
    });

    const columns = [
        { key: 'timestamp', label: 'Date & Time' },
        { key: 'bookId', label: 'Book ID' },
        { key: 'action', label: 'Action' },
        { key: 'userId', label: 'User' },
        { key: 'details', label: 'Details' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Book Audit Trail</h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
                <input
                    type="date"
                    value={filters.startDate}
                    onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                    className="rounded-md border-gray-300"
                />
                <input
                    type="date"
                    value={filters.endDate}
                    onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                    className="rounded-md border-gray-300"
                />
                <select
                    value={filters.action}
                    onChange={(e) => setFilters({ ...filters, action: e.target.value })}
                    className="rounded-md border-gray-300"
                >
                    <option value="all">All Actions</option>
                    <option value="add">Added</option>
                    <option value="remove">Removed</option>
                    <option value="update">Updated</option>
                </select>
            </div>
            <DataTable columns={columns} data={auditLogs} />
        </motion.div>
    );
}
