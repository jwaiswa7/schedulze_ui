function ProblemStatementSection() {
  const problems = [
    {
      icon: "📋",
      title: "Spreadsheet Chaos",
      description: "Juggling multiple spreadsheets leads to errors, double bookings, and lost revenue."
    },
    {
      icon: "⏰",
      title: "Time-Consuming Tasks",
      description: "Manual check-ins, status updates, and guest management eat up valuable staff time."
    },
    {
      icon: "📊",
      title: "Lack of Insights",
      description: "No clear view of occupancy, revenue, or booking trends to make informed decisions."
    }
  ]

  return (
    <section className="bg-white py-16" aria-label="Common booking management problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tired of Managing Hotel Bookings Manually?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Running a hotel, resort, or hospitality business shouldn't mean drowning in spreadsheets, missed reservations, or double-booked rooms. Traditional booking management methods are inefficient. You need a modern hotel reservation system that works as hard as you do.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemStatementSection
