import { Link, Outlet, useLocation } from "react-router-dom"
import { Home, Building, Users, CreditCard, Settings } from "lucide-react"

export default function LandlordDashboardLayout() {
  const location = useLocation()

  // Helper to mark active link
  function isActive(path: string) {
    return location.pathname === path ? "bg-primary-600 text-white" : "text-gray-700 hover:bg-gray-100"
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <nav className="flex flex-col w-60 bg-gray-50 p-4 space-y-2">
        <Link to="" className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive("/landlord/dashboard")}`}>
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link to="properties" className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive("/landlord/dashboard/properties")}`}>
          <Building className="w-5 h-5 mr-3" />
          Properties
        </Link>
        <Link to="tenants" className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive("/landlord/dashboard/tenants")}`}>
          <Users className="w-5 h-5 mr-3" />
          Tenants
        </Link>
        <Link to="payments" className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive("/landlord/dashboard/payments")}`}>
          <CreditCard className="w-5 h-5 mr-3" />
          Payments
        </Link>
        <Link to="settings" className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive("/landlord/dashboard/settings")}`}>
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
      </nav>

      {/* Main section */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
