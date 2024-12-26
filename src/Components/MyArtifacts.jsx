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
      // Fetching the user's artifacts with the secure axios instance
      axiosSecure
        .get(`/my-artifacts?email=${user.email}`)
        .then((res) => {
          setMyArtifacts(res.data);  // Set the artifacts data
          setLoading(false);  // Set loading to false when data is received
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);  // Set loading to false even if there's an error
        });
    }
  }, [user, axiosSecure]);  // Added axiosSecure to the dependency array

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
          .delete(`/artifact/${id}`)  // Using axiosSecure for delete request
          .then(() => {
            setMyArtifacts((prev) => prev.filter((artifact) => artifact._id !== id));  // Update state after deletion
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
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Artifacts</h2>
      {myArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myArtifacts.map((artifact) => (
            <div key={artifact._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={artifact.image} alt={artifact.name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{artifact.name}</h2>
                <p>{artifact.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button onClick={() => handleDelete(artifact._id)} className="btn btn-error">
                    Delete
                  </button>
                  <button
                    onClick={() => navigate(`/update-artifact/${artifact._id}`)}
                    className="btn btn-warning"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">No artifacts added yet.</p>
      )}
    </div>
  );
};

export default MyArtifacts;
