// import { useGSAP } from '@gsap/react';
import './App.css';
import Head from './Head';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const cardOneRef = useRef();
  const cardTwoRef = useRef();
  const cardThreeRef = useRef(); // Removed the extra comma here

  return (
    <>
      <div className="main-2 relative h-screen flex flex-wrap gap-4 bg-black">
        <div ref={cardOneRef} className="card-one div-1 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cover bg-center">
          <img src="/ONE.png" alt="Card Image 1" className="h-full w-full object-cover rounded-xl top-full custom-top-130" />
        </div>
        <div ref={cardTwoRef} className="card-two absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cover bg-center">
          <img src="/two.png" alt="Card Image 2" className="h-full w-full object-cover rounded-xl top-230 " />
        </div>
        <div ref={cardThreeRef} className="card-three absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cover bg-center">
          <img src="/three.png" alt="Card Image 3" className="h-full w-full object-cover rounded-xl top-250" />
        </div>
      </div>

      <Head 
        cardOneRef={cardOneRef} 
        cardTwoRef={cardTwoRef} 
        cardThreeRef={cardThreeRef} 
        classNames="card-one card-two card-three" 
      />
    </>
  );
};

export default Landing;
