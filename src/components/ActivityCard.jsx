import React from "react";

export default function ActivityCard({ title, description, link, images }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-200 p-0 rounded-lg shadow-2xl overflow-hidden ">
      {/* Left Side - Images */}
      <div className="grid grid-cols-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Activity ${index + 1}`}
            className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        ))}
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center text-left bg-blue-800 p-6 shadow-md">
        <h2 className="text-md md:text-3xl text-white font-bold mb-4 md:mb-6 text-center">
          {title}
        </h2>
        <p className="text-white mb-2 text-sm md:text-lg">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm md:text-lg border border-white text-white rounded-md hover:bg-gray-900 hover:text-white transition flex justify-center"
        >
          Read Here!
        </a>
      </div>
    </div>
  );
}
