"use client";

import React from 'react';

function ProjectDisplay({ images, speed = 30000, direction = 'normal' }) {
  // Default images if none provided
  const defaultImages = [
    { src: '/images/prophet.jpeg', alt: 'Project 1' },
    { src: '/images/flyer4.png', alt: 'Project 2' },
    { src: '/images/theme1.jpeg', alt: 'Project 3' },
    { src: '/images/kwesibelllogo.jpg', alt: 'Project 4' },
    { src: '/images/70days.png', alt: 'Project 5' },
    { src: '/images/lilian-logo.jpg', alt: 'Project 6' },
  ];

  const slideImages = images || defaultImages;
  
  // Duplicate images for seamless loop
  const duplicatedImages = [...slideImages, ...slideImages];

  return (
    <section className="py-10">
      <div className="w-full overflow-hidden bg-transparent">
        <div className="relative">
          <div 
            className="flex gap-4 animate-marquee"
            style={{
              animationDuration: `25000ms`,
              animationDirection: direction,
              animationPlayState: 'running',
              width: 'max-content'
            }}
          >
            {duplicatedImages.map((image, index) => (
              <MarqueeCard key={index} item={image} />
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}

function MarqueeCard({ item }) {
  return (
    <div className="group relative flex-shrink-0 w-80 h-80 overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur transition-all hover:shadow-lg hover:shadow-black/10">
      {item.src && (
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={item.src}
            alt={item.alt || item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4">
        {(item.title || item.description) && (
          <div className="text-white">
            {item.title && (
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            )}
            {item.description && (
              <p className="text-sm text-white/80">{item.description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Alternative version with pause on hover
function MarqueeSliderWithPause({ images, speed = 30000, direction = 'normal' }) {
  const defaultImages = [
    { src: '/images/prophet.jpeg', alt: 'Project 1', title: 'Web Development', description: 'Modern React application' },
    { src: '/images/flyer4.png', alt: 'Project 2', title: 'Mobile App', description: 'Cross-platform solution' },
    { src: '/images/theme1.jpeg', alt: 'Project 3', title: 'UI/UX Design', description: 'User-centered approach' },
    { src: '/images/kwesibelllogo.jpg', alt: 'Project 4', title: 'E-commerce', description: 'Full-stack platform' },
    { src: '/images/70days.png', alt: 'Project 5', title: 'Dashboard', description: 'Data visualization' },
    { src: '/images/lilian-logo.jpg', alt: 'Project 6', title: 'Landing Page', description: 'High conversion design' },
  ];

  const slideImages = images || defaultImages;
  const duplicatedImages = [...slideImages, ...slideImages];

  return (
    <section className="px-4 py-10">
      <div className="w-full overflow-hidden bg-transparent">
        <div className="relative group">
          <div 
            className="flex gap-2 animate-marquee group-hover:animation-paused"
            style={{
              animationDuration: `${speed}ms`,
              animationDirection: direction,
              width: 'max-content'
            }}
          >
            {duplicatedImages.map((image, index) => (
              <MarqueeCard key={index} item={image} />
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDisplay;
export {  MarqueeSliderWithPause };