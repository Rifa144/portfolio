import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';



function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  // Track mouse movement across the whole website
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const location = useLocation();

  // Define animation variants for the cursor
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  // Event handlers to change cursor state when hovering over text
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <NavBar textEnter={textEnter} textLeave={textLeave} />
      
      {/* Custom cursor that follows the mouse */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />

      {/* Main content with page transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home textEnter={textEnter} textLeave={textLeave} />} />
          <Route path='/about' element={<About textEnter={textEnter} textLeave={textLeave} />} />
          <Route path='/contact' element={<Contact textEnter={textEnter} textLeave={textLeave} />} />
          <Route path='/projects' element={<Projects textEnter={textEnter} textLeave={textLeave} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
