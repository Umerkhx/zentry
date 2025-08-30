import './App.css'
import About from './component/About'
import Feature from './component/Feature'
import Hero from './component/Hero'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Feature/>
    </main>

    </>
  )
}

export default App
