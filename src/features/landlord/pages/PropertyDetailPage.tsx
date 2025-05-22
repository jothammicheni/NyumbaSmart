"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Building, ArrowLeft, Plus, Trash2, Home, User, AlertTriangle, RefreshCw } from "lucide-react"
import { getProperty, createRoom, deleteRoom, assignTenant, removeTenant } from "../../../services/propertyService"
import AddRoomModal from "../components/AddRoomModal"
import AssignTenantModal from "../components/AssignTenantModal"

interface Room {
  _id: string
  room_number: string
  status: string
  tenant?: any
  tenantInfo?: any
}

interface Property {
  _id: string
  name: string
  city: string
  area: string
  rooms: Room[]
}

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false)
  const [isAssignTenantModalOpen, setIsAssignTenantModalOpen] = useState(false)
  const [selectedRoomId, setSelectedRoomId] = useState("")

  useEffect(() => {
    if (id) {
      fetchProperty()
    }
  }, [id])

  const fetchProperty = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await getProperty(id!)
      setProperty(response.data)
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to fetch property details")
    } finally {
      setLoading(false)
    }
  }

  const handleAddRoom = async (roomData: any) => {
    try {
      await createRoom(id!, roomData)
      setIsAddRoomModalOpen(false)
      fetchProperty()
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to add room")
    }
  }

  const handleDeleteRoom = async (roomId: string) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      try {
        await deleteRoom(roomId)
        fetchProperty()
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to delete room")
      }
    }
  }

  const handleAssignTenant = async (userId: string) => {
    try {
      await assignTenant(selectedRoomId, userId)
      setIsAssignTenantModalOpen(false)
      fetchProperty()
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to assign tenant")
    }
  }

  const handleRemoveTenant = async (roomId: string) => {
    if (window.confirm("Are you sure you want to remove this tenant?")) {
      try {
        await removeTenant(roomId)
        fetchProperty()
      } catch (err: any) {
        setError(err.response?.data?.error || "Failed to remove tenant")
      }
    }
  }

  const openAssignTenantModal = (roomId: string) => {
    setSelectedRoomId(roomId)
    setIsAssignTenantModalOpen(true)
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "vacant":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "occupied":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "maintenance":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "reserved":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate("/landlord/properties")}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </button>
        </div>
        <div className="p-4 bg-red-100 text-red-700 rounded-md">{error}</div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="p-6">
        <div className="mb-6">
          <button
            onClick={() => navigate("/landlord/properties")}
            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Properties
          </button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
          <AlertTriangle className="h-12 w-12 mx-auto text-yellow-500" />
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Property not found</h3>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <button
          onClick={() => navigate("/landlord/properties")}
          className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-primary-600 dark:text-primary-500 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{property.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">
                {property.area}, {property.city}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Units</div>
              <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{property.rooms.length}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Vacant Units</div>
              <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                {property.rooms.filter((room) => room.status === "vacant").length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Rooms</h2>
          <div className="flex space-x-2">
            <button
              onClick={fetchProperty}
              className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </button>
            <button
              onClick={() => setIsAddRoomModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Room
            </button>
          </div>
        </div>

        {property.rooms.length === 0 ? (
          <div className="p-6 text-center">
            <Home className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No rooms found</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Get started by adding your first room.</p>
            <div className="mt-6">
              <button
                onClick={() => setIsAddRoomModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Room
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Room Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Tenant
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {property.rooms.map((room) => (
                  <tr key={room._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {room.room_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(room.status)}`}
                      >
                        {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {room.status === "occupied" && room.tenantInfo ? (
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{room.tenantInfo.name}</div>
                            <div className="text-xs">{room.tenantInfo.email}</div>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">No tenant assigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {room.status === "occupied" ? (
                        <button
                          onClick={() => handleRemoveTenant(room._id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 ml-3"
                        >
                          Remove Tenant
                        </button>
                      ) : (
                        <button
                          onClick={() => openAssignTenantModal(room._id)}
                          className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                        >
                          Assign Tenant
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteRoom(room._id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 ml-3"
                        disabled={room.status === "occupied"}
                        title={room.status === "occupied" ? "Cannot delete room with tenant" : "Delete room"}
                      >
                        <Trash2 className="h-4 w-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <AddRoomModal
        isOpen={isAddRoomModalOpen}
        onClose={() => setIsAddRoomModalOpen(false)}
        onSubmit={handleAddRoom}
        propertyId={id!}
      />

      <AssignTenantModal
        isOpen={isAssignTenantModalOpen}
        onClose={() => setIsAssignTenantModalOpen(false)}
        onSubmit={handleAssignTenant}
        roomId={selectedRoomId}
      />
    </div>
  )
}

export default PropertyDetailPage
