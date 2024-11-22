import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactFlow from 'react-flow-renderer';

export default function WorkflowBuilder() {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [workflows, setWorkflows] = useState([]);

    const onNodesChange = (changes) => {
        setNodes((nds) => applyNodeChanges(changes, nds));
    };

    const onEdgesChange = (changes) => {
        setEdges((eds) => applyEdgeChanges(changes, eds));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6">Workflow Builder</h2>
            <div className="h-[600px]">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                />
            </div>
        </motion.div>
    );
}
