
import HeroSection from './components/HeroSection'
import ProblemStatementSection from './components/ProblemStatementSection'
import SolutionSection from './components/SolutionSection'
import BenefitsSection from './components/BenefitsSection'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeroSection />
      <ProblemStatementSection />
      <SolutionSection />
      <BenefitsSection />
      <CTASection />
    </div>
  )
}

export default App
