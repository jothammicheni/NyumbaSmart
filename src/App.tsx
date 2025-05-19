import { ThemeProvider } from "./components/ThemeProvider"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import CTASection from "./components/CTASection"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <Hero />
        <CTASection />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
