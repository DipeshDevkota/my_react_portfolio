import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils';
import Video from './Video.jsx';

const Highlights = () => {
    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            delay: 1,
            y: 0,
            stagger: {
                each: 0.1, // Time between each staggered animation
                markers: true, // Add markers for better debugging
                start: "top 50%", // Start staggering when element is at top 50% of the viewport
                end: "bottom 50%", // End staggering when element is at bottom 50% of the viewport
                color: "red" // Not a valid property for stagger, assuming this was a mistake
            }
        });
        gsap.to(".link",
            {
                opacity:1,
                y:0,
                delay:1,
                stagger:0.2,

            }
        )
    }, []);
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
       

      <div className='screen-max-width'>
          <div className='mb-12 w-full items-end justify-between md-flex'>
            <h1 id="title" className='section-heading'>Get the highlights.</h1>
            <div className='flex flex-wrap items-end  gap-5'>
                <p className='link ml-2' alt='watch'>Watch the film. <img src={watchImg}/></p>
                <p className='link ml-2' alt='right'>Watch the event.<img src={rightImg}/></p>
            </div>
          </div>

            <Video/>
      </div>

    </section>
  )
}

export default Highlights
