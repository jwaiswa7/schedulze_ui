function KeyFeaturesSection() {
  const features = [
    {
      icon: "📅",
      title: "Create & Manage Bookings",
      description: "Create, view, and manage all bookings from a single dashboard."
    },
    {
      icon: "🔗",
      title: "Shareable Booking Page",
      description: "Each business gets a public booking page that can be shared with guests to make reservations independently."
    },
    {
      icon: "💰",
      title: "Income Tracking",
      description: "Automatically track revenue per booking, day, or period."
    },
    {
      icon: "📄",
      title: "Invoice Generation",
      description: "Generate professional invoices for every booking with no manual effort."
    }
  ]

  return (
    <section className="bg-gray-50 py-16" aria-label="Key features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesSection
