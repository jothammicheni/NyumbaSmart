"use client"

import type React from "react"
import { useState } from "react"
import { useTheme } from "./ThemeProvider"
import { Sun, Moon, Menu, X, LogIn } from "lucide-react"

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-500 dark:text-primary-400">NyumbaSmart</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 font-medium"
            >
              Property Listing
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 px-3 py-2 font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="flex items-center text-white bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-md font-medium transition-colors"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <a
              href="#"
              className="flex items-center text-white bg-primary-500 hover:bg-primary-600 px-3 py-1.5 rounded-md font-medium transition-colors mr-2"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Property Listing
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
