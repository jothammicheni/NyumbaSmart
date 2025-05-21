import type React from "react"
import { Link } from "react-router-dom"
import { Building, CreditCard, Users, Shield, Wifi, Wrench, Zap } from "lucide-react"

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Simplify Your Property Management
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            NyumbaSmart provides everything you need to manage your properties efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Building className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Room Management</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Easily track vacant and occupied rooms, and manage tenant allocations.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">M-Pesa Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Receive rent payments directly through M-Pesa with automatic receipts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Tenant Portal</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Allow tenants to pay rent and file maintenance issues through the app.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Agent Referrals</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Earn recurring income by referring landlords to our platform.
            </p>
          </div>
        </div>

        {/* Service Providers Section */}
        <div className="mt-16 mb-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect with Service Providers</h3>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 mx-auto mb-8">
            Access trusted service providers directly through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* WiFi Provider */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Wifi className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">WiFi Providers</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Connect with reliable internet service providers for your property. Manage subscriptions and resolve
              connectivity issues.
            </p>
          </div>

          {/* Plumbing Services */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Wrench className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Plumbing Services</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Quick access to professional plumbers for maintenance and emergency repairs. Schedule appointments and
              track service history.
            </p>
          </div>

          {/* Electrical Services */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 border border-gray-100 dark:border-gray-600">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">Electrical Services</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Connect with certified electricians for installations, repairs, and maintenance. Ensure safety and
              compliance with regulations.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition duration-300"
          >
            Start Managing Your Properties
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
