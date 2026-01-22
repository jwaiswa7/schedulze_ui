function TrustSection() {
  const trustPoints = [
    "Built specifically for hospitality workflows",
    "Secure and reliable",
    "Designed for simplicity and clarity"
  ]

  return (
    <section className="bg-white py-16" aria-label="Trust and reliability">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Trust & Reliability
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {trustPoints.map((point, index) => (
              <li key={index} className="flex items-center justify-center">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700 text-lg">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-500 mt-8 italic">
            {/* (Testimonials and partner logos can be added later.) */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
