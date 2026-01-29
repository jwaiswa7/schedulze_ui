import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            ← Back to Schedulze
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-12">Last updated: January 29, 2026</p>

        <div className="space-y-10 text-gray-600">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Acceptance
            </h2>
            <p className="text-lg">
              By using Schedulze (“the Service”), you agree to these terms. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Service
            </h2>
            <p className="mb-4">
              Schedulze is a booking and billing platform for hospitality businesses. We provide tools to manage bookings, reservations, and invoices. We may update or change the Service over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Your Account
            </h2>
            <p className="mb-4">
              You are responsible for keeping your account credentials secure and for all activity under your account. You must provide accurate information and update it when it changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Acceptable Use
            </h2>
            <p className="mb-4">You agree to use the Service only for lawful purposes. You must not:</p>
            <ul className="space-y-2 mb-4">
              {[
                'Use the Service in any way that breaks applicable laws',
                'Attempt to gain unauthorized access to the Service or others’ accounts',
                'Interfere with or disrupt the Service or its infrastructure',
                'Use the Service to send spam or harmful content',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>We may suspend or terminate your access if you breach these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p>
              The Service, including its design, branding, and content, is owned by Techitenge Limited (or its licensors). You may not copy, modify, or use our branding or materials without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h2>
            <p>
              The Service is provided “as is.” We do not guarantee that it will be error-free, uninterrupted, or fit for every purpose. You use it at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service, including loss of data or business. Our total liability is limited to the amount you paid us in the twelve months before the claim (or a reasonable amount if no fees applied).
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. We will post the new version on this page and update the “Last updated” date. Continued use of the Service after changes means you accept the updated terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Uganda. Any disputes will be resolved in the courts of Uganda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Contact
            </h2>
            <p className="mb-4">
              Questions about these terms? Contact us:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Email: <a href="mailto:joshua.waiswa@schedulze.com" className="text-blue-600 hover:text-blue-700 underline">joshua.waiswa@schedulze.com</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Phone: <a href="tel:+256771806549" className="text-blue-600 hover:text-blue-700 underline">+256771806549</a></span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TermsAndConditions
