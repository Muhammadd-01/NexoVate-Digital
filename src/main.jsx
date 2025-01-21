import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Toaster } from "react-hot-toast"
import App from "./App.jsx"
import "./index.css"
import client from "./apollo-client"
import ParticleBackground from "./components/ParticleBackground"  // Import the ParticleBackground component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Router>
          {/* Particle Background added here */}
          <div className="relative">
            <ParticleBackground />  {/* Add the background particles */}
            <App />
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
