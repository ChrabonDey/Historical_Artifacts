import React, { useState } from "react";
import Animation from "../assets/lottie/Animation - 1735145595427.json";
import Animation1 from "../assets/lottie/Animation - 1735146904270.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HistoryTrackerSections = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  return (
    <div>
  
      <section id="about" className="text-black py-16">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 items-center gap-12">
          
          <div>
            <h2 className="text-4xl font-bold mb-4">About Historical Tracker</h2>
            <p className="text-lg leading-relaxed mb-6">
              Historical Tracker is your gateway to uncovering ancient artifacts
              and understanding the stories they carry. From lost relics to
              timeless treasures, our platform connects enthusiasts to the rich
              history of the world.
            </p>
            <button
              className="btn btn-outline btn-accent"
              onClick={() =>
                openModal(
                  "Historical Tracker is your gateway to uncovering ancient artifacts and understanding the stories they carry. From lost relics to timeless treasures, our platform connects enthusiasts to the rich history of the world."
                )
              }
            >
              Learn More
            </button>
          </div>

          
          <div className="relative">
            <div className="relative">
              
              <Lottie animationData={Animation} loop={true} className="max-w-md mx-auto" />
              <h3 className="text-2xl font-bold text-center mt-6">
                Discover Timeless Treasures
              </h3>
            </div>
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">
                  🌍
                </div>
                <p className="mt-2">Connecting history to people</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">
                  🏺
                </div>
                <p className="mt-2">Exploring ancient artifacts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="text-black py-24">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="relative">
            <Lottie animationData={Animation1} loop={true} className="max-w-md mx-auto" />
            <h3 className="text-2xl font-bold text-center mt-6">
              Preserving the Past
            </h3>
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">
                  📜
                </div>
                <p className="mt-2">Historical documentation</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">
                  ⚒️
                </div>
                <p className="mt-2">Artifact restoration</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to preserve history by documenting and restoring
              artifacts while making them accessible to everyone. We aim to
              bring the stories of the past to life for the future.
            </p>
            <button
              className="btn btn-outline btn-accent"
              onClick={() =>
                openModal(
                  "Our mission is to preserve history by documenting and restoring artifacts while making them accessible to everyone. We aim to bring the stories of the past to life for the future."
                )
              }
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full text-black">
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <p className="text-lg mb-6">{modalContent}</p>
            <button className="btn btn-accent" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* See All Button */}
      <div className="text-center mt-12">
        <Link to="/all-artifacts">
          <button className="btn btn-primary">
            See All Artifacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryTrackerSections;
