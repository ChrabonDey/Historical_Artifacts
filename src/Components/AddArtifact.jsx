import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import img1 from "../assets/Historical Artifacts Tracker moskot (1).jpg";
import image3 from "../assets/Historical Artifacts Tracker moskot (2).jpg";

const AddArtifact = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const image = form.image.value;
    const type = form.type.value;
    const description = form.description.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    const location = form.location.value;

    const artifact = {
      name,
      image,
      type,
      description,
      createdAt,
      discoveredAt,
      discoveredBy,
      location,
      addedBy: {
        name: user?.displayName || "Anonymous",
        email: user?.email || "unknown",
      },
      likeCount: 0,
      likedBy: [],
    };

    axiosSecure
      .post("/history", artifact, { withCredentials: true })
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Artifact added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/");
        } else {
          throw new Error("Failed to add artifact");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center gap-12 bg-[#252930] text-white">
      {/* Images Section */}
      <div className="flex  justify-center items-center lg:w-1/2">
       
          <img
            src={image3}
            alt="Artifact Image 1"
            className="w-96 h-screen object-cover rounded-full border-l-2 border-gray-700  p-5"
          />
         
        
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 w-full px-8 py-6 bg-[#2f343d] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Add Artifact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Artifact Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Artifact Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter artifact name"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Artifact Image */}
          <div>
            <label className="block text-sm font-medium mb-2">Artifact Image (URL)</label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Artifact Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Artifact Type</label>
            <select
              name="type"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Historical Context</label>
            <textarea
              name="description"
              placeholder="Enter historical context"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          {/* Created At */}
          <div>
            <label className="block text-sm font-medium mb-2">Created At</label>
            <input
              type="text"
              name="createdAt"
              placeholder="e.g., 100 BC"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Discovered At */}
          <div>
            <label className="block text-sm font-medium mb-2">Discovered At</label>
            <input
              type="text"
              name="discoveredAt"
              placeholder="e.g., 1799"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Discovered By */}
          <div>
            <label className="block text-sm font-medium mb-2">Discovered By</label>
            <input
              type="text"
              name="discoveredBy"
              placeholder="Enter discoverer's name"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-2">Present Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Added By */}
          <div>
            <label className="block text-sm font-medium mb-2">Added By</label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none"
              readOnly
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={user?.email || "unknown"}
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded focus:outline-none"
              readOnly
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
