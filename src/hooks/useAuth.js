import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/authSlice';

export function useAuth() {
    const dispatch = useDispatch();
    const { user, isLoading, error } = useSelector((state) => state.auth);

    const login = async (credentials) => {
        try {
            // Implement actual API call here
            const response = await new Promise((resolve) =>
                setTimeout(() => resolve({ data: { role: credentials.username === 'admin' ? 'admin' : 'user' } }), 1000)
            );

            dispatch(loginSuccess(response.data));
            localStorage.setItem('user', JSON.stringify(response.data));
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const logoutUser = () => {
        dispatch(logout());
    };

    return {
        user,
        isLoading,
        error,
        login,
        logout: logoutUser,
    };
}
