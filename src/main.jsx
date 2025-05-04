import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/clerk-react";
const clerkKey = import.meta.env.VITE_CLERK_FRONTEND_API_KEY;

console.log("VITE_CLERK_FRONTEND_API_KEY", clerkKey);

const PUBLISHABLE_KEY = clerkKey;
if (!PUBLISHABLE_KEY) {
  throw new Error("VITE_CLERK_FRONTEND_API_KEY is not defined. Please set it in your .env file.");
}
  

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>
);
