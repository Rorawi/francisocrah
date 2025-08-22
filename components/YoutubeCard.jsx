import React, { useState } from 'react';
import { FaYoutube, FaPlay, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
// import { MdOutlineShorts } from 'react-icons/md';

const YouTubeShortsCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="relative max-w-md mx-auto bg-gradient-to-br from-gray-900 via-black to-red-950 rounded-2xl p-6 shadow-2xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-red-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <FaYoutube className="text-4xl text-red-500 drop-shadow-lg" />
            <div className="absolute -bottom-1 -right-1">
              {/* <MdOutlineShorts className="text-lg text-white bg-red-500 rounded-full p-1" /> */}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">YouTube Shorts</h3>
            <p className="text-gray-400 text-sm">@YourChannel</p>
          </div>
        </div>
        <HiOutlineExternalLink className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
      </div>

      {/* Shorts Preview Section */}
      <div className="relative mb-6">
        <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-xl p-4 border border-red-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-red-400 text-sm font-semibold flex items-center space-x-2">
              {/* <MdOutlineShorts /> */}
              <span>Latest Short</span>
            </span>
            <div className={`transition-all duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              <FaPlay className="text-white text-lg drop-shadow-lg" />
            </div>
          </div>
          
          {/* Mock shorts thumbnail - vertical aspect ratio */}
          <div className="bg-gray-800 rounded-lg h-40 w-24 mx-auto flex items-center justify-center mb-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-orange-500/10"></div>
            <div className="text-center">
              <FaPlay className="text-white text-2xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer mb-2" />
              <div className="text-xs text-gray-400">0:45</div>
            </div>
            {/* Vertical indicator */}
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
              SHORTS
            </div>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed text-center">
            "Quick coding tips in under 60 seconds! ⚡ #shorts #webdev #coding"
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">25.2K</p>
          <p className="text-gray-400 text-xs">Subscribers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">1.2M</p>
          <p className="text-gray-400 text-xs">Views</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">89</p>
          <p className="text-gray-400 text-xs">Shorts</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">Watch Time</span>
          <span className="text-green-400 text-sm font-semibold">↗ +24%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full w-3/4"></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>78% retention</span>
          <span>60s</span>
        </div>
      </div>

      {/* Interaction Buttons */}
      <div className="flex justify-around items-center py-3 border-t border-gray-700">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            isLiked 
              ? 'text-red-500 bg-red-500/10' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-500/5'
          }`}
        >
          <FaThumbsUp className={`transition-all duration-300 ${isLiked ? 'scale-110' : ''}`} />
          <span className="text-sm">4.8K</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-blue-400/5">
          <FaComment />
          <span className="text-sm">234</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-green-400/5">
          <FaShare />
          <span className="text-sm">127</span>
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-6 space-y-3">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25">
          Subscribe
        </button>
        <button className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-xl transition-all duration-300">
          Watch Shorts
        </button>
      </div>

      {/* YouTube Shorts Badge */}
      <div className="absolute top-6 right-6">
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
          {/* <MdOutlineShorts className="text-sm" /> */}
          <span>SHORTS</span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-16 w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-lg"></div>
      
      {/* Animated border on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 blur-sm -z-10`}></div>
    </div>
  );
};

export default YouTubeShortsCard;