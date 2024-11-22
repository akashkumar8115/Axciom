export const exportService = {
    async exportToPDF(data, template) {
        try {
            const response = await fetch('/api/export/pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data, template }),
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.pdf';
            a.click();
        } catch (error) {
            console.error('PDF export failed:', error);
            throw error;
        }
    },

    async exportToExcel(data, sheetName = 'Sheet1') {
        try {
            const response = await fetch('/api/export/excel', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data, sheetName }),
            });
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'report.xlsx';
            a.click();
        } catch (error) {
            console.error('Excel export failed:', error);
            throw error;
        }
    },
};
