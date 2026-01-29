import { Routes, Route } from 'react-router-dom'
import SEO from './components/SEO'
import HeroSection from './components/HeroSection'
import ProblemStatementSection from './components/ProblemStatementSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import TrustSection from './components/TrustSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

const HOME_TITLE = 'Schedulze - Hotel Booking Management System | Resort & Hospitality Software'
const HOME_DESCRIPTION = 'Streamline your hotel, resort, or hospitality business with Schedulze. Manage bookings, guests, and operations effortlessly. Prevent double bookings, automate check-ins, and boost revenue with our all-in-one booking management platform.'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
            <SEO title={HOME_TITLE} description={HOME_DESCRIPTION} path="/" />
            <HeroSection />
            <ProblemStatementSection />
            <KeyFeaturesSection />
            <HowItWorksSection />
            <WhoItsForSection />
            <TrustSection />
            <CTASection />
            <Footer />
          </div>
        }
      />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  )
}

export default App
