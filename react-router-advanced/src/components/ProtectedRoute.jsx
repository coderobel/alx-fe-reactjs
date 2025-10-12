// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // adjust path if necessary

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If user isn't authenticated → redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to protected content
  return children;
}
