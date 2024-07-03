// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap

const Myself = () => {
  // useEffect(() => {
  //   // Register ScrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger);

  //   // GSAP timeline for the animation
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".about",
  //       start: "top 50%", // Start the animation when .about is 50% in view
  //       end: "top -10%", // End the animation when .about is 10% above the top
  //       scrub: true, // Enables smooth scrubbing effect
  //     }
  //   });

  //   // Animation sequence
  //   tl.from(".about", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     ease: "power2.out",
  //   });

  // }, []);
   // Ensure useEffect runs only once on component mount

  return (
    <div className="about bg-black flex justify-between items-center p-6">
      <div className="aboutphoto ml-40">
        <img
          src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[40vh] w-[20vw] border-2 -rotate-12 hover:rotate-0 duration-150 ease-linear mb-4 border-cyan-600 rounded-xl bg-cover"
          alt="Profile"
        />
      </div>
      <div className="aboutsecond w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4 md:px-6 lg:px-8 lg:mr-24">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
          About <span className="text-sky-500">Me</span>
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
          I am a passionate MERN STACK fresher with decent knowledge in Tailwind, GSAP, JavaScript, Redux Toolkit, ReactJS, MongoDB, NodeJS, and ExpressJS. I am looking forward to working on good products by solving problems and creating user-friendly experiences. All my personal and academic details are available on my CV down below. You can check it out.
        </p>
        <button className="text-white bg-sky-700 hover:bg-sky-950 duration-150 ease-linear p-2 sm:p-3 md:p-4 lg:p-[1vw] rounded-3xl">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Myself;
