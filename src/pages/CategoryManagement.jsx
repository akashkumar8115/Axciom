import { useState } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../components/DataTable';
import Modal from '../components/Modal';

export default function CategoryManagement() {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Fiction', description: 'Fiction books', bookCount: 150 },
        { id: 2, name: 'Science', description: 'Science books', bookCount: 200 },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        { key: 'name', label: 'Category Name' },
        { key: 'description', label: 'Description' },
        { key: 'bookCount', label: 'Number of Books' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Category Management</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add Category
                </button>
            </div>
            <DataTable columns={columns} data={categories} />
        </motion.div>
    );
}
