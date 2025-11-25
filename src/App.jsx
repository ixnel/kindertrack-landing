import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Programs />
        <Features />
 
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
