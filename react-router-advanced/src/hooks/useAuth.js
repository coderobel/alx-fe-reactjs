// src/hooks/useAuth.js
import { useState } from 'react';

// Simple custom hook to simulate authentication
export function useAuth() {
  // For demonstration: change to 'true' to simulate logged-in user
  const [isAuthenticated] = useState(false);

  return { isAuthenticated };
}
