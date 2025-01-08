import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyArtifacts = () => {
  const { user } = useContext(authContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/my-artifacts?email=${user.email}`)
        .then((res) => {
          setMyArtifacts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/artifact/${id}`)
          .then(() => {
            setMyArtifacts((prev) => prev.filter((artifact) => artifact._id !== id));
            Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error", "There was an issue deleting the artifact.", "error");
          });
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Artifacts</h2>
      {myArtifacts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-gray-200 bg-[#252930]">
            <thead>
              <tr className="text-left bg-gray-700 text-gray-400">
                <th className="px-4 py-3 text-center">Image</th>
                <th className="px-4 py-3 text-center">Name</th>
                <th className="px-4 py-3 text-center">Description</th>
                <th className="px-4 py-3 text-center">Update</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myArtifacts.map((artifact) => (
                <tr key={artifact._id} className="border-b border-gray-700">
                  <td className="px-4 py-3 text-center">
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-16 h-16 object-cover  rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3 text-white">{artifact.name}</td>
                  <td className="px-4 py-3 text-gray-300">{artifact.description}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => navigate(`/update-artifact/${artifact._id}`)}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-700 text-white px-10 py-2 rounded-full border-none"
                    >
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDelete(artifact._id)}
                      className="bg-gradient-to-r from-red-400 to-red-700 text-white px-10 py-2 rounded-full border-none"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">No artifacts added yet.</p>
      )}
    </div>
  );
};

export default MyArtifacts;
