import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1e1e1e] border-b border-gray-700">
      <div className="w-full max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / App Name */}
        <NavLink
          to="/"
          className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
        >
          PasteApp
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-purple-900/40 text-purple-400 border border-purple-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-purple-900/40 text-purple-400 border border-purple-500'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`
            }
          >
            Pastes
          </NavLink>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
