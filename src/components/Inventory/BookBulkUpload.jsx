import { useState } from 'react';
import { motion } from 'framer-motion';
import * as XLSX from 'xlsx';

export default function BookBulkUpload() {
    const [uploadStatus, setUploadStatus] = useState({
        isUploading: false,
        progress: 0,
        error: null
    });

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        setUploadStatus({ isUploading: true, progress: 0, error: null });

        try {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const workbook = XLSX.read(e.target.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet);

                // Process the data
                for (let i = 0; i < data.length; i++) {
                    setUploadStatus(prev => ({
                        ...prev,
                        progress: Math.round((i + 1) / data.length * 100)
                    }));
                    // Add API call here to save each book
                    await new Promise(resolve => setTimeout(resolve, 100));
                }

                setUploadStatus({
                    isUploading: false,
                    progress: 100,
                    error: null
                });
            };

            reader.readAsBinaryString(file);
        } catch (error) {
            setUploadStatus({
                isUploading: false,
                progress: 0,
                error: 'Upload failed. Please try again.'
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-xl font-bold mb-4">Bulk Book Upload</h2>
            <div className="space-y-4">
                <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileUpload}
                    className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
                />
                {uploadStatus.isUploading && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${uploadStatus.progress}%` }}
                        ></div>
                    </div>
                )}
                {uploadStatus.error && (
                    <p className="text-red-500">{uploadStatus.error}</p>
                )}
            </div>
        </motion.div>
    );
}
