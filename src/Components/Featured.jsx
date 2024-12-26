import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

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
      <h2 className="text-3xl font-bold text-center mb-6">Featured Artifacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracker.map((artifact) => (
          <div key={artifact._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={artifact.image} alt={artifact.name} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{artifact.name}</h2>
              <p>{artifact.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">❤️ {artifact.likeCount}</span>
                {user ? (
                  <button onClick={() => handleLike(artifact._id)} className="btn btn-primary">
                    Like
                  </button>
                ) : (
                  <button className="btn btn-primary" disabled>
                    Like
                  </button>
                )}
                <Link to={`/artifact/${artifact._id}`}>
                  <button className="btn btn-secondary">View Details</button>
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
