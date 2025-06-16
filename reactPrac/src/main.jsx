import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ContextApi/contexts/ThemeContexts'
import { AuthProvider } from './ContextApi/contexts/AuthContext'
import { UserProvider } from './ContextApiWithReducer/contexts/UserContext.jsx'

// use this for all the normal state managementexample
// createRoot(document.getElementById('root')).render(
//   <StrictMode>

//     <App />

//   </StrictMode>
// )



// //Use this for context API state management example
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
// <AuthProvider>
//     <App />
// </AuthProvider>
//     </ThemeProvider>
//   </StrictMode>
// )


// Use this for context API(reducer based) state management example with AuthProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>
)