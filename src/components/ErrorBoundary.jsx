import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material'
import { motion } from 'framer-motion'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    handleRetry = () => {
        window.location.reload()
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container className="min-h-screen flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <Box className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-lg">
                            <Typography variant="h4" gutterBottom className="text-gray-800">
                                Oops! Something went wrong
                            </Typography>
                            <Typography variant="body1" className="text-gray-600 mb-4">
                                We're having trouble loading this content
                            </Typography>
                            {process.env.NODE_ENV === 'development' && (
                                <pre className="text-left text-sm bg-gray-100 p-4 rounded mb-4 overflow-auto">
                                    {this.state.error?.toString()}
                                </pre>
                            )}
                            <Button 
                                variant="contained"
                                onClick={this.handleRetry}
                                className="bg-violet-600 hover:bg-violet-700"
                            >
                                Try Again
                            </Button>
                        </Box>
                    </motion.div>
                </Container>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
