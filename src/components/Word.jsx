import {useRef} from 'react';
import { useScroll , motion } from 'framer-motion';
import { useTransform } from 'framer-motion';
import './Home.css'


function Paragraph ({value}) {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target:element,
        offset: ['start 0.9','start 0.25']
    })

    const words = value.split(" ");

  return (
    <p className = "paragraph" ref ={element} >
        {words.map((word, i) =>{
            const start = i/words.length;
            const end = start + (1/words.length)
            return  <Word key = {i} range = {[start, end]} progress = {scrollYProgress}>{word}</Word>
        } )}
    
    </p>
  )
}

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0,1])
    return(
        <span className="word">
            <span className='shadow'>{children}</span>
        <motion.span className='word' style={{opacity: opacity}}>
            {children}
        </motion.span>
        </span>
    )
}

export default Paragraph;