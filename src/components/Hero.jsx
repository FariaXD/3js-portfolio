import React, {useState, useEffect, useRef} from 'react'
import {motion} from "framer-motion"
import {styles} from "../styles"
import { BlackholeCanvas, StarsCanvas } from './canvas'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(false)
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <section className='relative w-full h-screen mx-auto'>
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gold'/>
          <div className='w-1 sm:h-80 h-40 gold-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-gold'>André</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden'/> interfaces and web applications
          </p>
        </div>
      </div>
      {!isMobile && 
        <BlackholeCanvas setActive={setActive} active={active}/>
      }
      <div className='absolute w-full xs:bottom-10 bottom-32 flex flex-col justify-center items-center'>
        <div className="arrow arrowSliding delay2" onClick={() => {setActive(true);console.log("active");}}></div>
        <div className="arrow arrowSliding delay1" onClick={() => {setActive(true);console.log("active");}}></div>
      </div>
    </section>
  )
}
export default Hero