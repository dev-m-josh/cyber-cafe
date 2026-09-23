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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-bold text-cyan-400 transition duration-300 hover:text-cyan-300"
        >
          CyberHub
        </NavLink>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative transition duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-cyan-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <a
          href="https://wa.me/254748894542"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 md:block"
        >
          WhatsApp Us
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition duration-300 hover:bg-white/10 hover:text-cyan-400 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-73px z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <div className="absolute right-6 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e14]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden">

              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-right text-sm font-medium transition duration-300 ${
                        isActive
                          ? 'text-cyan-400'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <a
                  href="https://wa.me/254748894542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
