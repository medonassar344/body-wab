import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Media from './components/Media'
import Videos from './components/Videos'
import Contact from './components/Contact'

function App() {
  return (
    <main className="relative selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Media />
      <Videos />
      <Contact />

      <footer className="py-10 border-t border-white/5 text-center bg-[#0a0a0a]">
        <p className="text-gray-500 text-sm tracking-widest font-sporty uppercase">
          &copy; 2026 Abdullah Khaled (Messi). All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}

export default App
