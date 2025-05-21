import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { AuthProvider } from "./context/AuthContext"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PropertiesPage from "./pages/PropertiesPage"
import Register from "./pages/Register"
import Login from "./pages/Login"
import AdminPanel from "./pages/AdminPanel"
import LandlordDashboard from "./pages/LandlordDashboard"
import TenantDashboard from "./pages/TenantDashboard"
import AgentDashboard from "./pages/AgentDashboard"
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes with Navbar and Footer */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="properties" element={<PropertiesPage />} />
            </Route>

            {/* Auth routes with only Footer */}
            <Route path="/" element={<Layout includeNavbar={false} />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>

            {/* Dashboard routes without Navbar and Footer */}
            <Route path="/" element={<Layout includeNavbar={false} includeFooter={false} />}>
              <Route path="admin-panel" element={<AdminPanel />} />
              <Route path="landlord-dashboard" element={<LandlordDashboard />} />
              <Route path="tenant-dashboard" element={<TenantDashboard />} />
              <Route path="agent-dashboard" element={<AgentDashboard />} />
              <Route path="service-provider-dashboard" element={<ServiceProviderDashboard />} />
            </Route>

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
