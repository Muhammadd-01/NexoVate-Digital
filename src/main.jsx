import React from "react"
import ReactDOM from "react-dom/client"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import App from "./App.jsx"
import "./index.css"
import client from "./apollo-client"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
