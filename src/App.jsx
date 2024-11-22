import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import theme from './theme'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Maintenance from './pages/Maintenance'
import AddMembership from './pages/AddMembership'
import UpdateMembership from './pages/UpdateMembership'
import DigitalLibrary from './pages/DigitalLibrary'
import Analytics from './pages/Analytics'
import AIRecommendations from './pages/AIRecommendations'
import Navbar from './components/Navbar'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/add-membership" element={<AddMembership />} />
                <Route path="/update-membership" element={<UpdateMembership />} />
                <Route path="/digital-library" element={<DigitalLibrary />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/recommendations" element={<AIRecommendations />} />
              </Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App