function BenefitsSection() {
  const benefits = [
    {
      title: "Save Time & Reduce Errors",
      description: "Automate routine tasks and eliminate manual data entry mistakes. Your staff can focus on guest service."
    },
    {
      title: "Increase Revenue",
      description: "Better visibility into occupancy and availability helps maximize bookings and optimize pricing."
    },
    {
      title: "Improve Guest Experience",
      description: "Faster check-ins, accurate bookings, and organized operations lead to happier guests and better reviews."
    },
    {
      title: "Scalable & Flexible",
      description: "Whether you run a small B&B or a large resort, our platform grows with your business."
    }
  ]

  const perfectFor = [
    { icon: "🏨", text: "Hotels & Resorts" },
    { icon: "🏖️", text: "Vacation Rentals" },
    { icon: "🍽️", text: "Restaurants & Event Venues" },
    { icon: "💆", text: "Spas & Wellness Centers" },
    { icon: "🎯", text: "Activity & Experience Providers" }
  ]

  return (
    <section className="bg-white py-16" aria-label="Benefits of using Schedulze booking platform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-300 text-white text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For:</h3>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
