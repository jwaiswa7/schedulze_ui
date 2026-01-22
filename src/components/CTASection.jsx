function CTASection() {
  return (
    <section className="bg-blue-600 py-16" aria-label="Final call to action">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Bookings?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://app.schedulze.com/" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
            <a 
              href="#demo" 
              className="inline-block bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
