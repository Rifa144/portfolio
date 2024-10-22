import transition from "../transition";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import aboutImage from '../assets/aboutHeader.jpg'
import './About.css';
import './Home.css';
import Word from "./Word"


const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui voluptatibus rerum? Sunt consequatur inventore assumenda, molestiae pariatur eos illum sed odio nobis aliquid quam consequuntur, at tempore distinctio? Odit atque hic incidunt quisquam alias vel fugiat harum nesciunt nulla, sit ducimus ipsa perspiciatis provident odio culpa corrupti, doloremque pariatur?"


function About({ textEnter, textLeave }) {
    const [role, setRole] = useState('Developer'); // Added state for role text
  const [animate, setAnimate] = useState(false); // Added state for animation control
  const [inView, setInView] = useState(false); // State to control fadeIn effect
  const headerRef = useRef(null); // Ref to attach IntersectionObserver

  useEffect(() => {
    const roles = ['Developer', 'Designer']; // Alternating roles
    let currentIndex = 0;

    const interval = setInterval(() => {
      setAnimate(true); // Trigger drop animation
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % roles.length; // Cycle through roles
        setRole(roles[currentIndex]); // Set new role
        setAnimate(false); // Reset animation after text change
      }, 500); // Wait for the drop animation to finish
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <>
    <div
      className={`content ${inView ? 'fadeIn' : ''}`} // Apply fadeIn class based on visibility
      ref={headerRef}
      
    >
      <div className="myImg" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <img src={aboutImage} alt="Header" />
      </div>

      <div className="myInfo" onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <p className="greet">I AM A</p>
        <div className="roleWrapper">
          <span className="roleText">Web</span>
          <span className={`role ${animate ? 'drop' : ''}`} >{role}</span>
        </div>
        <p className="shortIntro" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugiat placeat odio et doloremque rem optio asperiores? Debitis eum maxime, itaque assumenda voluptas mollitia illum, quae asperiores voluptatum accusantium iure libero deserunt porro numquam nemo, nam veniam. Quis, culpa. Itaque dignissimos tempore, blanditiis adipisci distinctio eaque excepturi. Deserunt, fugit modi.
        </p>
        <button >CONNECT</button>
      </div>
      
    </div>
      <Word value={paragraph}/>
      
      </>
  );
}

export default transition(About);