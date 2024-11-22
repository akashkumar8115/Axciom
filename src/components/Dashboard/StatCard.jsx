import { motion } from 'framer-motion';

export default function StatCard({ title, value, icon, color }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${color}`}
        >
            <div className="flex items-center">
                <div className="flex-shrink-0">{icon}</div>
                <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>
            </div>
        </motion.div>
    );
}
