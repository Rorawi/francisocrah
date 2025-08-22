'use client'

import React from 'react';
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";
import { color } from 'framer-motion';


const SelectedWorkExperience = () => {
    const workExperience = [
  {
    title: "Graphic Design",
    icon: <IoColorPaletteOutline className="w-6 h-6" />,
    description: "Posters, flyers, and event banners designed with Adobe Photoshop and Illustrator.",
    details: "Flat art and digital illustrations for media outreach and church events.",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Print Design", "Digital Art"],
    color: "yellow"
  },
  {
    title: "Video Editing & Content Creation",
    icon: <IoVideocamOutline className="w-6 h-6" />,
    description: "Edited sermon and event videos for Potter's City using Adobe Premiere Pro.",
    details: "Developed short story-based content for social media using CapCut and Wondershare and Camtasia.",
    skills: ["Adobe Premiere Pro", "CapCut", "Wondershare", "Camtasia"],
    color: "red"
  },
  {
    title: "Content Writing & Storytelling",
    icon: <FiPenTool className="w-6 h-6" />,
    description: "Wrote engaging scripts and captions for church media programs.",
    details: "Created inspirational and educational blog-style stories.",
    skills: ["Script Writing", "Social Media Content", "Storytelling", "Content Strategy"],
    color: "blue"
  }
];
  return (
        <div className="max-w-7xl px-4 mx-auto relative z-10">
{/* Work Experience Section */}
<div className="space-y-6">
  <div className="text-center">
         <h2 className="text-5xl text-center pt-25 font-bold text-[#111827] font-bagel pb-6 border-b border-gray-200 mb-2">
Selected Work Experience</h2>
    <div className="w-24 h-0.5 bg-border mx-auto"></div>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {workExperience.map((work, index) => (
      <div key={index} className="h-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg bg-card text-card-foreground border border-gray-200">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 bg-${work.color}-100 rounded-lg text-${work.color}-600`}>
              {work.icon}
            </div>
            <h3 className="text-xl font-semibold leading-none tracking-tight">{work.title}</h3>
          </div>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-3">
            <p className="leading-relaxed"> {work.description}</p>
            <p className="text-gray-500 text-sm leading-relaxed">{work.details}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {work.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-200 text-gray-600">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
  )
}

export default SelectedWorkExperience;