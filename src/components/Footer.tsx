import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:pr-8">
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-block text-2xl font-bold text-cyan-400 transition duration-300 hover:text-cyan-300"
            >
              CyberHub
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your local digital hub for printing, scanning, typing,
              online services and more. Fast, reliable and affordable.
            </p>

            <a
              href="https://wa.me/254748894542"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-black"
            >
              <MessageCircle className="h-4 w-4" />

              Chat on WhatsApp

              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                onClick={scrollToTop}
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={scrollToTop}
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Services
              </Link>

              <Link
                to="/prices"
                onClick={scrollToTop}
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Prices
              </Link>

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:+254748894542"
                className="group flex items-start gap-3 text-sm text-gray-400 transition duration-300 hover:text-cyan-400"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400 transition group-hover:scale-110" />

                <span>+254 748 894 542</span>
              </a>

              <a
                href="https://wa.me/254748894542"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-gray-400 transition duration-300 hover:text-cyan-400"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400 transition group-hover:scale-110" />

                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mutambukijoshua2@gmail.com&su=CyberHub%20Service%20Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm text-gray-400 transition duration-300 hover:text-cyan-400"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400 transition group-hover:scale-110" />

                <span className="break-all">
                  mutambukijoshua2@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                <span>Your Location, Nairobi</span>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Opening Hours
            </h2>

            <div className="mt-5 flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

              <div className="text-sm">
                <div>
                  <p className="text-gray-400">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 font-medium text-white">
                    8:00 AM – 9:00 PM
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-gray-400">
                    Sunday
                  </p>

                  <p className="mt-1 font-medium text-white">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CyberHub. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-gray-500 transition duration-300 hover:text-cyan-400"
          >
            Back to top

            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer
