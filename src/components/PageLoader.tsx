function PageLoader() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#0a0e14]">
      <div className="flex flex-col items-center">

        <div className="text-3xl font-bold text-cyan-400">
          CyberHub
        </div>

        <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-cyan-400" />
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-gray-500">
          Loading
        </p>

      </div>
    </div>
  )
}

export default PageLoader
