import { motion } from 'framer-motion';
import StatCard from '../Dashboard/StatCard';

export default function DashboardStats({ stats }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                title="Total Members"
                value={stats.totalMembers}
                icon={<UserIcon />}
                color="border-blue-500"
            />
            <StatCard
                title="Books in Circulation"
                value={stats.booksInCirculation}
                icon={<BookIcon />}
                color="border-green-500"
            />
            <StatCard
                title="Overdue Books"
                value={stats.overdueBooks}
                icon={<ClockIcon />}
                color="border-red-500"
            />
            <StatCard
                title="Total Revenue"
                value={`$${stats.totalRevenue}`}
                icon={<CurrencyIcon />}
                color="border-purple-500"
            />
        </div>
    );
}
