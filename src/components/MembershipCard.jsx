import { motion } from 'framer-motion';

export default function MembershipCard({ member }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-lg p-6"
        >
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{member.memberName}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {member.status}
                </span>
            </div>
            <div className="space-y-2">
                <p className="text-gray-600">ID: {member.id}</p>
                <p className="text-gray-600">Email: {member.email}</p>
                <p className="text-gray-600">Duration: {member.duration}</p>
                <p className="text-gray-600">Expires: {member.endDate}</p>
            </div>
        </motion.div>
    );
}
