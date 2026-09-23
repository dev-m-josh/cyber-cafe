import {
  ArrowRight,
  CheckCircle,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const heroImage =
  'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1920'

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '15+', label: 'Services Offered' },
  { value: '8AM–9PM', label: 'Open Daily' },
  { value: '5★', label: 'Customer Rating' },
]

const benefits = [
  {
    icon: Zap,
    title: 'Fast Service',
    description:
      'Get your printing, scanning and online services completed quickly without unnecessary waiting.',
  },
  {
    icon: CheckCircle,
    title: 'Affordable Prices',
    description:
      'Straightforward and competitive prices for everyday digital services.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Secure',
    description:
      'We handle your documents and digital tasks with care and confidentiality.',
  },
  {
    icon: Clock,
    title: 'Open Daily',
    description:
      'Convenient opening hours make it easy to get the services you need when you need them.',
  },
]

function Home() {
  return (
    <div className="bg-[#0a0e14] text-white antialiased selection:bg-cyan-400 selection:text-black">

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-[120px] pb-10 sm:px-10 sm:pt-[73px] sm:pb-0 lg:px-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern cyber cafe workspace"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0e14] via-[#0a0e14]/85 to-[#0a0e14]/40" />

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0e14] via-transparent to-[#0a0e14]/60" />

        <div className="pointer-events-none absolute left-1/3 top-1/2 z-20 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Fast • Reliable • Affordable
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Local
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Hub
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Printing, photocopying, scanning, typing, online government
              services and more. Everything you need, all in one place —
              powered by high-speed fiber internet.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 text-center font-semibold text-black transition hover:bg-cyan-300"
              >
                View Our Services

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-center font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Phone className="h-4 w-4" />

                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-cyan-400/40 pl-4"
                >
                  <p className="text-2xl font-bold text-white">
                    {s.value}
                  </p>

                  <p className="mt-0.5 pt-0.5 text-xs uppercase tracking-wider text-gray-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose CyberHub */}
      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Why CyberHub
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Simple Service.
              <br />
              <span className="text-cyan-400">
                Done Right.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-gray-400">
              We make everyday digital tasks easier, faster and more
              convenient — whether you need a quick print or help with
              an online service.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <div
                  key={benefit.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-12 sm:px-10 sm:py-14 lg:px-14">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* CTA Text */}
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Need a Service?
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  We're Ready to
                  <span className="text-cyan-400"> Help.</span>
                </h2>

                <p className="mt-4 leading-relaxed text-gray-400">
                  Whether you need a document printed, an online service
                  completed or simply have a question, get in touch with us
                  and we'll help you get it done.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="https://wa.me/254748894542"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-1 font-semibold text-black transition hover:bg-cyan-300"
                >
                  <MessageCircle className="h-4 w-4" />

                  WhatsApp Us

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-1 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                >
                  View Services
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
