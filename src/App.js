import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <NavMenu />

        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="#about" element={<About />} />
          <Route path="#projects" element={<Projects />} />
          <Route path="#contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
