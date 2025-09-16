import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Feature from './component/Feature'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Story from './component/Story'

function App() {

  return (
    <>
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Feature/>
      <Story/>
      <Contact/>
    </main>

    </>
  )
}

export default App
