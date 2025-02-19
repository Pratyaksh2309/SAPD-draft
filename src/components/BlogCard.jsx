import React from "react";

export default function BlogCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-md md:text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-xl mb-4">{description}</p>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
