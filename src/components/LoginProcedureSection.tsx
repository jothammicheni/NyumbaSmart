import type React from "react"
import { Link } from "react-router-dom"
import { UserPlus, LogIn, LayoutDashboard, CheckCircle } from "lucide-react"

const LoginProcedureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">How to Get Started</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Join NyumbaSmart in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-600 h-full">
              <div className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="flex flex-col items-center pt-4">
                <UserPlus className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Register</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Create your account as a landlord, tenant, agent, or service provider.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
              <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-600 h-full">
              <div className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="flex flex-col items-center pt-4">
                <LogIn className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Login</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Access your account using your email and password.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
              <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-600 h-full">
              <div className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="flex flex-col items-center pt-4">
                <LayoutDashboard className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Access Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Navigate to your personalized dashboard based on your user role.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-0 -translate-y-1/2 z-10">
              <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-600 h-full">
              <div className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div className="flex flex-col items-center pt-4">
                <CheckCircle className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Start Using</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Begin managing properties, paying rent, or providing services through the platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition duration-300 pulse-animation"
          >
            Create Your Account Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LoginProcedureSection
