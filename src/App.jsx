
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simplify Your
            <span className="text-slate-600"> Booking Management</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            The all-in-one platform for hotels, resorts, and hospitality businesses to manage bookings, guests, and operations effortlessly.
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Streamline your workflow, reduce manual errors, and focus on delivering exceptional guest experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a 
              href="https://app.schedulze.com/" 
              className="inline-block bg-slate-300 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-400 transition-colors shadow-lg hover:shadow-xl"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tired of Managing Bookings Manually?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Running a hotel, resort, or hospitality business shouldn't mean drowning in spreadsheets, missed bookings, or double-booked rooms. You need a system that works as hard as you do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spreadsheet Chaos</h3>
              <p className="text-gray-600">Juggling multiple spreadsheets leads to errors, double bookings, and lost revenue.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Time-Consuming Tasks</h3>
              <p className="text-gray-600">Manual check-ins, status updates, and guest management eat up valuable staff time.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-red-50 border border-red-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lack of Insights</h3>
              <p className="text-gray-600">No clear view of occupancy, revenue, or booking trends to make informed decisions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Complete Booking Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage bookings, guests, and operations in one intuitive platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Centralized Booking Calendar</h3>
              <p className="text-gray-600">View all bookings at a glance with an intuitive calendar interface. Track arrivals, departures, and occupancy in real-time.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guest Management</h3>
              <p className="text-gray-600">Maintain comprehensive guest profiles, booking history, and preferences. Quick check-in and check-out processes.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Department Support</h3>
              <p className="text-gray-600">Manage rooms, restaurants, spa services, and activities all from one platform. Perfect for hotels and resorts.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Summaries</h3>
              <p className="text-gray-600">Get instant insights on arrivals, departures, new bookings, occupied rooms, and cancellations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevent Double Bookings</h3>
              <p className="text-gray-600">Automated overlap detection ensures you never double-book a room or service. Peace of mind built-in.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">Manage staff access and roles. Multiple team members can work together seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-300 text-white text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Save Time & Reduce Errors</h3>
                    <p className="text-gray-600 mt-1">Automate routine tasks and eliminate manual data entry mistakes. Your staff can focus on guest service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-300 text-white text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Increase Revenue</h3>
                    <p className="text-gray-600 mt-1">Better visibility into occupancy and availability helps maximize bookings and optimize pricing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-300 text-white text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Improve Guest Experience</h3>
                    <p className="text-gray-600 mt-1">Faster check-ins, accurate bookings, and organized operations lead to happier guests and better reviews.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-300 text-white text-xl font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Scalable & Flexible</h3>
                    <p className="text-gray-600 mt-1">Whether you run a small B&B or a large resort, our platform grows with your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For:</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">🏨</span>
                  Hotels & Resorts
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">🏖️</span>
                  Vacation Rentals
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">🍽️</span>
                  Restaurants & Event Venues
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">💆</span>
                  Spas & Wellness Centers
                </li>
                <li className="flex items-center text-lg text-gray-700">
                  <span className="text-slate-600 mr-3 text-xl">🎯</span>
                  Activity & Experience Providers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Booking Management?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Join hotels and hospitality businesses that have streamlined their operations and improved their guest experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://app.schedulze.com/" 
                  className="inline-block bg-white text-slate-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                >
                  Login to Account
                </a>
              </div>
            </div>
            <div className="md:col-span-1 text-center md:text-left">
              <div className="space-y-4 text-white">
                <div>
                  <p className="text-slate-200">Email</p>
                  <a 
                    href="mailto:joshua.waiswa@schedulze.com" 
                    className="text-slate-200 hover:text-white transition-colors"
                  >
                    joshua.waiswa@schedulze.com
                  </a>
                </div>
                <div>
                  <p className="text-slate-200">Phone</p>
                  <a 
                    href="tel:+256771806549" 
                    className="text-slate-200 hover:text-white transition-colors"
                  >
                    +256771806549
                  </a>
                </div>
                <div>
                  <p className="text-slate-200">Company Registration</p>
                  <p className="text-slate-200">80034152166044 (Uganda)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
