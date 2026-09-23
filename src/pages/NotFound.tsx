import { ArrowLeft, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0e14] px-6 pt-20 text-white">
      <div className="w-full max-w-2xl text-center">

        <p className="text-8xl font-bold tracking-tight text-cyan-400 sm:text-9xl">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to CyberHub.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:bg-cyan-300"
          >
            <Home className="h-4 w-4" />

            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            <ArrowLeft className="h-4 w-4" />

            Go Back
          </button>

        </div>

      </div>
    </div>
  )
}

export default NotFound
