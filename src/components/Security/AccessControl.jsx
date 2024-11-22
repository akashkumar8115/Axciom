import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AccessControl() {
    const [roles, setRoles] = useState([
        { id: 1, name: 'Admin', permissions: ['all'] },
        { id: 2, name: 'Librarian', permissions: ['read', 'write'] },
        { id: 3, name: 'Member', permissions: ['read'] }
    ]);

    const [permissions, setPermissions] = useState([
        'read', 'write', 'delete', 'manage_users', 'manage_books', 'manage_fines'
    ]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Access Control Management</h2>
            <div className="space-y-6">
                {roles.map(role => (
                    <div key={role.id} className="border p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">{role.name}</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {permissions.map(permission => (
                                <label key={permission} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={role.permissions.includes(permission)}
                                        onChange={() => {/* Handle permission change */ }}
                                        className="rounded border-gray-300"
                                    />
                                    <span className="capitalize">{permission.replace('_', ' ')}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
