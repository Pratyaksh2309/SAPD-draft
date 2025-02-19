import React, { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Activities.css";

import news1 from "../assets/news1.jpeg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/Newsletter.png";
import news4 from "../assets/news4.jpg";
import r1 from "../assets/r1.jpeg";
import r2 from "../assets/r2.jpeg";
import r3 from "../assets/r3.jpeg";
import r4 from "../assets/r4.jpeg";

export default function Activities() {
  const [equations, setEquations] = useState(
    Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      text: ["E = mc²", "F = ma", "∇ × E = - ∂B/∂t", "v = u + at"][index],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: (Math.random() - 0.5) * 1.5,
    }))
  );

  useEffect(() => {
    const canvas = document.getElementById("physicsCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createParticles() {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var g = Math.random() * 1;
      if (g > 0.5) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
      } else if (g === 0.5) {
        ctx.fillStyle = "rgba(255, 255, 0, 1)";
      } else {
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
      }
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animateParticles() {
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      drawParticles();
      requestAnimationFrame(animateParticles);
    }

    createParticles();
    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      createParticles();
    });
  }, []);

  // Move equations randomly and bounce at edges
  useEffect(() => {
    const moveEquations = () => {
      setEquations((prev) =>
        prev.map((eq) => {
          let newX = eq.x + eq.speedX;
          let newY = eq.y + eq.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - 150) eq.speedX *= -1;
          if (newY <= 0 || newY >= window.innerHeight - 50) eq.speedY *= -1;

          return { ...eq, x: newX, y: newY };
        })
      );
      requestAnimationFrame(moveEquations);
    };

    moveEquations();
  }, []);

  // Handle dragging
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("equationId", id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("equationId");
    const newX = e.clientX;
    const newY = e.clientY;

    setEquations((prev) =>
      prev.map((eq) =>
        eq.id === parseInt(id) ? { ...eq, x: newX, y: newY } : eq
      )
    );
  };

  return (
    <>
      <Header />
      <div
        className="relative overflow-hidden bg-[rgb(0,0,0,0.1)]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {/* Physics Background */}
        <canvas id="physicsCanvas" className="absolute inset-0"></canvas>

        {/* Floating & Draggable Equations */}
        {equations.map((eq) => (
          <div
            key={eq.id}
            className="physics-equation"
            draggable
            onDragStart={(e) => handleDragStart(e, eq.id)}
            style={{ left: eq.x, top: eq.y }}
          >
            {eq.text}
          </div>
        ))}

        {/* Content */}
        <div className="relative container mx-auto p-6 space-y-8">
          <ActivityCard
            title="Department Newsletters"
            description="Welcome to the Physics Department Newsletter Archive! 

Step into the captivating world of physics and explore a collection of newsletters brimming with articles, interviews by editors, and research findings about the fascinating realm of physics. Join us on this enlightening journey of discovery and stay updated with the latest breakthroughs in the field. "
            link="https://drive.google.com/drive/folders/1iGbJ9GSGo79TF7ymYEjTR_DthAb1Sa4r?usp=sharing"
            images={[news1, news2, news3, news4]}
          />

          <ActivityCard
            title="Trad Day '24"
            description="Join us for an exciting traditional day."
            link="https://example.com/symposium"
            images={[r1, r2, r3, r4]}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
