import React, { useState } from "react";
import Animation from "../assets/lottie/Animation - 1735145595427.json";
import Animation1 from "../assets/lottie/Animation - 1735146904270.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

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
    <div className="text-white dm-serif-text-regular ">
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-5xl font-bold mb-7 opacity-70 text-start">
              About Historical Tracker
            </h2>
            <p className="text-lg font-light text-white text-opacity-40 mb-4 leading-relaxed text-start">
              Historical Tracker is your gateway to uncovering ancient artifacts
              and understanding the stories they carry. From lost relics to
              timeless treasures, our platform connects enthusiasts to the rich
              history of the world. Here are some historic places that are very
              important for our Earth.
            </p>
            <div className="flex justify-start">
              <button
                className="btn bg-transparent text-white border-2 border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all"
                onClick={() =>
                  openModal(
                    "Historical Tracker is your gateway to uncovering ancient artifacts and understanding the stories they carry. From lost relics to timeless treasures, our platform connects enthusiasts to the rich history of the world."
                  )
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <Lottie animationData={Animation} loop={true} className="max-w-md mx-auto" />
            <h3 className="text-2xl font-bold text-center mt-6 opacity-70">
              Discover Timeless Treasures
            </h3>
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">🌍</div>
                <p className="mt-2 text-xl opacity-70">Connecting history to people</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">🏺</div>
                <p className="mt-2 text-xl opacity-70">Exploring ancient artifacts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 items-center gap-12">
          <div className="relative">
            <Lottie animationData={Animation1} loop={true} className="max-w-md mx-auto" />
            <h3 className="text-2xl font-bold text-center mt-6 opacity-70">
              Preserving the Past
            </h3>
            <div className="flex justify-around mt-6">
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">📜</div>
                <p className="mt-2 text-xl opacity-70">Historical documentation</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-3 w-12 h-12 mx-auto">⚒️</div>
                <p className="mt-2 text-xl opacity-70">Artifact restoration</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-7 opacity-70 text-start">
              Our Mission
            </h2>
            <p className="text-lg font-light text-white text-opacity-40 leading-relaxed mb-4 text-start">
              Our mission is to preserve history by documenting and restoring
              artifacts while making them accessible to everyone. We aim to
              bring the stories of the past to life for the future.
            </p>
            <div className="flex justify-start">
              <button
                className="btn bg-transparent text-white border-2 border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all"
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
        </div>
      </section>

     

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full text-black">
            <h2 className="text-2xl font-bold mb-4">Learn More</h2>
            <p className="text-xl mb-6">{modalContent}</p>
            <button className="btn bg-yellow-500 text-white rounded-lg px-6 py-2" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

     <div className="py-16">
     <Contact></Contact>
     </div>

      {/* See All Artifacts Button */}
      <div className="text-center mt-12">
        <Link to="/all-artifacts">
          <button className="btn bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all">
            See All Artifacts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HistoryTrackerSections;
