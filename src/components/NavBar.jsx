import { Link } from "react-router-dom";
import './NavBar.css'
import {useEffect} from "react"
import { gsap } from "gsap";



function NavBar() {
    useEffect(() => {
        // Initialize GSAP animation when component mounts
        const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power2.out" } });
        
        // Delay animation start using setTimeout
        setTimeout(() => {
          tl.fromTo(
            ".logo",
            { 
              y: "50vh", // Start position
              scale: 5,
              opacity: 1
            },
            { 
              y: "calc(80px + 1em)", // Final position: just below the navbar
              scale: 1,
              opacity: 1,
              delay: 0.5,
            }
          );
        }, 1000); // Delay in milliseconds
    
      }, []);
  return (
    <>
    <div className="nav">
      <div className="navLeft">
      <Link className="nav-link" to="/">
                  Home
              </Link>
        <Link className="nav-link" to="/about">
              About
              </Link>
      </div>
      <div className="navRight">
      <Link className="nav-link" to="/projects">
              Projects
              </Link>
        <Link className="nav-link" to="/contact">
              Contact
              </Link>
      </div>
    </div>
    <div className="logoContainer">
      <h1 className="logo">Rifa Prasla</h1>
    </div>
    <div className="container">
      
    </div>
  </>
    
  )
}

export default NavBar;

