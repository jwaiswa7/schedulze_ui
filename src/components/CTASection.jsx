function CTASection() {
  return (
    <section className="bg-slate-400 py-16" aria-label="Get started with Schedulze">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Hotel Booking Management?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hotels, resorts, and hospitality businesses worldwide that have streamlined their reservation management, improved guest satisfaction, and increased revenue with Schedulze booking software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://app.schedulze.com/" 
                target="_self"
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
    </section>
  )
}

export default CTASection
