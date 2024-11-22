import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

export default function BookManagement() {
    const [books, setBooks] = useState([
        { id: 1, title: 'React Mastery', author: 'John Dev', status: 'available', copies: 5 },
        { id: 2, title: 'JavaScript Pro', author: 'Jane Code', status: 'borrowed', copies: 3 },
    ]);

    const handleAddBook = (newBook) => {
        setBooks([...books, { ...newBook, id: books.length + 1 }]);
    };

    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                <h1 className="text-3xl font-bold mb-8">Book Management</h1>
                <SearchBar onSearch={(query) => console.log(query)} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <motion.div
                            key={book.id}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white p-6 rounded-lg shadow"
                        >
                            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                            <p className="text-gray-600">Author: {book.author}</p>
                            <p className="text-gray-600">Copies: {book.copies}</p>
                            <span className={`inline-block mt-2 px-2 py-1 rounded-full text-sm ${book.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {book.status}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
