import { useState } from 'react';
import QRCode from 'qrcode.react';
import { motion } from 'framer-motion';

export default function QRCodeGenerator() {
    const [bookData, setBookData] = useState({
        id: '',
        title: '',
        author: ''
    });

    const generateQRValue = () => {
        return JSON.stringify(bookData);
    };

    const downloadQR = () => {
        const canvas = document.getElementById('qr-code');
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
        let downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = `book-${bookData.id}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-xl font-bold mb-4">QR Code Generator</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Book ID</label>
                    <input
                        type="text"
                        value={bookData.id}
                        onChange={(e) => setBookData({ ...bookData, id: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={bookData.title}
                        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        value={bookData.author}
                        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div className="flex justify-center py-4">
                    <QRCode
                        id="qr-code"
                        value={generateQRValue()}
                        size={200}
                        level="H"
                    />
                </div>
                <button
                    onClick={downloadQR}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Download QR Code
                </button>
            </div>
        </motion.div>
    );
}
