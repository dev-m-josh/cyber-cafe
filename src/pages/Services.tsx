import {
  Printer,
  Copy,
  ScanLine,
  FileText,
  Globe,
  Camera,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Printer,
    title: 'Printing',
    description:
      'Fast and high-quality black & white or colour printing.',
    price: 'From KSh 10',
    image:
      'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Copy,
    title: 'Photocopying',
    description:
      'Clear and affordable photocopying for documents of all sizes.',
    price: 'From KSh 10',
    image:
      'https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: ScanLine,
    title: 'Scanning',
    description:
      'Scan your documents and receive them digitally with ease.',
    price: 'From KSh 50',
    image:
      'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: FileText,
    title: 'Typing & Documents',
    description:
      'Professional typing, formatting and document preparation.',
    price: 'From KSh 50',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Globe,
    title: 'Online Services',
    description:
      'eCitizen, KRA and other online government services.',
    price: 'From KSh 100',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    description:
      'Quick and professional passport-size photos.',
    price: 'KSh 200',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
]

function Services() {
  const handleWhatsApp = (service: string) => {
    const message = `Hi CyberHub, I'd like to enquire about your ${service} service.`
    const whatsappUrl = `https://wa.me/254748894542?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0a0e14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="max-w-2xl fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What We Offer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Everything You Need,
            <br />
            <span className="text-cyan-400">
              All in One Place.
            </span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            From everyday printing to online government services,
            CyberHub provides fast, reliable and affordable digital
            services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 fade-up">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                {/* Service Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0e14] via-transparent to-transparent opacity-80" />

                  {/* Icon */}
                  <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0a0e14]/90 text-cyan-400 backdrop-blur-sm transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400 group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex flex-1 flex-col p-6">

                  <h2 className="text-xl font-semibold">
                    {service.title}
                  </h2>

                  <p className="mt-3 flex-1 leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="text-sm font-semibold text-cyan-400">
                      {service.price}
                    </span>
                  </div>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => handleWhatsApp(service.title)}
                    className="group/button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                  >
                    Ask About This Service

                    <ArrowRight className="h-4 w-4 transition group-hover/button:translate-x-1" />
                  </button>

                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-8 text-center fade-up sm:px-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Not sure what you need?
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-gray-400">
            Send us a message on WhatsApp and tell us what you need.
            We'll help you find the right service.
          </p>

          <a
            href="https://wa.me/254748894542"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            WhatsApp Us

            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Services;
