import React, { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider"; 
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure"; 

const AddArtifact = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Collect form data
    const name = form.name.value;
    const image = form.image.value;
    const type = form.type.value;
    const description = form.description.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    const location = form.location.value;

    // Create artifact object
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
        name: user?.displayName || "Anonymous", // Use displayName for better readability
        email: user?.email || "unknown",
      },
      likeCount: 0,
      likedBy: [], // Initially empty
    };

    // Send data to the server using axios with secure instance and withCredentials
    axiosSecure
      .post("/history", artifact, { withCredentials: true }) // Added withCredentials to ensure secure session
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Artifact added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
          navigate("/"); // Redirect to the home page after successful submission
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
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Add Artifact</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Artifact Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter artifact name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* Artifact Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Image (URL)</label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* Artifact Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Artifact Type</label>
            <select name="type" className="select select-bordered w-full mt-2" required>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
            </select>
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Historical Context</label>
            <textarea
              name="description"
              placeholder="Enter historical context"
              className="textarea textarea-bordered w-full mt-2"
              required
            ></textarea>
          </div>
          {/* Created At */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Created At</label>
            <input
              type="text"
              name="createdAt"
              placeholder="e.g., 100 BC"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* Discovered At */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Discovered At</label>
            <input
              type="text"
              name="discoveredAt"
              placeholder="e.g., 1799"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* Discovered By */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Discovered By</label>
            <input
              type="text"
              name="discoveredBy"
              placeholder="Enter discoverer's name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Present Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          {/* User Info (Read-Only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Added By</label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user?.email || "unknown"}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Add Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddArtifact;
