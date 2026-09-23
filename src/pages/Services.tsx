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
  },
  {
    icon: Copy,
    title: 'Photocopying',
    description:
      'Clear and affordable photocopying for documents of all sizes.',
    price: 'From KSh 10',
  },
  {
    icon: ScanLine,
    title: 'Scanning',
    description:
      'Scan your documents and receive them digitally with ease.',
    price: 'From KSh 50',
  },
  {
    icon: FileText,
    title: 'Typing & Documents',
    description:
      'Professional typing, formatting and document preparation.',
    price: 'From KSh 50',
  },
  {
    icon: Globe,
    title: 'Online Services',
    description:
      'eCitizen, KRA and other online government services.',
    price: 'From KSh 100',
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    description:
      'Quick and professional passport-size photos.',
    price: 'KSh 200',
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 fade-up">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-xl font-semibold">
                  {service.title}
                </h2>

                <p className="mt-3 flex-1 leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold text-cyan-400">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsApp(service.title)}
                  className="group/button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2.5 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                >
                  Ask About This Service

                  <ArrowRight className="h-4 w-4 transition group-hover/button:translate-x-1" />
                </button>
              </div>
            )
          })}
        </div>

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

export default Services

