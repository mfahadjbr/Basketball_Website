export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-50">
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-[#cc73f8] opacity-20"></div>
        <div className="relative size-16">
          <div className="absolute inset-0 rounded-full border-2 border-[#cc73f8] opacity-40"></div>
          <div className="absolute inset-2 rounded-full border-2 border-[#cc73f8] opacity-60"></div>
          <div className="absolute inset-4 rounded-full border-2 border-[#cc73f8] opacity-80"></div>
          <div className="absolute inset-6 rounded-full bg-[#cc73f8]"></div>
        </div>
        <p className="mt-4 text-center text-[#cc73f8]">Loading...</p>
      </div>
    </div>
  )
}

