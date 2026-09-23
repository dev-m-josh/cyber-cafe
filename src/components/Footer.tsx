import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-cyan-400"
            >
              CyberHub
            </Link>

            <p className="mt-4 max-w-sm leading-relaxed text-gray-400">
              Your local digital hub for printing, scanning, typing,
              online services and more.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Quick Links
            </h2>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/services"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Services
              </Link>

              <Link
                to="/prices"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Prices
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 transition hover:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Contact
            </h2>

            <div className="mt-4 space-y-4 text-sm">

              <a
                href="tel:+254748894542"
                className="flex items-start gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <span>+254 748 894 542</span>
              </a>

              <a
                href="https://wa.me/254748894542"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mutambukijoshua2@gmail.com&su=CyberHub%20Service%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 transition hover:text-cyan-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">
                  mutambukijoshua2@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Your Location, Nairobi</span>
              </div>

            </div>
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Opening Hours
            </h2>

            <div className="mt-4 flex items-start gap-3 text-sm text-gray-400">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

              <div>
                <p>Monday – Saturday</p>
                <p className="mt-1 text-white">
                  8:00 AM – 9:00 PM
                </p>

                <p className="mt-4">
                  Sunday
                </p>
                <p className="mt-1 text-white">
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CyberHub. All rights reserved.
          </p>

          <p>
            Fast • Reliable • Affordable
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
