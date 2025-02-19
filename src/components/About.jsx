import React from "react";
import aboutImage from "../assets/about.jpg"; // Add your image path here

function About() {
  return (
    <section id="about" className="relative pt-[0.15rem] text-center">
      {/* Image container with 'About Us' text */}
      <div
        className="h-[200px] w-full md:h-[280px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <h2 className="absolute md:bottom-36 md:top-36 md:left-2 top-32 text-3xl md:text-7xl font-bold p-4">
          About Us
        </h2>
      </div>
      <div className="p-4">
        <p className="text-sm md:text-lg">
          Welcome to the Students' Association of the Physics Department (SAPD)
          at IIT Bombay! We are a dynamic student-run council dedicated to
          enhancing your academic and social experience. Join us for Trad Day,
          Department Trips, Lukkha Nights, and inspiring Alumni Talks. Let's
          create unforgettable memories together as we learn, grow, and have fun
          in the Physics Department!
        </p>
      </div>
    </section>
  );
}

export default About;
