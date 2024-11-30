import { createContext, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        // Check for existing auth token in localStorage
        const token = localStorage.getItem('authToken')
        const userData = localStorage.getItem('userData')

        if (token && userData) {
            setUser(JSON.parse(userData))
        }
        setLoading(false)
    }, [])

    const login = async (credentials) => {
        try {
            // Example API call
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })

            const data = await response.json()

            if (response.ok) {
                localStorage.setItem('authToken', data.token)
                localStorage.setItem('userData', JSON.stringify(data.user))
                setUser(data.user)
                navigate('/')
                return { success: true }
            } else {
                return { success: false, error: data.message }
            }
        } catch (error) {
            return { success: false, error: 'Login failed. Please try again.' }
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        setUser(null)
        navigate('/login')
    }

    const updateUserProfile = (newData) => {
        const updatedUser = { ...user, ...newData }
        localStorage.setItem('userData', JSON.stringify(updatedUser))
        setUser(updatedUser)
    }

    const checkAuthStatus = () => {
        return !!user
    }

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            loading,
            updateUserProfile,
            checkAuthStatus,
            isAuthenticated: !!user
        }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
