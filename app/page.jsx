'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ContentCreationStoryTelling from '../components/ContentCreationStoryTelling';
import PhotoShoplikeCard from '../components/PhotoShoplikeCard';
import TiktokCard from '../components/TiktokCard';
import YoutubeCard from '../components/YoutubeCard';
import ProjectsDisplay from "../components/ProjectsDisplay";
import CoreSkills from "../components/CoreSkills"
import SelectedWorkExperience from "../components/SelectedWorkExperience"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
<div className='relative bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50'>
        {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-200 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
      </div> */}
<Navbar />
<Hero />
<ProjectsDisplay />
<SelectedWorkExperience className=" pt-[150px]" />
 {/* <ContentCreationStoryTelling /> */}
<CoreSkills />
<CTA />
<Footer />
{/* <FeaturedProjects/> */}
{/* <Projects /> */}
{/* <ContentCreationStoryTelling />
<TiktokCard />
<PhotoShoplikeCard />
<YoutubeCard /> */}
</div>
  );
}
