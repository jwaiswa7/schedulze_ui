function ProblemStatementSection() {
  const problems = [
    "Manual booking management is time-consuming",
    "Guests rely on calls or WhatsApp to reserve",
    "Income tracking is scattered",
    "Invoices are created separately"
  ]

  return (
    <section className="bg-white py-16" aria-label="Problem and solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Built for Modern Hospitality Businesses
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Common Challenges:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution:</h3>
              <p className="text-gray-700 text-lg">
                Our platform centralizes bookings, guest reservations, payments, and invoices into one easy-to-use system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatementSection
