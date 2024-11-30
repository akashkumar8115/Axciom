// require('dotenv').config();
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query'

const API_URL = import.meta.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// const fetchDigitalContent = async () => {
//     const { data } = await axios.get(`${API_URL}/digital-content`)
//     return data
// }
// API functions
const libraryAPI = {
    getDigitalContent: () => axios.get(`${API_URL}/digital-content`).then(res => res.data),
    getCategories: () => axios.get(`${API_URL}/categories`).then(res => res.data),
    getResourceTypes: () => axios.get(`${API_URL}/resource-types`).then(res => res.data),
    getDashboardMetrics: () => axios.get(`${API_URL}/metrics`).then(res => res.data),
    getRecommendations: () => axios.get(`${API_URL}/recommendations`).then(res => res.data),
    addResource: (data) => axios.post(`${API_URL}/resources`, data).then(res => res.data),
    updateResource: (id, data) => axios.put(`${API_URL}/resources/${id}`, data).then(res => res.data),
    deleteResource: (id) => axios.delete(`${API_URL}/resources/${id}`).then(res => res.data)
}

// Query Hooks
export const useDigitalContent = (filters = {}) => {
    return useQuery(['digitalContent', filters], 
        () => libraryAPI.getDigitalContent(filters), {
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 2
    })
}

export const useCategories = () => {
    return useQuery('categories', libraryAPI.getCategories, {
        staleTime: 24 * 60 * 60 * 1000
    })
}

export const useResourceTypes = () => {
    return useQuery('resourceTypes', libraryAPI.getResourceTypes, {
        staleTime: 24 * 60 * 60 * 1000
    })
}

export const useAnalytics = () => {
    return useQuery('analytics', libraryAPI.getDashboardMetrics, {
        refetchInterval: 5 * 60 * 1000
    })
}

export const useRecommendations = () => {
    return useQuery('recommendations', libraryAPI.getRecommendations, {
        refetchInterval: 30 * 60 * 1000,
        staleTime: 15 * 60 * 1000
    })
}

// Mutation Hooks
export const useAddResource = () => {
    const queryClient = useQueryClient()
    return useMutation(libraryAPI.addResource, {
        onSuccess: () => {
            queryClient.invalidateQueries('digitalContent')
        }
    })
}

export const useUpdateResource = () => {
    const queryClient = useQueryClient()
    return useMutation(
        ({ id, data }) => libraryAPI.updateResource(id, data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('digitalContent')
            }
        }
    )
}

export const useDeleteResource = () => {
    const queryClient = useQueryClient()
    return useMutation(libraryAPI.deleteResource, {
        onSuccess: () => {
            queryClient.invalidateQueries('digitalContent')
        }
    })
}

// Advanced search hook
export const useSearchResources = (searchTerm) => {
    return useQuery(
        ['search', searchTerm],
        () => axios.get(`${API_URL}/search?q=${searchTerm}`).then(res => res.data),
        {
            enabled: Boolean(searchTerm),
            staleTime: 1000 * 60 * 5
        }
    )
}

// Resource statistics hook
export const useResourceStats = () => {
    return useQuery('resourceStats', 
        () => axios.get(`${API_URL}/resources/stats`).then(res => res.data),
        {
            refetchInterval: 1000 * 60 * 15
        }
    )
}

// Resource trending data hook
export const useTrendingResources = () => {
    return useQuery('trending', 
        () => axios.get(`${API_URL}/resources/trending`).then(res => res.data),
        {
            refetchInterval: 1000 * 60 * 30
        }
    )
}

// Resource usage analytics hook
export const useResourceAnalytics = (resourceId) => {
    return useQuery(
        ['resourceAnalytics', resourceId],
        () => axios.get(`${API_URL}/resources/${resourceId}/analytics`).then(res => res.data),
        {
            enabled: Boolean(resourceId)
        }
    )
}
