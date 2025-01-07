import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import image1 from "../assets/Historical Artifacts Tracker (1).jpg";
import image2 from "../assets/Historical Artifacts Tracker moskot (1).jpg";
import image3 from "../assets/Historical Artifacts Tracker moskot (2).jpg";

const Banner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto my-8 px-4">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-lg p-6 bg-transparent">
            <div className="w-full lg:w-1/2 text-center lg:text-left dm-serif-text-regular">
              <h2 className="text-5xl font-light mb-3 text-white text-opacity-80">
                Embark on a Journey to Explore
                <span>
                  <img
                    src={image2}
                    alt=""
                    className="h-11 rounded-full inline-block"
                  />
                </span>
                <span> Ancient Wonders</span>
              </h2>
              <p className="text-lg font-light text-white text-opacity-40 leading-relaxed">
                Unlock the secrets of the past and delve into the fascinating
                world of ancient artifacts that tell tales of lost civilizations.
                Discover how these relics have shaped our understanding of human
                history and continue to inspire curiosity and awe.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
              <div className="relative top-10 left-10">
                <img
                  src={image3}
                  alt="Explore Ancient Artifacts"
                  className="w-36 h-56 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
              <div>
                <img
                  src={image1}
                  alt="Explore Ancient Artifacts"
                  className="w-60 h-96 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-lg p-6 bg-transparent">
            <div className="w-full lg:w-1/2 text-center lg:text-left dm-serif-text-regular">
              <h2 className="text-5xl font-light mb-3 text-white text-opacity-80">
                Preserve the Legacy of
                <span>
                  <img
                    src={image1}
                    alt=""
                    className="h-11 rounded-full inline-block"
                  />
                </span>
                <span> History</span>
              </h2>
              <p className="text-lg font-light text-white text-opacity-40 leading-relaxed">
                Gain insights into the importance of safeguarding historical
                treasures, ensuring their stories endure for generations. These
                artifacts serve as a bridge connecting us to our ancestors,
                providing valuable lessons and perspectives.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
              <div className="relative top-10 left-10">
                <img
                  src={image2}
                  alt="Preserve History"
                  className="w-36 h-56 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
              <div>
                <img
                  src={image3}
                  alt="Preserve History"
                  className="w-60 h-96 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center bg-base-100 shadow-xl rounded-lg p-6 bg-transparent">
            <div className="w-full lg:w-1/2 text-center lg:text-left dm-serif-text-regular">
              <h2 className="text-5xl font-light mb-3 text-white text-opacity-80">
                Uncover the Hidden
                <span>
                  <img
                    src={image3}
                    alt=""
                    className="h-11 rounded-full inline-block"
                  />
                </span>
                <span> Treasures</span>
              </h2>
              <p className="text-lg font-light text-white text-opacity-40 leading-relaxed">
                Embark on an exciting quest to uncover hidden stories and
                mysteries surrounding historical artifacts from around the world.
                These treasures not only captivate with their beauty 
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
              <div className="relative top-10 left-10">
                <img
                  src={image1}
                  alt="Uncover Treasures"
                  className="w-36 h-56 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
              <div>
                <img
                  src={image2}
                  alt="Uncover Treasures"
                  className="w-60 h-96 object-cover rounded-full border-l-2 pl-2 border-[#575B62]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
