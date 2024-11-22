import { useQuery, useMutation, useQueryClient } from 'react-query'
import { libraryAPI } from '../services/api'

export function useBooks() {
    return useQuery('books', libraryAPI.getBooks)
}

export function useAddBook() {
    const queryClient = useQueryClient()
    return useMutation(libraryAPI.addBook, {
        onSuccess: () => {
            queryClient.invalidateQueries('books')
        }
    })
}

export function useDigitalContent() {
    return useQuery('digital-content', libraryAPI.getDigitalContent)
}

export function useAnalytics() {
    return useQuery('analytics', libraryAPI.getDashboardMetrics)
}

export function useRecommendations() {
    return useQuery('recommendations', libraryAPI.getRecommendations, {
        refetchInterval: 300000, // Refresh every 5 minutes
        staleTime: 240000 // Consider data stale after 4 minutes
    })
}