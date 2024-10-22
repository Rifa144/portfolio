import transition from "../transition";
import headerImg from "../assets/hd.jpg";
import './Home.css';
import gsap from 'gsap';
import {useEffect, useRef} from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Word from "./Word"
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "./SkillCard";
import reactImg from '../assets/atom.png';
import next from '../assets/next.png';
import node from '../assets/developer.png';
import angular from '../assets/html.png';
import net from '../assets/internet.png';
import js from '../assets/java-script.png';
import mongo from '../assets/mongo.png';
import mysql from '../assets/mysql.png';
import vue from '../assets/vuejs.png';



function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;


  useEffect( () =>{
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start:0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-=300px",
      
    })
  }, [])

  const animation = () => {
    if(xPercent <= -100){
      xPercent=0;
    }
    if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Trigger point from the viewport
    });
  }, []);

  return (
    <div>
        <div className="header">
          <img src= {headerImg} alt=""></img>
          <div className="myIntroContainer">
          <div className="myIntro" ref={slider}>
            <p className="myName" ref={firstText}> Web Developer - </p>
            <p className="myName" ref={secondText}> Web Developer - </p>
          </div>
          </div>
        </div>
        <div className="skills">
          

        <SkillCard img={angular}/>
        <SkillCard img={js}/>
        <SkillCard img={reactImg}/>
        <SkillCard img={next}/>
        <SkillCard img={mongo}/>
        <SkillCard img={mysql}/>
        <SkillCard img={vue}/>
        
        </div>

        {/* <Paragraph value={paragraph}/> */}
      
    </div>
  )
}

export default transition(Home);