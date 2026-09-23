import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  ArrowRight,
} from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Your Location, Nairobi',
    description: 'Come visit us for fast and reliable digital services.',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+254 748 894 542',
    description: 'Call us during our business hours.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+254 748 894 542',
    description: 'Send us a message and we will get back to you.',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'mutambukijoshua2@gmail.com',
    description: 'Send us an email for general enquiries.',
  },
];

function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0e14] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We're Here to
            <br />
            <span className="text-cyan-400">Help You.</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Need a document printed, an online service completed, or simply
            have a question? Reach out to CyberHub and we'll be happy to help.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon className="h-6 w-6" />
                </div>

                <h2 className="text-lg font-semibold">
                  {detail.title}
                </h2>

                <p className="mt-2 break-words font-medium text-cyan-400">
                  {detail.value}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {detail.description}
                </p>

                {/* Email Button */}
                {detail.title === 'Email' && (
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mutambukijoshua2@gmail.com&su=CyberHub%20Service%20Enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
                  >
                    Email Us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Opening Hours */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Clock className="h-5 w-5" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Opening Hours
                </h2>

                <p className="text-sm text-gray-500">
                  We're available every day
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-gray-400">
                  Monday – Saturday
                </span>

                <span className="font-medium text-white">
                  8:00 AM – 9:00 PM
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">
                  Sunday
                </span>

                <span className="font-medium text-white">
                  9:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-7">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              <MessageCircle className="h-8 w-8 text-cyan-400" />

              <h2 className="mt-5 text-2xl font-bold">
                Need Something Quickly?
              </h2>

              <p className="mt-3 max-w-md leading-relaxed text-gray-400">
                Message us on WhatsApp and tell us what you need. We'll help
                you get it done quickly.
              </p>

              <a
                href="https://wa.me/254748894542"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
