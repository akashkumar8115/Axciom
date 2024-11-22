import { createContext, useContext, useReducer } from 'react'

const LibraryContext = createContext()

const initialState = {
    selectedBooks: [],
    filters: {},
    viewMode: 'grid',
    sortBy: 'title'
}

function libraryReducer(state, action) {
    switch (action.type) {
        case 'SELECT_BOOK':
            return { ...state, selectedBooks: [...state.selectedBooks, action.payload] }
        case 'UPDATE_FILTERS':
            return { ...state, filters: { ...state.filters, ...action.payload } }
        case 'SET_VIEW_MODE':
            return { ...state, viewMode: action.payload }
        case 'SET_SORT':
            return { ...state, sortBy: action.payload }
        default:
            return state
    }
}

export function LibraryProvider({ children }) {
    const [state, dispatch] = useReducer(libraryReducer, initialState)

    return (
        <LibraryContext.Provider value={{ state, dispatch }}>
            {children}
        </LibraryContext.Provider>
    )
}

export function useLibrary() {
    return useContext(LibraryContext)
}
