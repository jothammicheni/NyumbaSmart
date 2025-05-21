import type React from "react"
import Hero from "../components/Hero"
import CTASection from "../components/CTASection"
import LoginProcedureSection from "../components/LoginProcedureSection"
import Testimonials from "../components/Testimonials"

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CTASection />
      <LoginProcedureSection />
      <Testimonials />
    </>
  )
}

export default HomePage
