import React from "react";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

import news1 from "../assets/news1.jpeg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/Newsletter.png";
import news4 from "../assets/news4.jpg";

export default function Blogs() {
  // Dummy Blog Data
  const blogs = [
    {
      image: news1,
      title: "The Future of AI",
      description: "How AI is transforming the world with its capabilities.",
      link: "/",
    },
    {
      image: news2,
      title: "Exploring the Cosmos",
      description: "A journey into the unknown mysteries of space.",
      link: "/",
    },
    {
      image: news3,
      title: "The Beauty of Nature",
      description: "How nature impacts our well-being and mental health.",
      link: "/",
    },
    {
      image: news4,
      title: "Why Learn to Code?",
      description: "The benefits of programming in the modern era.",
      link: "/",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-200 p-8">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-8">
          Latest Blogs
        </h1>

        {/* Blog Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
