import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExternalServices() {
    const [services, setServices] = useState([
        {
            id: 1,
            name: 'Google Books API',
            status: 'connected',
            lastSync: new Date().toISOString()
        },
        {
            id: 2,
            name: 'WorldCat',
            status: 'disconnected',
            lastSync: null
        }
    ]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">External Services</h2>
            <div className="space-y-4">
                {services.map(service => (
                    <div key={service.id} className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{service.name}</h3>
                                <p className="text-sm text-gray-600">
                                    Status: <span className={`capitalize ${service.status === 'connected' ? 'text-green-500' : 'text-red-500'}`}>
                                        {service.status}
                                    </span>
                                </p>
                                {service.lastSync && (
                                    <p className="text-sm text-gray-600">
                                        Last Sync: {new Date(service.lastSync).toLocaleString()}
                                    </p>
                                )}
                            </div>
                            <button
                                className={`px-4 py-2 rounded ${service.status === 'connected'
                                        ? 'bg-red-500 hover:bg-red-600 text-white'
                                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                                    }`}
                            >
                                {service.status === 'connected' ? 'Disconnect' : 'Connect'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
