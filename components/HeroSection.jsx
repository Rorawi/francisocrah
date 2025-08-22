import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const AnimatedTitle = ({ text, className }) => {
    return (
      <span className={className}>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((letter, letterIndex) => (
              <span
                key={letterIndex}
                className="inline-block animate-fade-in-up"
                style={{
                  animationDelay: `${(wordIndex * word.length + letterIndex) * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {letter}
              </span>
            ))}
            {wordIndex < text.split(' ').length - 1 && (
              <span className="inline-block w-4"></span>
            )}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out 0.5s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .profile-image {
          transition: transform 0.3s ease-out;
        }
        
        .profile-image:hover {
          transform: scale(1.05);
        }
        
        .cta-button {
          transition: all 0.3s ease-out;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <section className="min-h-screen bg-black text-white flex items-center py-16 px-4 md:px-8" id="hero">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Main Title */}
              <div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
                  <AnimatedTitle 
                    text="Devis Rogers" 
                    className="text-white"
                  />
                </h1>
              </div>

              {/* Subtitle */}
              <div className="animate-slide-in-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I'm Devis, a passionate visually striking and user-friendly designer.
                </h3>
              </div>

              {/* CTA Button */}
              <div className="animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-4 cta-button text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-900 group"
                >
                  <span>Confirm Your Seat</span>
                  {/* <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /> */}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <div className="animate-float">
                  <div className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] relative overflow-hidden rounded-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
                      alt="Devis Rogers - Profile Image"
                      className="w-full h-full object-cover profile-image"
                      loading="eager"
                    />
                    
                    {/* Overlay gradient for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;