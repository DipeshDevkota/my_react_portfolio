import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from './About.jsx'
// import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
const Navbar = () => {
  // Create a GSAP timeline instance
  const tl = gsap.timeline();

  // Use useGSAP hook to manage animations
  useGSAP(() => {
    // Animation for .nav elements
    tl.from(".nav", {
      y: -30,
      opacity: 0,
      stagger: 0.3,
      duration: 0.6,
      delay: 0.2,

    });
    tl.from(".nav-1",{
    y:-30,
    duration:1,
    delay:0.1,
    opacity:0,
    })
    tl.from("#about",{
      stagger:0.5,
    })

    // Animation for .nav-2 elements
    tl.from(".nav-2", {
      opacity: 0,
      y: 20,
      stagger: 0.4,
      duration: 1,
      delay: 0.3,

    });
 

    // Example of using ScrollTrigger (optional)
    tl.from(".body-1" ,{ // Corrected to use a single string with comma-separated targets
      y: 50,
      opacity:0,
      stagger: 0.2,
      duration: 1,

    });
    tl.from(".body-2", { // Corrected to use a single string with comma-separated targets
      y: 50,
      opacity:0,
      stagger: 0.2,
      duration: 1,
    },"1.7");
    tl.from(".body1, .body2",{
      ease: "power2.out",

    })
    tl.from(".framer",{
      opacity:0,
      delay:1,
      duration:1,
      
    },"2")
  });

  return (
    <>
    <div className="bg-customnone h-screen w-full">
      <div className="nav h-16 px-2 sm:px-4 lg:px-6 bg-customBlue flex justify-between items-center">
        <div className="nav-1">
          <img src='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="h-20 mt-2 object-cover p-2 mb-4" alt="navphoto"  />
        </div>
        <div className="nav-2 flex gap-4 lg:gap-10 p-2 xl:mr-32  mr-2 mt-4">
          <h1 className="text-white text-sm">Project</h1>
          <h1 className="text-white">Skills</h1>
          <h1 className="text-white">Contact</h1>
        </div>
      </div>


      <div className="body w-full px-4 sm:px-3 lg:ml-5 lg:px-8 flex flex-col sm:flex-row justify-between lg:mt-10 mt-7">
        <div className="body-1 p-2 text-white lg:mt-10 flex flex-col">
          <h1 className=" text-2xl font-bold mb-4 lg:text-5xl" id="about">
            Its Me <span className="text-blue">Dipesh Devkota</span>
          </h1>
          <h1 className="text-2xl font-bold mb-4">MERN STACK  DEVELOPER</h1>
          <p className="text-base max-w-96">
            I`m a passionate Web Developer with expertise in building modern and user-friendly web applications.
          </p>
        </div>
        <div className="body-2 p-2">
          {/* <video src="/video2.mp4" className="h-96 lg:ml-44 mb-4 w-auto border-black rounded-md shadow-md  mr-36" autoPlay loop muted></video> */}
          <img src="https://cdn.pixabay.com/photo/2023/12/22/10/01/ai-generated-8463497_1280.jpg" className='h-96 lg:ml-44 mb-4 w-auto border-black rounded-md shadow-md  mr-36'></img>
        </div>
      </div>

      <div className='framer xs:bottom-10 bottom-32 w-full flex justify-center items-center  lg:mt-4'>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.dev
             animate={{
              y:[0,24,0]
             }}
             transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
             }}
             className="w-3 h-3 rounded-full bg-white mb-1"
            
            />
          </div>
        </a>
      </div>
    </div>
   
    
    <About/>
    </>
  );
};

export default Navbar;
