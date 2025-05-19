import type React from "react"
import { Building, CreditCard, Users, Shield } from "lucide-react"

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
              Earn recurring income through our <strong>digital share system</strong>.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:py-4 md:text-lg md:px-10 transition duration-300"
          >
            Start Managing Your Rental Properties
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
