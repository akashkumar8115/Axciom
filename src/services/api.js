import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const membershipService = {
    getAllMemberships: () => api.get('/memberships'),
    getMembershipById: (id) => api.get(`/memberships/${id}`),
    createMembership: (data) => api.post('/memberships', data),
    updateMembership: (id, data) => api.put(`/memberships/${id}`, data),
    deleteMembership: (id) => api.delete(`/memberships/${id}`),
    renewMembership: (id) => api.post(`/memberships/${id}/renew`),
    getMembershipStats: () => api.get('/memberships/stats'),
    validateMembership: (id) => api.get(`/memberships/${id}/validate`)
}

export const libraryAPI = {
    // Auth
    login: credentials => api.post('/auth/login', credentials),
    
    // Books
    getBooks: () => api.get('/books'),
    addBook: book => api.post('/books', book),
    updateBook: (id, book) => api.put(`/books/${id}`, book),
    deleteBook: id => api.delete(`/books/${id}`),
    
    // Digital Library
    getDigitalContent: () => api.get('/digital'),
    streamContent: id => api.get(`/digital/stream/${id}`),
    
    // Analytics
    getDashboardMetrics: () => api.get('/analytics/dashboard'),
    getRecommendations: () => api.get('/analytics/recommendations'),
    generateReport: params => api.post('/analytics/report', params)
}

export default api