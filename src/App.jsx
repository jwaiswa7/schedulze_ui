import HeroSection from './components/HeroSection'
import ProblemStatementSection from './components/ProblemStatementSection'
import KeyFeaturesSection from './components/KeyFeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import TrustSection from './components/TrustSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
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
  )
}

export default App
