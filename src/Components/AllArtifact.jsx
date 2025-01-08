import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllArtifact = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order

  const fetchArtifacts = async (query = "") => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://historical-artifacts-tracker-server-umber.vercel.app/history${query}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch artifacts");
      }
      const data = await response.json();
      const sortedData = sortArtifacts(data, sortOrder);
      setArtifacts(sortedData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtifacts();
  }, [sortOrder]);

  const handleSearch = () => {
    fetchArtifacts(searchTerm ? `?search=${searchTerm}` : "");
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    const sortedData = sortArtifacts([...artifacts], order);
    setArtifacts(sortedData);
  };

  const sortArtifacts = (data, order) => {
    return data.sort((a, b) =>
      order === "asc" ? a.likeCount - b.likeCount : b.likeCount - a.likeCount
    );
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
      <h2 className="text-3xl font-bold text-center mb-6  dm-serif-text-regular  text-opacity-80 ">All Artifacts</h2>

      <div className="flex justify-between items-center mb-6">
        {/* Search Bar */}
        <div className="flex gap-2">
          <input
         
            type="text"
            placeholder="Search by Artifact Name..."
            className="input text-black input-bordered w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-10 py-2  border-none" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Sort Buttons */}
        <div>
          <button
            className={`btn ${sortOrder === "asc" ? "btn-active" : ""} mr-2`}
            onClick={() => handleSortChange("asc")}
          >
            Ascending
          </button>
          <button
            className={`btn ${sortOrder === "desc" ? "btn-active" : ""}`}
            onClick={() => handleSortChange("desc")}
          >
            Descending
          </button>
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {artifacts.length > 0 ? (
          artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="max-w-sm bg-[#252930] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105"
            >
              <img
                src={artifact.image || "https://via.placeholder.com/150"}
                alt={artifact.name || "Artifact"}
                className="rounded-t-lg w-full h-36 object-cover"
              />
              <div className="p-4">
                <h5 className="text-2xl font-semibold text-white mb-2 dm-serif-text-regular ">
                  {artifact.name || "Unnamed Artifact"}
                </h5>
                <p className="text-gray-400 mb-3 dm-serif-text-regular ">
                  {artifact.description?.slice(0, 100) || "No description available"}
                  {artifact.description?.length > 100 ? "..." : ""}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xl text-yellow-500 font-semibold">
                    ❤️ {artifact.likeCount || 0}
                  </span>
                  <Link to={`/artifact/${artifact._id}`}>
                  <button className="px-3 py-2 text-sm font-medium text-center text-white border-2  border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-lg hover:bg-yellow-800 hover:border-none focus:ring-4 focus:outline-none focus:ring-yellow-300 transition-all">
                    See More
                  </button>
                </Link>
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
