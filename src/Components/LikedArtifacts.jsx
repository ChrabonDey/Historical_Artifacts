import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const LikedArtifacts = () => {
  const { user } = useContext(authContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure(); // Custom hook to handle secure API requests

  useEffect(() => {
    if (user?.email) {
      // Fetching liked artifacts for the authenticated user
      axiosSecure
        .get("/liked-artifacts") // Send GET request to the protected route
        .then((res) => {
          setLikedArtifacts(res.data); // Set liked artifacts
          setLoading(false); // Set loading to false
        })
        .catch((err) => {
          console.error("Error fetching liked artifacts:", err);
          setError("There was an error loading your liked artifacts.");
          setLoading(false);
        });
    } else {
      setError("Please log in to see your liked artifacts.");
      setLoading(false);
    }
  }, [user, axiosSecure]); // Depend on user and axiosSecure to re-fetch when needed

  if (loading) {
    return <p>Loading your liked artifacts...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Your Liked Artifacts</h2>
      {likedArtifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          You haven't liked any artifacts yet. Explore and like some!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <div key={artifact._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{artifact.name}</h2>
                <p>{artifact.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => navigate(`/artifact/${artifact._id}`)} // Navigate to artifact detail page
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
