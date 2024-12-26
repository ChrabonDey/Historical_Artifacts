import React, { useState, useEffect } from "react";

const AllArtifact = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArtifacts = async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/history${query}`);
      if (!response.ok) {
        throw new Error("Failed to fetch artifacts");
      }
      const data = await response.json();
      setArtifacts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtifacts();
  }, []);

  const handleSearch = () => {
    fetchArtifacts(searchTerm ? `?search=${searchTerm}` : "");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading artifacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">All Artifacts</h2>
      
      
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by Artifact Name..."
          className="input input-bordered w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.length > 0 ? (
          artifacts.map((artifact) => (
            <div key={artifact._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={artifact.image || "https://via.placeholder.com/150"}
                  alt={artifact.name || "Artifact"}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{artifact.name || "Unnamed Artifact"}</h2>
                <p>{artifact.description || "No description available."}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold">❤️ {artifact.likeCount || 0}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No artifacts found.</p>
        )}
      </div>
    </div>
  );
};

export default AllArtifact;
