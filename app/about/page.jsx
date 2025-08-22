'use client'

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import React from 'react';
import { IoColorPaletteOutline, IoVideocamOutline } from "react-icons/io5";
import { FiPenTool } from "react-icons/fi";

const page = () => {
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
        <>
            <Navbar />
            <div className="relative">
                <img
                    src="/images/paintsplash.jpg"
                    alt=""
                    className="fixed right-0 opacity-20 left-0 w-full blur-md z-0"
                />

                <div className="md:py-[75px] container mx-auto px-4 text-center max-w-7xl relative z-10">
                    <section className="grid lg:grid-cols-3 gap-8 pt-15 md:pt-5">
                        <div className="lg:col-span-1">
                            <div className='h-full border border-gray-200 bg-white p-5 rounded-xl'>
                                <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted mb-6">
                                    <Image
                                        src="/images/profile.jpeg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        width={128}
                                        height={128}
                                    />
                                </div>
                                <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                                    <h3 className="text-xl font-semibold">Francis Ocrah</h3>
                                    <p className="text-sm">Creative Media Specialist • Graphic Designer • Content Creator</p>
                                </div>

                                <div className="md:space-x-3 lg:space-y-3 flex flex-col md:flex-row lg:flex-col md:justify-center lg:items-center mb-20">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        francis@gmail.com
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        +223 (546) 123 747
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-6">
                            <div className='h-full border border-gray-200 bg-white p-5 rounded-xl'>
                                <div className="space-y-2 mb-3 pb-3 text-left">
                                    <h3 className="text-2xl font-semibold textShadow">About Me</h3>
                                </div>

                                <div className='text-left'>
                                    <p className="text-base mb-3">I am Francis a creative powerhouse who blends passion with skill,
                                        effortlessly wearing the hats of a content creator, video editor, and graphic designer.
                                        With a natural eye for detail and a deep understanding of how visuals resonate with audiences,
                                        I have built a reputation for crafting engaging,
                                        high-quality content that leaves a lasting impact.
                                    </p>
                                    <p className="text-base mb-3">Every project begins with a spark of inspiration.
                                        I took my time to understand each brand’s story and mission, whether it’s
                                        for a personal blog, a startup, or a well-established company. From there,
                                        the video editing process is where I truly shine—carefully curating every frame,
                                        adding effects, transitions, and soundtracks that elevate the visuals. Whether
                                        it’s a short social media clip or a longer YouTube video,
                                        I know exactly how to keep the audience hooked from the first second.
                                    </p>
                                    <p className="text-base mb-3">But it doesn’t stop there. As a graphic designer,
                                        I know that good design is about more than just aesthetics; it’s about communicating a message.
                                        From logos to infographics, website designs to social media posts, every element is crafted with
                                        purpose and precision. I can seamlessly blend bold typography with
                                        eye-catching visuals, creating a cohesive brand identity that speaks directly to the audience
                                    </p>
                                    <p className="text-base mb-3">
                                        I’m a passionate and dynamic media specialist with experience in graphic design,
                                        video editing, storytelling, and digital content creation. I bring creativity,
                                        precision, and a strong sense of purpose to every project,
                                        and I’m always eager to learn, adapt, and contribute meaningfully in both solo and team environments.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className='mt-8 border border-gray-200 bg-white p-5 rounded-xl'>
                        {/* Work Experience Section */}
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-5xl text-center font-bold text-[#111827] font-bagel pb-6 border-b border-gray-200 mb-2">
                                    Selected Work Experience</h2>
                                <div className="w-24 h-0.5 bg-border mx-auto"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {workExperience.map((work, index) => (
                                    <div key={index} className="h-full hover:shadow-lg transition-shadow duration-300 rounded-lg bg-card text-card-foreground border border-gray-200">
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
                        </div></div>
                </div>

            </div>
        </>
    )
}

export default page