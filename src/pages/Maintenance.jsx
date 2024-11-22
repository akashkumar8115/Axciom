import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Maintenance() {
    return (
        <div>
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
            >
                <h1 className="text-3xl font-bold mb-8">Maintenance</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/add-membership">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Add Membership</h3>
                            <p className="text-gray-600">Create new member accounts</p>
                        </div>
                    </Link>
                    <Link to="/update-membership">
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">Update Membership</h3>
                            <p className="text-gray-600">Modify existing memberships</p>
                        </div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
