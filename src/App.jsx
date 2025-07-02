import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import NodeProject from './Pages/NodeProject';
import DjangoProject from './Pages/DjangoProject';
import Skills from './Pages/Skills';


import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <main className='min-h-screen '>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/blog' element={ <Blog/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/skills' element={ <Skills/>} />
          <Route path='/projects/Django' element={ <DjangoProject/>} />
          <Route path='/projects/Nodejs' element={ <NodeProject/>} />
        </Routes>

      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
