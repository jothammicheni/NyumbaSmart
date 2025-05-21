"use client"

import type React from "react"
import { useState } from "react"
import {
  Home,
  CreditCard,
  FileText,
  MessageSquare,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { useTheme } from "../components/ThemeProvider"
import { getCurrentUser, logoutUser } from "../services/authService"

// Dummy data for the dashboard
const user=getCurrentUser.name

console.log(getCurrentUser())

const tenantInfo = {
  name:user,
  property: "Apartment 2B, Sunshine Apartments",
  leaseStart: "2023-01-01",
  leaseEnd: "2023-12-31",
  rentAmount: 25000,
  dueDate: 5, // Day of month
  balance: 0,
}

const paymentHistory = [
  { id: 1, date: "2023-05-03", amount: 25000, status: "completed", reference: "MPE123456789" },
  { id: 2, date: "2023-04-04", amount: 25000, status: "completed", reference: "MPE987654321" },
  { id: 3, date: "2023-03-02", amount: 25000, status: "completed", reference: "MPE456789123" },
  { id: 4, date: "2023-02-05", amount: 25000, status: "completed", reference: "MPE789123456" },
]

const maintenanceRequests = [
  { id: 1, issue: "Leaking faucet in kitchen", date: "2023-05-10", status: "pending" },
  { id: 2, issue: "Broken light fixture in bathroom", date: "2023-04-15", status: "in-progress" },
  { id: 3, issue: "AC not cooling properly", date: "2023-03-20", status: "completed" },
]

const announcements = [
  {
    id: 1,
    title: "Water Maintenance",
    message: "Water will be shut off on Saturday from 10am to 2pm for maintenance.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "New Security Measures",
    message: "We have installed new security cameras in the common areas.",
    date: "2023-05-01",
  },
]

const TenantDashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Calculate next payment date
  const getNextPaymentDate = () => {
    const today = new Date()
    let nextPaymentDate = new Date(today.getFullYear(), today.getMonth(), tenantInfo.dueDate)

    if (today.getDate() > tenantInfo.dueDate) {
      nextPaymentDate = new Date(today.getFullYear(), today.getMonth() + 1, tenantInfo.dueDate)
    }

    return formatDate(nextPaymentDate.toISOString())
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="fixed inset-y-0 left-0 flex flex-col w-64 max-w-xs bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600 dark:text-primary-500">NyumbaSmart</span>
            </div>
            <button
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4 space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-md"
              >
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Payments
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Maintenance
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <FileText className="w-5 h-5 mr-3" />
                Documents
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </a>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="/login"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
              onClick={()=>logoutUser()}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign out
            </a>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <span className="text-xl font-bold text-primary-600 dark:text-primary-500">NyumbaSmart</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 space-y-1">
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-md"
              >
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Payments
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <MessageSquare className="w-5 h-5 mr-3" />
                Maintenance
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <FileText className="w-5 h-5 mr-3" />
                Documents
              </a>
              <a
                href="#"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </a>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <a
              href="/login"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Sign out
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        {/* Top navigation */}
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-800 shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 flex justify-between px-4">
            <div className="flex-1 flex items-center">
              <div className="max-w-lg w-full lg:max-w-xs relative">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Search..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <span className="sr-only">Switch to light mode</span>
                ) : (
                  <span className="sr-only">Switch to dark mode</span>
                )}
                {theme === "dark" ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Notification dropdown */}
              <div className="ml-3 relative">
                <button
                  type="button"
                  className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                </button>
              </div>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    type="button"
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="User profile"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="flex-1 pb-8">
          <div className="bg-white dark:bg-gray-800 shadow">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
                    Welcome, {tenantInfo.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tenantInfo.property}</p>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                  <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Pay Rent
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Rent Summary */}
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Rent Summary</h3>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    <div className="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow-sm rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <DollarSign className="h-6 w-6 text-primary-500" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Monthly Rent
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                {formatCurrency(tenantInfo.rentAmount)}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow-sm rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Calendar className="h-6 w-6 text-primary-500" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Next Payment Due
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                {getNextPaymentDate()}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow-sm rounded-lg p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          {tenantInfo.balance > 0 ? (
                            <AlertTriangle className="h-6 w-6 text-red-500" />
                          ) : (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          )}
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Current Balance
                            </dt>
                            <dd>
                              <div
                                className={`text-lg font-medium ${
                                  tenantInfo.balance > 0
                                    ? "text-red-600 dark:text-red-400"
                                    : "text-green-600 dark:text-green-400"
                                }`}
                              >
                                {formatCurrency(tenantInfo.balance)}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow-sm rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h4 className="text-base font-medium text-gray-900 dark:text-white mb-4">Lease Information</h4>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lease Start Date</p>
                            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                              {formatDate(tenantInfo.leaseStart)}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lease End Date</p>
                            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                              {formatDate(tenantInfo.leaseEnd)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment History and Maintenance Requests */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Payment History */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Payment History</h3>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                      View all
                    </a>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flow-root">
                      <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                        {paymentHistory.map((payment) => (
                          <li key={payment.id} className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                  <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                  Rent Payment
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Ref: {payment.reference}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                  {formatCurrency(payment.amount)}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(payment.date)}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Maintenance Requests */}
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                      Maintenance Requests
                    </h3>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      New Request
                    </button>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flow-root">
                      <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                        {maintenanceRequests.map((request) => (
                          <li key={request.id} className="py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                {request.status === "completed" ? (
                                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                  </div>
                                ) : request.status === "in-progress" ? (
                                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                  </div>
                                ) : (
                                  <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                                  </div>
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                  {request.issue}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Reported on {formatDate(request.date)}
                                </p>
                              </div>
                              <div>
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                  ${
                                    request.status === "completed"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                      : request.status === "in-progress"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  }`}
                                >
                                  {request.status.charAt(0).toUpperCase() + request.status.slice(1).replace("-", " ")}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Announcements */}
              <div className="mt-8">
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                  <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Announcements</h3>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flow-root">
                      <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                        {announcements.map((announcement) => (
                          <li key={announcement.id} className="py-4">
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0 pt-1">
                                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                                  <Bell className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex justify-between">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {announcement.title}
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {formatDate(announcement.date)}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{announcement.message}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default TenantDashboard
