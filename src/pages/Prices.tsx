import { ArrowRight, MessageCircle } from 'lucide-react'

const prices = [
  {
    service: 'Printing — Black & White',
    price: 'KSh 10',
    unit: 'per page',
    popular: true,
  },
  {
    service: 'Printing — Colour',
    price: 'KSh 30',
    unit: 'per page',
    popular: false,
  },
  {
    service: 'Photocopying',
    price: 'KSh 10',
    unit: 'per page',
    popular: true,
  },
  {
    service: 'Scanning',
    price: 'KSh 50',
    unit: 'per document',
    popular: false,
  },
  {
    service: 'Typing',
    price: 'KSh 50',
    unit: 'per page',
    popular: true,
  },
  {
    service: 'KRA Services',
    price: 'From KSh 100',
    unit: 'per service',
    popular: false,
  },
  {
    service: 'eCitizen Services',
    price: 'From KSh 100',
    unit: 'per service',
    popular: false,
  },
  {
    service: 'Passport Photos',
    price: 'KSh 200',
    unit: 'per set',
    popular: false,
  },
]

function Prices() {
  const handleWhatsApp = () => {
    const message =
      "Hi CyberHub, I'd like to enquire about your pricing and services."

    const whatsappUrl = `https://wa.me/254748894542?text=${encodeURIComponent(
      message,
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#0a0e14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Simple Pricing
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Quality Services.
            <br />
            <span className="text-cyan-400">
              Fair Prices.
            </span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Straightforward pricing with no unnecessary surprises.
            Get the digital services you need at affordable local rates.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

          <div className="hidden grid-cols-[1fr_auto_auto] gap-6 border-b border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:grid">
            <span>Service</span>
            <span>Price</span>
            <span>Unit</span>
          </div>

          <div>
            {prices.map((item, index) => (
              <div
                key={item.service}
                className={`grid gap-3 px-6 py-5 transition hover:bg-cyan-400/[0.04] sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6 ${
                  index !== prices.length - 1
                    ? 'border-b border-white/10'
                    : ''
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-medium text-white">
                    {item.service}
                  </p>

                  {item.popular && (
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                      Popular
                    </span>
                  )}

                  <p className="w-full text-xs uppercase tracking-wider text-gray-500 sm:hidden">
                    {item.unit}
                  </p>
                </div>

                <p className="text-lg font-bold text-cyan-400">
                  {item.price}
                </p>

                <p className="hidden text-sm text-gray-500 sm:block">
                  {item.unit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-5 py-4 text-sm leading-relaxed text-gray-400">
          <span className="font-semibold text-cyan-400">
            Note:
          </span>{' '}
          Prices may vary depending on the complexity of a service
          or document. Contact us for an exact quote before proceeding.
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              Need a custom quote?
            </h2>

            <p className="mt-2 max-w-xl text-gray-400">
              Tell us what you need and we'll give you an exact
              price before getting started.
            </p>
          </div>

          <button
            onClick={handleWhatsApp}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            <MessageCircle className="h-4 w-4" />

            Ask on WhatsApp

            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Prices
