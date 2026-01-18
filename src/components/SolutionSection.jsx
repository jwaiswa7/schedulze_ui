function SolutionSection() {
  const features = [
    {
      icon: "📅",
      title: "Centralized Hotel Booking Calendar",
      description: "View all hotel reservations and room bookings at a glance with an intuitive calendar interface. Track guest arrivals, departures, and room occupancy in real-time. Perfect for hotel management and resort operations."
    },
    {
      icon: "👥",
      title: "Hotel Guest Management System",
      description: "Maintain comprehensive guest profiles, reservation history, and preferences. Streamline hotel check-in and check-out processes. Manage guest data for hotels, resorts, and vacation rentals."
    },
    {
      icon: "🏨",
      title: "Multi-Department Booking Management",
      description: "Manage hotel rooms, restaurant reservations, spa bookings, and activity scheduling all from one integrated platform. Perfect for full-service hotels, resorts, and hospitality complexes."
    },
    {
      icon: "📊",
      title: "Real-Time Hotel Analytics & Reports",
      description: "Get instant insights on guest arrivals, departures, new reservations, room occupancy rates, and booking cancellations. Make data-driven decisions for your hotel or resort."
    },
    {
      icon: "🔒",
      title: "Prevent Double Bookings Automatically",
      description: "Automated overlap detection ensures you never double-book hotel rooms, spa appointments, or restaurant tables. Protect your revenue and reputation with built-in booking conflict prevention."
    },
    {
      icon: "👨‍💼",
      title: "Hotel Staff Collaboration Tools",
      description: "Manage staff access, user roles, and permissions. Enable multiple hotel team members to manage bookings, check-ins, and guest services seamlessly across departments."
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16" aria-label="Booking management solution features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Hotel Booking Management Software
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage hotel reservations, guest check-ins, room bookings, and hospitality operations in one intuitive booking management platform. Perfect for hotels, resorts, spas, restaurants, and vacation rentals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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

export default SolutionSection
