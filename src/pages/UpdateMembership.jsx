import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function UpdateMembership() {
    const [membershipData, setMembershipData] = useState(null);
    const [duration, setDuration] = useState('6months');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const fetchMembershipData = (membershipNumber) => {
        // Implement API call to fetch membership data
        setMembershipData({
            memberName: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890',
            status: 'active'
        });
    };

    const onSubmit = (data) => {
        console.log({ ...data, duration });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto p-6"
        >
            <h2 className="text-2xl font-bold mb-6">Update Membership</h2>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Enter Membership Number"
                    className="w-full p-2 border rounded"
                    onChange={(e) => fetchMembershipData(e.target.value)}
                />
            </div>

            {membershipData && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-2">Member Name</label>
                        <input
                            defaultValue={membershipData.memberName}
                            {...register('memberName', { required: 'Name is required' })}
                            className="w-full p-2 border rounded"
                            readOnly
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block">Extend Membership</label>
                        <div className="space-x-4">
                            {['6months', '1year', '2years'].map((option) => (
                                <label key={option} className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value={option}
                                        checked={duration === option}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block">Cancel Membership</label>
                        <input type="checkbox" className="form-checkbox" />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update Membership
                    </button>
                </form>
            )}
        </motion.div>
    );
}
