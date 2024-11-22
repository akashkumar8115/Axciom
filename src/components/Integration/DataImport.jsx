import { useState } from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';

export default function DataImport() {
    const [importStatus, setImportStatus] = useState({
        isProcessing: false,
        progress: 0,
        totalRecords: 0,
        processedRecords: 0
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'text/csv': ['.csv'],
            'application/json': ['.json'],
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
        },
        onDrop: async (files) => {
            setImportStatus({ ...importStatus, isProcessing: true });
            // Process files logic here
        }
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Data Import</h2>
            <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer">
                <input {...getInputProps()} />
                <p>Drag and drop files here, or click to select files</p>
                <p className="text-sm text-gray-500">Supported formats: CSV, JSON, XLSX</p>
            </div>
            {importStatus.isProcessing && (
                <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${(importStatus.processedRecords / importStatus.totalRecords) * 100}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                        Processing: {importStatus.processedRecords} of {importStatus.totalRecords} records
                    </p>
                </div>
            )}
        </motion.div>
    );
}
