import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import "../App.css";

const Featured = () => {
  const [tracker, setTracker] = useState([]);
  const { user } = useContext(authContext); // Access the logged-in user

  useEffect(() => {
    fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/history${user ? `?email=${user.email}` : ''}`)
      .then((res) => res.json())
      .then((data) => {
        const sortedArtifacts = data.sort((a, b) => b.likeCount - a.likeCount).slice(0, 6);
        setTracker(sortedArtifacts);
      });
  }, [user]);

  const handleLike = (id) => {
    if (!user) {
      alert("Please log in to like an artifact!");
      return;
    }

    fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/artifact/${id}/like`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        setTracker((prevTracker) =>
          prevTracker.map((artifact) =>
            artifact._id === id ? { ...artifact, likeCount: artifact.likeCount + 1 } : artifact
          )
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-5xl text-white font-bold text-center my-14 dm-serif-text-regular opacity-80">Featured Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tracker.map((artifact) => (
          <div
            key={artifact._id}
            className="max-w-sm bg-[#252930] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transition-ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-gray-500/50"
            style={{ height: '400px' }} // Reduced height for card
          >
            <Link to={`/artifact/${artifact._id}`} className="group">
              <img
                className="rounded-t-lg w-full h-36 object-cover transition-all" // Reduced height for the image
                src={artifact.image}
                alt={artifact.name}
              />
            </Link>
            <div className="p-4"> {/* Reduced padding here */}
              <Link to={`/artifact/${artifact._id}`}>
                <h5 className="mb-2 text-2xl font-semibold dm-serif-text-regular text-white opacity-80 hover:text-yellow-500 transition-all">
                  {artifact.name}
                </h5>
              </Link>
              <p className="mb-3 font-light text-white text-opacity-40">
                {artifact.description && artifact.description.length > 0
                  ? artifact.description.slice(0, 100) + "..."
                  : "No description available"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold dm-serif-text-regular">❤️ {artifact.likeCount}</span>
                {user ? (
                  <button
                    onClick={() => handleLike(artifact._id)}
                    className="px-3 py-2 text-sm font-medium text-center text-white border-2 border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg hover:bg-yellow-800 hover:border-none focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all"
                  >
                    Like This
                  </button>
                ) : (
                  <button
                    className="px-3 py-2 text-sm font-medium text-center text-white border-2  border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg opacity-50 hover:border-none cursor-not-allowed"
                    disabled
                  >
                    Like This
                  </button>
                )}
                <Link to={`/artifact/${artifact._id}`}>
                  <button className="px-3 py-2 text-sm font-medium text-center text-white border-2  border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg hover:bg-yellow-800 hover:border-none focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
