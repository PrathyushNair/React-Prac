import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ThemeProvider } from './ContextApi/contexts/ThemeContexts'
// import { AuthProvider } from './ContextApi/contexts/AuthContext'
// import { UserProvider } from './ContextApiWithReducer/contexts/UserContext.jsx'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Router/AuthContext/authContext.jsx";
// import { store } from './store.js'
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

// Use this for context API(reducer based) state management example.
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <UserProvider>
//     <App />
//     </UserProvider>
//   </StrictMode>
// )

// Use this for redux toolkit state management example (Counter--synchronous)
createRoot(document.getElementById("root")).render(
  //   <StrictMode>
  // <Provider store={store}>
  // </Provider>
  //   </StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
