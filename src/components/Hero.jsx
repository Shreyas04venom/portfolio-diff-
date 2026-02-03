import { motion } from "framer-motion";
import { useEffect } from "react"; // Import useEffect to load scripts on component mount
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {

  // Use useEffect to load the Typed.js script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.async = true;
    script.onload = () => {
      const typed = new Typed('.text', {
        strings: ['Front-Developer', 'Web-Designer', 'Youtuber'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        startDelay: 1000,
        loop: true,
        showCursor: false,  // Ensure the cursor is visible
        preStringTyped: () => {
          // Ensure that the newly typed text is colored
          const typedElement = document.querySelector('.typed-cursor');
          if (typedElement) {
            typedElement.style.color = '#915EFF'; // Change the color of the cursor to match the text
          }
        },
        onStringTyped: () => {
          // Make sure only one cursor is visible and has correct styling
          const typedElement = document.querySelector('.typed-cursor');
          if (typedElement) {
            typedElement.style.animation = 'blink 0.75s step-end infinite';  // Ensure proper blinking
          }
        },
      });
    };
    document.head.appendChild(script);

    // Cleanup the script after the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shreyas</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I want to be <span className="text-[#915EFF] text"></span> {/* This will show the typed text */}
          </p>
          <div className="btn-box">
            <a href="#">Hire Me</a>
            <a href="#contact">Let's Talk</a> {/* Updated to link to the contact section */}
          </div>
          <div className="home-sci flex gap-6 mt-3 text-5xl text-white">
            <a href="https://www.instagram.com/shreyasmahajan844/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram'></i>
            </a>
            <a href="https://wa.me/7507075722" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-whatsapp'></i>
            </a>
            <a href="https://www.linkedin.com/in/shreyas-mahajan07/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin-square'></i>
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Export your variables (currently unused in this code, so make sure to define them if needed)
export const services = ['Web Development', 'UI/UX Design', 'SEO Optimization'];
export const technologies = ['React', 'Node.js', 'CSS', 'JavaScript'];
export const experiences = ['3 years in Web Development', '2 years in UI/UX Design'];
export const testimonials = ['"Great Developer!" - Client A', '"Highly Recommend!" - Client B'];
export const projects = ['Project 1', 'Project 2', 'Project 3'];

export default Hero;