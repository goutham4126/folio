"use client";
import { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import Mail from './Mail';

function Contact() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="relative">
      {show && (
        <>
          <div className="fixed inset-0 bg-black/60 z-20" onClick={toggleModal}></div>
          <div className="fixed inset-0 flex items-center justify-end mr-3 z-30 md:mb-12">
            <Mail/>
          </div>
        </>
      )}
      <button 
        onClick={toggleModal} 
        className="fixed right-4 bottom-4 bg-indigo-500 p-2 rounded-full shadow-lg z-40"
      >
        <IoChatbubbleEllipses className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

export default Contact;
