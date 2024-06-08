import { useGSAP } from '@gsap/react';
import './App.css';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { useRef } from 'react'; // Import useRef
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Head = ({ cardOneRef, cardTwoRef, cardThreeRef }) => {
  const gsapref = useRef(); // Define gsapref
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        markers: true,
        top: "38% 50%",
        end: "100%",
        scrub: 2,
        pin: true,
      },
    });

    // Use gsapref.current to access the DOM element
    tl.to(gsapref.current, {
      x: 200,
      opacity: 2,
    });
    tl.to(cardOneRef.current,
      {
          x:200,
          opacity:0,
          
      });

      tl.to(cardTwoRef.current,
        {
          x:-200,
          opacity:0,
          delay:2,
          duration:1
        }
      )
      tl.to(cardThreeRef.current,
        {
          x:-200,
          opacity:0,
          delay:2,
          duration:1
        }
      )

  });

  return (
    <>
      <div className="main h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col gap-2 items-center rounded-3xl justify-center p-8">
          <div className="text-img">
            <img className="" src="/animation/public/Blue Modern G Letter Technology Logo Design (4).png"></img>
          </div>
          <h1 ref={gsapref} className="h1 text-white h-full w-36 items-center">
            Create new feature at Gravity Coding
          </h1>
          <p className="p h-7 text-white text-sm">
            Subscribe our channel for the latest features of awkward website. Check out other videos for learning web
            development with great UI design and animation-based content.
          </p>
        </div>
      </div>
    </>
  );
};

Head.propTypes = {
  cardOneRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  cardTwoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  cardThreeRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  classNames: PropTypes.string.isRequired,
};

export default Head;
