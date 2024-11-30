// import axios from 'axios'

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// const api = axios.create({
//     baseURL: API_URL,
//     timeout: 10000,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// // Auth token management
// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('authToken')
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// })

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('authToken')
//             window.location.href = '/login'
//         }
//         return Promise.reject(error)
//     }
// )

// // Auth endpoints
// export const authAPI = {
//     login: (credentials) => api.post('/auth/login', credentials),
//     register: (userData) => api.post('/auth/register', userData),
//     forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
//     resetPassword: (token, password) => api.post('/auth/reset-password', { token, password }),
//     verifyEmail: (token) => api.post('/auth/verify-email', { token }),
//     refreshToken: () => api.post('/auth/refresh-token')
// }

// // User endpoints
// export const userAPI = {
//     getProfile: () => api.get('/users/profile'),
//     updateProfile: (data) => api.put('/users/profile', data),
//     updateSettings: (settings) => api.put('/users/settings', settings),
//     uploadAvatar: (file) => {
//         const formData = new FormData()
//         formData.append('avatar', file)
//         return api.post('/users/avatar', formData, {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         })
//     }
// }

// // Digital content endpoints
// export const digitalContentAPI = {
//     getAll: (filters) => api.get('/digital-content', { params: filters }),
//     getById: (id) => api.get(`/digital-content/${id}`),
//     create: (data) => api.post('/digital-content', data),
//     update: (id, data) => api.put(`/digital-content/${id}`, data),
//     delete: (id) => api.delete(`/digital-content/${id}`),
//     search: (query) => api.get(`/digital-content/search`, { params: { q: query } }),
//     getTrending: () => api.get('/digital-content/trending'),
//     getRecommended: () => api.get('/digital-content/recommended')
// }

// // Analytics endpoints
// export const analyticsAPI = {
//     getDashboardMetrics: () => api.get('/analytics/dashboard'),
//     getContentMetrics: (contentId) => api.get(`/analytics/content/${contentId}`),
//     getUserMetrics: () => api.get('/analytics/user'),
//     trackEvent: (eventData) => api.post('/analytics/events', eventData),
//     getReports: (filters) => api.get('/analytics/reports', { params: filters }),
//     exportData: (format) => api.get(`/analytics/export?format=${format}`)
// }

// // Members endpoints
// // export const membersAPI = {
// //     getAll: (filters) => api.get('/members', { params: filters }),
// //     getById: (id) => api.get(`/members/${id}`),
// //     create: (data) => api.post('/members', data),
// //     update: (id, data) => api.put(`/members/${id}`, data),
// //     delete: (id) => api.delete(`/members/${id}`),
// //     importMembers: (file) => {
// //         const formData = new FormData()
// //         formData.append('file', file)
// //         return api.post('/members/import', formData, {
// //             headers: { 'Content-Type': 'multipart/form-data' }
// //         })
// //     },
// //     exportMembers: () => api.get('/members/export')
// // }

// // Members endpoints
// // Previous imports and setup remain the same...

// // Members API endpoints
// export const createMember = (data) => api.post('/members', data)
// export const updateMember = (id, data) => api.put(`/members/${id}`, data)
// export const deleteMember = (id) => api.delete(`/members/${id}`)
// export const getMemberById = (id) => api.get(`/members/${id}`)
// export const getMembers = (filters) => api.get('/members', { params: filters })

// // Enhanced members functionality
// export const membersAPI = {
//     create: createMember,
//     update: updateMember,
//     delete: deleteMember,
//     getById: getMemberById,
//     getAll: getMembers,
//     import: (file) => {
//         const formData = new FormData()
//         formData.append('file', file)
//         return api.post('/members/import', formData, {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         })
//     },
//     export: () => api.get('/members/export', { responseType: 'blob' }),
//     bulkUpdate: (data) => api.post('/members/bulk-update', data),
//     bulkDelete: (ids) => api.post('/members/bulk-delete', { ids })
// }

// // Export both individual functions and the API object

// // AI Insights endpoints
// export const aiAPI = {
//     getRecommendations: () => api.get('/ai/recommendations'),
//     generateInsight: (data) => api.post('/ai/insights/generate', data),
//     getContentAnalysis: (contentId) => api.get(`/ai/content/${contentId}/analysis`),
//     getPredictions: (data) => api.post('/ai/predictions', data),
//     getInsights: () => api.get('/ai/insights'),
//     getInsightById: (id) => api.get(`/ai/insights/${id}`),
//     // getAIInsights: () => api.get('/ai/insights'),
// }
// export const getAIInsights = () => api.get('/ai/insights')
// // File management endpoints
// export const fileAPI = {
//     upload: (file, type) => {
//         const formData = new FormData()
//         formData.append('file', file)
//         return api.post(`/files/upload/${type}`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         })
//     },
//     getSignedUrl: (fileKey) => api.get(`/files/signed-url/${fileKey}`),
//     delete: (fileKey) => api.delete(`/files/${fileKey}`)
// }

// // Settings endpoints
// export const settingsAPI = {
//     getSystemSettings: () => api.get('/settings/system'),
//     updateSystemSettings: (settings) => api.put('/settings/system', settings),
//     getUserSettings: () => api.get('/settings/user'),
//     updateUserSettings: (settings) => api.put('/settings/user', settings)
// }

// // Utility functions
// export const utils = {
//     healthCheck: () => api.get('/health'),
//     getServerTime: () => api.get('/time'),
//     validateToken: (token) => api.post('/auth/validate-token', { token })
// }

// export default api


// 2nd try

import axios from 'axios'

const API_BASE_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:5000'

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Auth token management
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('authToken')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

// Auth endpoints
export const loginUser = (credentials) => api.post('/auth/login', credentials)
export const registerUser = (userData) => api.post('/auth/register', userData)
export const forgotPassword = (email) => api.post('/auth/forgot-password', { email })
export const resetPassword = (token, password) => api.post('/auth/reset-password', { token, password })

// User endpoints
export const getUserProfile = () => api.get('/users/profile')
export const updateUserProfile = (data) => api.put('/users/profile', data)
export const updateUserSettings = (settings) => api.put('/users/settings', settings)

// Digital content endpoints
export const getDigitalContent = () => api.get('/digitalnet')
export const getContentById = (id) => api.get(`/digitalnet/${id}`)
export const createContent = (data) => api.post('/digitalnet', data)
export const updateContent = (id, data) => api.put(`/digitalnet/${id}`, data)
export const deleteContent = (id) => api.delete(`/digitalnet/${id}`)

// Members endpoints
export const getMembers = () => api.get('/members')
export const getMemberById = (id) => api.get(`/members/${id}`)
export const createMember = (data) => api.post('/members', data)
export const updateMember = (id, data) => api.put(`/members/${id}`, data)
export const deleteMember = (id) => api.delete(`/members/${id}`)

// Reports endpoints
export const getReports = () => api.get('/reports')
export const generateReport = (params) => api.post('/reports/generate', params)

// AI Insights endpoints
export const getAIInsights = () => api.get('/ai-insights')
export const generateInsight = (data) => api.post('/ai-insights/generate', data)

export default api
