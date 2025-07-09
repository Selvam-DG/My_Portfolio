import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';


import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/My_Portfolio">
      <Navbar/>
      <main className='min-h-screen '>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/skills' element={ <Skills/>} />
          <Route path='/projects' element={ <Projects/>} />
        </Routes>

      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
