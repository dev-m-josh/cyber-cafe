import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Prices', path: '/prices' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold text-cyan-400"
        >
          CyberHub
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? 'text-cyan-400 underline decoration-2 underline-offset-8'
                    : 'text-gray-300 hover:text-cyan-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop WhatsApp Button */}
        <button className="hidden rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300 md:block">
          WhatsApp Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Mobile Floating Menu */}
        {menuOpen && (
          <div className="absolute right-6 top-full z-50 mt-0 w-48 rounded-xl border border-white/20 bg-black/10 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col items-end gap-5 text-right text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? 'text-cyan-400 underline decoration-2 underline-offset-8'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button className="w-full rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-black transition hover:bg-cyan-300">
                WhatsApp Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar