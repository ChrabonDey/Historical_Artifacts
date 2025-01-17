import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import "../App.css"


const FeaturedDetails = () => {
  const feature = useLoaderData(); // Load artifact details
  const { user } = useContext(authContext); // Access logged-in user info
  const [likeCount, setLikeCount] = useState(feature.likeCount || 0);
  const [liked, setLiked] = useState(feature.likedBy?.includes(user?.email) || false);

  const handleToggleLike = async () => {
    if (!user?.email) {
      alert("Please log in to toggle like status.");
      return;
    }

    try {
      const response = await fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/artifact/${feature._id}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      if (response.ok) {
        const data = await response.json();
        setLiked(data.liked); // Toggle the liked state
        setLikeCount((prevCount) => (data.liked ? prevCount + 1 : prevCount - 1)); // Adjust likeCount
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to toggle like status. Please try again.");
      }
    } catch (error) {
      console.error("Error toggling like status:", error);
      alert("Error toggling like status. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl flex gap-14 mx-auto p-6  shadow-lg rounded-lg mt-10">
      
      <div className="relative">
        <img
          src={feature.image}
          alt={feature.name}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>
    
      <div className=" mt-6 dm-serif-text-regular flex-1 justify-start ">
      <h1 className="text-4xl font-light text-white text-opacity-80 text-start  leading-relaxed mb-6">{feature.name}</h1>
      <p className="text-lg text-white mt-2 text-start mb-7 opacity-70">{feature.description}</p>
        <div className="flex justify-between items-center">
        <button
          className={`px-6 py-2 font-semibold rounded-lg transition ${
            liked ? "bg-red-500 text-white" : "bg-blue-500 text-white"
          }`}
          onClick={handleToggleLike}
        >
          {liked ? "Dislike" : "Like"}
        </button>
        <span className="text-lg text-white opacity-80">{likeCount} Likes</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetails;
