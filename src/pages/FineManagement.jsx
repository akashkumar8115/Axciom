import { useState } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../components/DataTable';
import { formatCurrency } from '../utils/formatters';

export default function FineManagement() {
    const [fines, setFines] = useState([
        { id: 1, memberId: 'M001', amount: 25.00, reason: 'Late Return', status: 'Pending' },
        { id: 2, memberId: 'M002', amount: 15.50, reason: 'Damaged Book', status: 'Paid' },
    ]);

    const columns = [
        { key: 'memberId', label: 'Member ID' },
        { key: 'amount', label: 'Amount', render: (value) => formatCurrency(value) },
        { key: 'reason', label: 'Reason' },
        { key: 'status', label: 'Status' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
        >
            <h1 className="text-2xl font-bold mb-6">Fine Management</h1>
            <DataTable columns={columns} data={fines} />
        </motion.div>
    );
}
