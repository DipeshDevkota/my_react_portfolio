import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from 'three';
import ModelView from "./ModelView";
import { yellowImg, blackImg } from "../utils"; // Ensure correct path
import { sizes } from "../constants/index";

const Model = () => {
  const [size, setSize] = useState('small');
  const [modelIndex, setModelIndex] = useState(0);

  const models = [
    {
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ["#8F8A81", '#FFE7B9', '#6F6C64'],
      img: yellowImg,
    },
    {
      title: 'iPhone 15 Pro in Black Titanium',
      color: ["#000000", '#FFFFFF', '#333333'],
      img: blackImg,
    },
    {
      title: 'iPhone 15 Pro in Natural Titanium',
      color: ["#8F8A81", '#FFE7B9', '#6F6C64'],
      img: yellowImg,
    },
    {
      title: 'iPhone 15 Pro in Black Titanium',
      color: ["#000000", '#FFFFFF', '#333333'],
      img: blackImg,
    },
    // Add more models as needed
  ];

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const handleModelChange = (index) => {
    setModelIndex(index);
  };

  // Example GSAP animation
  const animateHeading = () => {
    gsap.to("#heading", {
      opacity: 1,
      x: 200,
      delay: 0.2,
      duration: 1,
    });
  };

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <h1 id="heading" className='section-heading'>
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={models[modelIndex]}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={models[modelIndex]}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden'
              }}
              eventSource={document.getElementById('root')}
            >
              <View track={cameraControlSmall} index={1}>
                {/* Add your 3D content for the small view */}
              </View>
              <View track={cameraControlLarge} index={2}>
                {/* Add your 3D content for the large view */}
              </View>
            </Canvas>
          </div>
          <div className="mx-auto w-full ">
            <p className="text-sm font-light text-center mb-5">{models[modelIndex].title}</p>

            <div className="flex justify-center">
              <ul className="color-container flex">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="w-10 h-10 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => handleModelChange(index)}
                  />
                ))}
              </ul>
            </div>

            <div className="flex justify-center mt-3"> {/* New parent div for alignment */}
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white'
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
