import React from "react";
import image1 from '../assets/Historical Artifacts Tracker (1).jpg';
import image2 from '../assets/Historical Artifacts Tracker moskot (1).jpg';
import image3 from '../assets/Historical Artifacts Tracker moskot (2).jpg';

const Banner = () => {
  return (
    <div className="carousel w-full max-w-screen-xl mx-auto my-6 rounded-lg shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} alt="Explore Ancient Artifacts" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-40">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Ancient Artifacts
            </h2>
            <p className="text-lg">
              Dive into the rich history of ancient civilizations through our curated collection of artifacts.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-white text-black">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-white text-black">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} alt="Preserve History" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-40">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Preserve History
            </h2>
            <p className="text-lg">
              Learn about the importance of preserving artifacts for future generations.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-white text-black">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-white text-black">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} alt="Uncover Hidden Treasures" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-40">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Uncover Hidden Treasures
            </h2>
            <p className="text-lg">
              Discover the stories behind historical artifacts from across the world.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-white text-black">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-white text-black">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
