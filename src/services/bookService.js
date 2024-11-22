import api from './api';

export const bookService = {
    getBooks: async (params) => {
        const response = await api.get('/books', { params });
        return response.data;
    },

    getBookById: async (id) => {
        const response = await api.get(`/books/${id}`);
        return response.data;
    },

    createBook: async (bookData) => {
        const response = await api.post('/books', bookData);
        return response.data;
    },

    updateBook: async (id, bookData) => {
        const response = await api.put(`/books/${id}`, bookData);
        return response.data;
    },

    deleteBook: async (id) => {
        const response = await api.delete(`/books/${id}`);
        return response.data;
    },

    checkoutBook: async (bookId, userId) => {
        const response = await api.post(`/books/${bookId}/checkout`, { userId });
        return response.data;
    },

    returnBook: async (bookId, userId) => {
        const response = await api.post(`/books/${bookId}/return`, { userId });
        return response.data;
    }
};
