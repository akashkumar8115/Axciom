import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TaskScheduler() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Daily Backup',
            schedule: '0 0 * * *',
            lastRun: '2024-01-20T00:00:00',
            status: 'active'
        },
        {
            id: 2,
            name: 'Send Overdue Notices',
            schedule: '0 9 * * *',
            lastRun: '2024-01-20T09:00:00',
            status: 'active'
        }
    ]);

    const [newTask, setNewTask] = useState({
        name: '',
        schedule: '',
        status: 'active'
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Task Scheduler</h2>
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Task Name"
                        value={newTask.name}
                        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                        className="rounded-md border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Cron Schedule"
                        value={newTask.schedule}
                        onChange={(e) => setNewTask({ ...newTask, schedule: e.target.value })}
                        className="rounded-md border-gray-300"
                    />
                    <button
                        onClick={() => {/* Add task logic */ }}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Task
                    </button>
                </div>

                <div className="space-y-4">
                    {tasks.map(task => (
                        <div key={task.id} className="border p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{task.name}</h3>
                                <p className="text-sm text-gray-600">Schedule: {task.schedule}</p>
                                <p className="text-sm text-gray-600">Last Run: {new Date(task.lastRun).toLocaleString()}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className={`px-3 py-1 rounded ${task.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                                        } text-white`}
                                >
                                    {task.status}
                                </button>
                                <button className="text-red-500 hover:text-red-600">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
