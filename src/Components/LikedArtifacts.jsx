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
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get("/liked-artifacts")
        .then((res) => {
          setLikedArtifacts(res.data);
          setLoading(false);
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
  }, [user, axiosSecure]);

  if (loading) {
    return <p>Loading your liked artifacts...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Your Liked Artifacts
      </h2>
      {likedArtifacts.length === 0 ? (
        <p className="text-center text-lg text-gray-500">
          You haven't liked any artifacts yet. Explore and like some!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-gray-200 bg-[#252930]">
            <thead>
              <tr className="text-center bg-gray-700 text-gray-400">
                <th className="  px-4 py-2 text-center">Image</th>
                <th className="  px-4 py-2 text-center">Name</th>
                <th className="  px-4 py-2 text-center">Description</th>
                <th className=" px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {likedArtifacts.map((artifact) => (
                <tr key={artifact._id}>
                  <td className=" px-4 py-2">
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </td>
                  <td className=" px-4 py-2">{artifact.name}</td>
                  <td className=" px-4 py-2">{artifact.description}</td>
                  <td className=" px-4 py-2 text-center">
                    <button
                      onClick={() => navigate(`/artifact/${artifact._id}`)}
                      className="btn bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-6 py-2 rounded-full border-none"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
