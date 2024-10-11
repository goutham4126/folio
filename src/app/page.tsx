"use client";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Projects from "./projects/page";
import About from "@/components/About"
import Skills from './skills/page';
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline"

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomePage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {showHomePage ? (
        <>
          <Navbar />
          <div id="home"><Home /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills/></div>
          <div id="projects"><Projects /></div>
          <div id="education"><Timeline/></div>
          <div id="contact"><Contact /></div>
          <Footer />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <img 
            src="https://cdn.dribbble.com/users/66340/screenshots/3089041/spinner2.gif" 
            alt="Loading..." 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
    </div>
  );
}

export default App;
