"use client";
// import React from "react";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [accordion1Open, setAccordion1Open] = useState(false);
  const [accordion2Open, setAccordion2Open] = useState(false);
  const [accordion3Open, setAccordion3Open] = useState(false);
  const [accordion4Open, setAccordion4Open] = useState(false);
 
  const [scrollLock, setScrollLock] = useState(false);

  const handleAccordion1Click = () => {
    setAccordion1Open(!accordion1Open);
    setScrollLock(!scrollLock);
  };

  const handleAccordion2Click = () => {
    setAccordion2Open(!accordion2Open);
    setScrollLock(!scrollLock);
  };
  return (
    <div className="flex h-screen">
      <div className="w-96 bg-black flex-shrink-0 overflow-y-auto">
        
        <div className="p-4 text-yellow-300 text-center  text-5xl font-serif">
          Software Developer
        </div>
        <h2 className="text-yellow-200 text-center text-3xl font-serif">
         JOHN DOE
        </h2>
        <div className="flex justify-center">
          <span className="inline-flex mt-5 items-center">
            <Link href="">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                className="w-5 h-5 "
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            <Link href="">
              <svg
                className="w-5 h-5 ml-2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.4 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/abeer-amir/" className="ml-2 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
            
          </span>
        </div>

        <div className="h-0.5 w-full justify-center items-center mt-10 bg-gray-300 my-4"></div>

        <h1 className="text-center text-3xl text-yellow-300 mt-6 font-serif">
          SKILLS:
        </h1>
        <ul className="ml-6 font-serif">
          <li>&#10004; Next.js</li>
          <li>&#10004; React.js</li>
          <li>&#10004; MongoDb</li>
          <li>&#10004; TailwindCSS</li>
          <li>&#10004; HTML/CSS</li>
          <li>&#10004; JavaScript</li>
          <li>&#10004; Git/GitHub</li>
          <li>&#10004; ChatGpt</li>
        </ul>
      </div>
      <div className="flex-grow bg-slate-200 text-white text-center flex flex-col items-center overflow-y-auto">
        <h1 className="text-4xl font-serif text-black mt-2 ">About Me </h1>

        <p className="text-black mt-1">
          I am just 18 and I am a highly skilled Full Stack Software Developer
          proficient in utilizing Next.js, Tailwind CSS, and MongoDB to develop
          robust and efficient web applications. With a passion for crafting
          seamless user experiences and a strong foundation in both front-end
          and back-end technologies, I excel in architecting scalable solutions
          that meet diverse business needs. My dedication to staying updated
          with the latest industry trends and my commitment to continuous
          learning ensure that I deliver high-quality results while maintaining
          a focus on innovation and best practices. Lets connect and explore how
          my expertise can contribute to your projects success.
        </p>

        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 className="text-black text-4xl mt-6 font-serif">Projects</h1>
        <div className="flex justify-between ">
          {/* First Accordion */}
          <div className="w-72 mx-auto mr-7 mt-3">
            <div
              className="border rounded-2xl shadow cursor-pointer"
              onClick={handleAccordion1Click}
            >
              <div className="flex justify-between items-center px-4 py-3 bg-black">
                <span className="text-lg font-serif italic text-white">
                  Concert Website
                </span>
                <svg
                  className={`w-5 h-5 text-white ${
                    accordion1Open ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {accordion1Open && (
                <div className="accordion-content overflow-hidden transition-max-height duration-300">
                  <div className=" py-2 text-white bg-black">
                    <Link href="s">
                    <p className="hover:underline">https://concert.Website.vercel.app/</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Second Accordion */}
          <div className="w-72 mx-auto mt-3">
            <div
              className="border rounded-2xl shadow cursor-pointer"
              onClick={handleAccordion2Click}
            >
              <div className="flex justify-between items-center px-4 py-3 bg-black">
                <span className="text-lg font-serif italic text-white">
                  Personal Portfolio
                </span>
                <svg
                  className={`w-5 h-5 text-white ${
                    accordion2Open ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {accordion2Open && (
                <div className="accordion-content overflow-hidden transition-max-height duration-300">
                  <div className="px-4 py-2 text-white bg-black">
                    <Link  href="">
                    <p className="hover:underline">https://personal.Website.vercel.app/</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
                                           {/* ACCordian # 3 or 4 */}
        <div className="flex justify-between ">
       
          <div className="w-72 mx-auto mr-7 mt-4">
            <div
              className="border rounded-2xl shadow cursor-pointer"
              onClick={() => setAccordion3Open(!accordion3Open)}
            >
              <div className="flex justify-between items-center px-4 py-3 bg-black">
                <span className="text-lg font-serif italic text-white">
                  Touring Website
                </span>
                <svg
                  className={`w-5 h-5 text-white ${
                    accordion3Open ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {accordion3Open && (
                <div className="accordion-content overflow-hidden transition-max-height duration-300">
                  <div className="px-4 py-2 text-white bg-black">
                    <Link href="">
                    <p className="hover:underline">https://touring-website.vercel.app/</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
      
          <div className="w-72 mx-auto mt-4">
            <div
              className="border rounded-2xl shadow cursor-pointer"
              onClick={() => setAccordion4Open(!accordion4Open)}
            >
              <div className="flex justify-between items-center px-4 py-3 bg-black">
                <span className="text-lg font-serif italic text-white">
                  Hunting Coder
                </span>
                <svg
                  className={`w-5 h-5 text-white ${
                    accordion4Open ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {accordion4Open && (
                <div className="accordion-content overflow-hidden transition-max-height duration-300">
                  <div className="px-4 py-2 text-white bg-black">
                    <Link href="">
                    <p className="hover:underline">https://website.vercel.app/</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
      </div>
      <Link href="/showmore">
      <button className="text-black hover:text-yellow-700 mt-3 underline">Show More</button>
      </Link>
     
      
  
    </div>
   
    </div>
  );
}
