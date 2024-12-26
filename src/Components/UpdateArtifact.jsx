import React, { useEffect, useState, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateArtifact = () => {
  const artifact = useLoaderData(); 
  const { user } = useContext(authContext); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: artifact.name || "",
    image: artifact.image || "",
    type: artifact.type || "",
    description: artifact.description || "",
    createdAt: artifact.createdAt || "",
    discoveredAt: artifact.discoveredAt || "",
    discoveredBy: artifact.discoveredBy || "",
    location: artifact.location || "",
  });

  useEffect(() => {
    if (!user) {
      Swal.fire("Unauthorized", "Please log in to update an artifact.", "error");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/artifact/${artifact._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire("Success", "Artifact updated successfully!", "success");
        navigate("/my-artifacts");
      } else {
        Swal.fire("Error", data.message || "Failed to update the artifact.", "error");
      }
    } catch (error) {
      console.error("Error updating artifact:", error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Artifact</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Artifact Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Artifact Image (URL)</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Artifact Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full mt-2"
            required
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Historical Context</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full mt-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Created At</label>
          <input
            type="text"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discovered At</label>
          <input
            type="text"
            name="discoveredAt"
            value={formData.discoveredAt}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Present Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered w-full mt-2"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
