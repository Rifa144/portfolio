
import { motion } from 'framer-motion';

function transition(OgComponent){
    return function TransitionComponent(props)
    {
        return (
            <>
              {/* Render the original component with all props */}
              
              {/* Slide-in animation */}
              <motion.div
                className='slide-in'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0}}
                exit={{ scaleY: 0}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'top' }}
              />
      
              <OgComponent {...props} />
              {/* Slide-out animation */}
              <motion.div
                className='slide-out'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'bottom' }}
              />
            </>
          );


    }
}
      

  export default transition;