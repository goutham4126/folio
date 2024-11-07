"use client";

// src/components/custom-cursor.tsx
import React, { useEffect, useRef, useState } from 'react';

// Main CustomCursor component
const CustomCursor = () => {
  // Reference to the cursor element
  const cursorRef = useRef(null);
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State to track click event
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      // Reset click state after 800 milliseconds
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []); // useEffect runs only once on mount

  return (
    <>
      <img
        src="https://i.postimg.cc/xTRw4YZk/mouse-pointer.png" // Path to your cursor image in the public folder
        alt="Custom Cursor"
        ref={cursorRef}
        className="cursor-none z-50"
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '40px', // Adjust the size as needed
          height: '40px', // Adjust the size as needed
          pointerEvents: 'none', // Prevent interaction with the image
          transform: 'translate(-50%, -50%)', // Center the cursor
          transition: 'transform 0.1s ease', // Add transition effect
          opacity: clicked ? 0.5 : 1 // Optional click effect
        }}
      />
    </>
  );
};

export default CustomCursor;