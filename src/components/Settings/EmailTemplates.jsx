import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EmailTemplates() {
    const [templates, setTemplates] = useState({
        welcome: {
            subject: 'Welcome to the Library',
            content: 'Welcome {{name}} to our library system!'
        },
        overdue: {
            subject: 'Overdue Book Notice',
            content: 'Dear {{name}}, your book "{{book}}" is overdue.'
        },
        renewal: {
            subject: 'Membership Renewal',
            content: 'Your membership expires on {{date}}.'
        }
    });

    const handleTemplateChange = (type, field, value) => {
        setTemplates(prev => ({
            ...prev,
            [type]: {
                ...prev[type],
                [field]: value
            }
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Email Templates</h2>
            {Object.entries(templates).map(([type, template]) => (
                <div key={type} className="mb-8">
                    <h3 className="text-lg font-semibold capitalize mb-4">{type} Email</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                value={template.subject}
                                onChange={(e) => handleTemplateChange(type, 'subject', e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Content</label>
                            <ReactQuill
                                value={template.content}
                                onChange={(content) => handleTemplateChange(type, 'content', content)}
                                className="mt-1"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    );
}
