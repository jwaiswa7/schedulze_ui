function WhoItsForSection() {
  const businessTypes = [
    "Hotels",
    "Lodges",
    "Guest houses",
    "Apartments & Airbnbs",
    "Tour & accommodation providers"
  ]

  return (
    <section className="bg-gray-50 py-16" aria-label="Who it's for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            This platform is ideal for:
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="grid md:grid-cols-2 gap-4">
            {businessTypes.map((type, index) => (
              <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-gray-700 text-lg">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoItsForSection
