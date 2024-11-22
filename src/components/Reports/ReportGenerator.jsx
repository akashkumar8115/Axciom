import { useState } from 'react';
import { Chart } from 'react-chartjs-2';

export default function ReportGenerator({ type, data }) {
    const [reportConfig, setReportConfig] = useState({
        startDate: '',
        endDate: '',
        reportType: type
    });

    const chartConfig = {
        labels: data.labels,
        datasets: [{
            label: 'Data',
            data: data.values,
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6 space-y-4">
                <div className="flex space-x-4">
                    <input
                        type="date"
                        value={reportConfig.startDate}
                        onChange={(e) => setReportConfig({ ...reportConfig, startDate: e.target.value })}
                        className="border rounded p-2"
                    />
                    <input
                        type="date"
                        value={reportConfig.endDate}
                        onChange={(e) => setReportConfig({ ...reportConfig, endDate: e.target.value })}
                        className="border rounded p-2"
                    />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Generate Report
                </button>
            </div>
            <Chart type="bar" data={chartConfig} />
        </div>
    );
}
