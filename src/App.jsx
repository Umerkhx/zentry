import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Navbar from './component/Navbar'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
    </main>

    </>
  )
}

export default App
