function HeroSection() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Simplify Your
          <span className="text-slate-600"> Booking Management</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
          All-in-one platform for hotels, resorts, and hospitality businesses.
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Manage bookings effortlessly. Focus on what matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a 
            href="https://app.schedulze.com/" 
            target="_self"
            className="inline-block bg-slate-300 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-400 transition-colors shadow-lg hover:shadow-xl"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
