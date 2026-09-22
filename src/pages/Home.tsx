import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage =
  'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=1920';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '15+', label: 'Services Offered' },
  { value: '8AM–9PM', label: 'Open Daily' },
  { value: '5★', label: 'Customer Rating' },
];

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e14] text-white antialiased selection:bg-cyan-400 selection:text-black">

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-[90px] sm:h-screen sm:px-10 sm:pt-[73px] lg:px-16"   
      >
        {/* z-0: Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern cyber cafe workspace"
            className="h-full w-full object-cover"
          />
        </div>

        {/* z-10: Dark gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0e14] via-[#0a0e14]/85 to-[#0a0e14]/40" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0e14] via-transparent to-[#0a0e14]/60" />

        {/* z-20: Glow accent */}
        <div className="pointer-events-none absolute left-1/3 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-3xl" />

        {/* z-30: Content */}
        <div className="relative z-30 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Fast • Reliable • Affordable
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Your Local
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Hub
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Printing, photocopying, scanning, typing, online government services
              and more. Everything you need, all in one place — powered by
              high-speed fiber internet.
            </p>

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

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-4 sm:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-l-2 border-cyan-400/40 pl-4"
                >
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-0.5 pt-0.5 text-xs uppercase tracking-wider text-gray-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;