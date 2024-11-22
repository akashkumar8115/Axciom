import { useState } from 'react';
import { motion } from 'framer-motion';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function APIKeys() {
    const [apiKeys, setApiKeys] = useState([
        { id: 1, name: 'Production API Key', key: 'prod_key_xxxxx', status: 'active' },
        { id: 2, name: 'Development API Key', key: 'dev_key_xxxxx', status: 'active' }
    ]);

    const generateNewKey = () => {
        const newKey = {
            id: apiKeys.length + 1,
            name: `API Key ${apiKeys.length + 1}`,
            key: `key_${Math.random().toString(36).substr(2, 9)}`,
            status: 'active'
        };
        setApiKeys([...apiKeys, newKey]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">API Keys</h2>
                <button
                    onClick={generateNewKey}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Generate New Key
                </button>
            </div>
            <div className="space-y-4">
                {apiKeys.map(apiKey => (
                    <div key={apiKey.id} className="border p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{apiKey.name}</h3>
                                <p className="text-gray-600 font-mono">{apiKey.key}</p>
                            </div>
                            <div className="flex space-x-2">
                                <CopyToClipboard text={apiKey.key}>
                                    <button className="text-blue-500 hover:text-blue-600">Copy</button>
                                </CopyToClipboard>
                                <button className="text-red-500 hover:text-red-600">Revoke</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
