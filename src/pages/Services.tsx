import {
  Printer,
  Copy,
  ScanLine,
  FileText,
  Globe,
  Camera,
} from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: 'Printing',
    description: 'Fast and high-quality black & white or colour printing.',
    price: 'From KSh 10',
  },
  {
    icon: Copy,
    title: 'Photocopying',
    description: 'Clear and affordable photocopying for documents of all sizes.',
    price: 'From KSh 10',
  },
  {
    icon: ScanLine,
    title: 'Scanning',
    description: 'Scan your documents and receive them digitally with ease.',
    price: 'From KSh 50',
  },
  {
    icon: FileText,
    title: 'Typing & Documents',
    description: 'Professional typing, formatting and document preparation.',
    price: 'From KSh 50',
  },
  {
    icon: Globe,
    title: 'Online Services',
    description: 'eCitizen, KRA and other online government services.',
    price: 'From KSh 100',
  },
  {
    icon: Camera,
    title: 'Passport Photos',
    description: 'Quick and professional passport-size photos.',
    price: 'KSh 200',
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-[#0a0e14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What We Offer
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Everything You Need,
            <br />
            <span className="text-cyan-400">All in One Place.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            From everyday printing to online government services, CyberHub
            provides fast, reliable and affordable digital services.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-xl font-semibold">
                  {service.title}
                </h2>

                <p className="mt-3 leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="text-sm font-semibold text-cyan-400">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default Services;
