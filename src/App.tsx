"use client"

import type React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import { AuthProvider, useAuth } from "./context/AuthContext"
import Layout from "./components/Layout"

// Pages
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PropertiesPage from "./pages/PropertiesPage"
import NotFound from "./pages/NotFound"

// Auth Pages
import LoginPage from "./features/auth/pages/LoginPage"
import RegisterPage from "./features/auth/pages/RegisterPage"

// Dashboard Pages
import TenantDashboard from "./features/tenant/pages/DashboardPage"
import LandlordDashboard from "./features/landlord/pages/DashboardPage"
import LandlordPropertiesPage from "./features/landlord/pages/PropertiesPage"
import PropertyDetailPage from "./features/landlord/pages/PropertyDetailPage"
import TenantsPage from "./features/landlord/pages/TenantsPage"
import AgentDashboard from "./features/agent/pages/DashboardPage"
import ServiceProviderDashboard from "./features/service-provider/pages/DashboardPage"
import AdminDashboard from "./features/admin/pages/DashboardPage"

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to the appropriate dashboard based on user role
    switch (user.role) {
      case "tenant":
        return <Navigate to="/tenant/dashboard" replace />
      case "landlord":
        return <Navigate to="/landlord/dashboard" replace />
      case "agent":
        return <Navigate to="/agent/dashboard" replace />
      case "service-provider":
        return <Navigate to="/service-provider/dashboard" replace />
      case "admin":
        return <Navigate to="/admin/dashboard" replace />
      default:
        return <Navigate to="/" replace />
    }
  }

  return <>{children}</>
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider defaultTheme="light">
          <Routes>
            {/* Public Routes with Navbar and Footer */}
            <Route element={<Layout includeNavbar={true} includeFooter={true} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/properties" element={<PropertiesPage />} />
            </Route>

            {/* Auth Routes with Footer only */}
            <Route element={<Layout includeNavbar={false} includeFooter={true} />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>

            {/* Dashboard Routes without Navbar and Footer */}
            <Route element={<Layout includeNavbar={false} includeFooter={false} />}>
              {/* Tenant Routes */}
              <Route
                path="/tenant/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["tenant"]}>
                    <TenantDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Landlord Routes */}
              <Route
                path="/landlord/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["landlord"]}>
                    <LandlordDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/landlord/properties"
                element={
                  <ProtectedRoute allowedRoles={["landlord"]}>
                    <LandlordPropertiesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/landlord/properties/:id"
                element={
                  <ProtectedRoute allowedRoles={["landlord"]}>
                    <PropertyDetailPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/landlord/tenants"
                element={
                  <ProtectedRoute allowedRoles={["landlord"]}>
                    <TenantsPage />
                  </ProtectedRoute>
                }
              />

              {/* Agent Routes */}
              <Route
                path="/agent/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["agent"]}>
                    <AgentDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Service Provider Routes */}
              <Route
                path="/service-provider/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["service-provider"]}>
                    <ServiceProviderDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
