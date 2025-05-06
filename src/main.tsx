import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from "@clerk/clerk-react";

createRoot(document.getElementById('root')!).render(
  
<ClerkProvider publishableKey="pk_test_c2ltcGxlLWxhYi05Mi5jbGVyay5hY2NvdW50cy5kZXYk">
  
  <StrictMode>
    <App />
  </StrictMode>
</ClerkProvider>
);
