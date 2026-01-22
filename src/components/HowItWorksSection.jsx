function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Set Up Your Business",
      description: "Add your hotel or hospitality business details."
    },
    {
      number: "2",
      title: "Share Your Booking Page",
      description: "Send your booking link to guests or embed it on your website."
    },
    {
      number: "3",
      title: "Manage & Get Paid",
      description: "Track bookings, income, and invoices from one dashboard."
    }
  ]

  return (
    <section className="bg-white py-16" aria-label="How it works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
