import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-white">
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
