import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import theme from './theme'

// Auth Pages
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

// Main Pages
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Members from './pages/Members'
import Analytics from './pages/Analytics'
import Reports from './pages/Reports'

// Feature Pages
import DigitalLibrary from './pages/DigitalLibrary'
import AIRecommendations from './pages/AIRecommendations'
import AIInsights from './pages/AIInsights'
import Maintenance from './pages/Maintenance'

// Membership Pages
import AddMembership from './pages/AddMembership'
import UpdateMembership from './pages/UpdateMembership'

// Policy Pages
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'

// Components
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000,
        },
    },
})

function App() {
    return (
        <ErrorBoundary>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <AuthProvider>
                            <AnimatePresence mode="wait">
                                <Navbar />
                                <Routes>
                                    {/* Public Routes */}
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/forgot-password" element={<ForgotPassword />} />
                                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                    <Route path="/terms-of-service" element={<TermsOfService />} />
                                    <Route path="/cookie-policy" element={<CookiePolicy />} />

                                    {/* Protected Routes */}
                                    <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                                        <Route path="/" element={<Dashboard />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/settings" element={<Settings />} />
                                        <Route path="/members" element={<Members />} />
                                        <Route path="/analytics" element={<Analytics />} />
                                        <Route path="/reports" element={<Reports />} />
                                        <Route path="/digital-library" element={<DigitalLibrary />} />
                                        <Route path="/ai-recommendations" element={<AIRecommendations />} />
                                        <Route path="/ai-insights" element={<AIInsights />} />
                                        <Route path="/maintenance" element={<Maintenance />} />
                                        <Route path="/add-membership" element={<AddMembership />} />
                                        <Route path="/update-membership" element={<UpdateMembership />} />
                                    </Route>
                                </Routes>
                            </AnimatePresence>
                        </AuthProvider>
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    )
}

export default App
