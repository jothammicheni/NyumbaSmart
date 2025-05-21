import type React from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">NyumbaSmart</h3>
            <p className="text-gray-300 mb-4">
              Transforming property management in Kenya with innovative technology solutions for landlords and tenants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-400 transition duration-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition duration-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-400 transition duration-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  Property Listing
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/property-management"
                  className="text-gray-300 hover:text-primary-400 transition duration-300"
                >
                  Property Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/rent-collection"
                  className="text-gray-300 hover:text-primary-400 transition duration-300"
                >
                  Rent Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/services/maintenance"
                  className="text-gray-300 hover:text-primary-400 transition duration-300"
                >
                  Maintenance Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tenant-portal"
                  className="text-gray-300 hover:text-primary-400 transition duration-300"
                >
                  Tenant Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/services/agent-referrals"
                  className="text-gray-300 hover:text-primary-400 transition duration-300"
                >
                  Agent Referrals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">123 Business Park, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-300">info@nyumbasmart.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NyumbaSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
