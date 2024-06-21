import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';
import { Navigation } from 'swiper/modules';
import { hightlightsSlides } from '../constants'; // Adjust the import according to your project structure

export default function Video() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {hightlightsSlides.map((list) => (
          <SwiperSlide key={list.id}>
            <div className="video_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden relative">
                <video
                  id="video"
                  playsInline={true}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
                <div className="absolute top-12 left-[5%] z-10">
                  {list.textLists.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
