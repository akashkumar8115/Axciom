import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DataTable from '../components/DataTable';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';

export default function BookInventory() {
    const [books, setBooks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const columns = [
        { key: 'title', label: 'Title' },
        { key: 'author', label: 'Author' },
        { key: 'isbn', label: 'ISBN' },
        { key: 'quantity', label: 'Quantity' },
        { key: 'status', label: 'Status' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6"
        >
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Book Inventory</h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add New Book
                </button>
            </div>

            <SearchBar onSearch={(query) => console.log(query)} />

            <DataTable
                columns={columns}
                data={books}
                onRowClick={(book) => setSelectedBook(book)}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Book"
            >
                {/* Add Book Form */}
            </Modal>
        </motion.div>
    );
}
