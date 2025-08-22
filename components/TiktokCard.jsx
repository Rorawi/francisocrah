import React, { useState } from 'react';
import { FaTiktok, FaPlay, FaHeart, FaComment, FaShare } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const TikTokCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className='max-w-md mx-auto'>
    <div 
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-pink-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <FaTiktok className="text-4xl text-white drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">TikTok</h3>
            <p className="text-gray-400 text-sm">@yourusername</p>
          </div>
        </div>
        <HiOutlineExternalLink className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
      </div>

      {/* Video Preview Section */}
      <div className="relative mb-6">
        <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl p-4 border border-pink-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-pink-400 text-sm font-semibold">Latest Video</span>
            <div className={`transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
              <FaPlay className="text-white text-lg drop-shadow-lg" />
            </div>
          </div>
          
          {/* Mock video thumbnail */}
          <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center mb-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
            <FaPlay className="text-white text-3xl opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            "Creating amazing content for my portfolio showcase! 🚀 #webdev #portfolio"
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">12.5K</p>
          <p className="text-gray-400 text-xs">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">850K</p>
          <p className="text-gray-400 text-xs">Likes</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">156</p>
          <p className="text-gray-400 text-xs">Videos</p>
        </div>
      </div>

      {/* Interaction Buttons */}
      <div className="flex justify-around items-center py-3 border-t border-gray-700">
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            isLiked 
              ? 'text-pink-500 bg-pink-500/10' 
              : 'text-gray-400 hover:text-pink-500 hover:bg-pink-500/5'
          }`}
        >
          <FaHeart className={`transition-all duration-300 ${isLiked ? 'scale-110' : ''}`} />
          <span className="text-sm">2.1K</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors px-3 py-2 rounded-lg hover:bg-blue-400/5">
          <FaComment />
          <span className="text-sm">89</span>
        </button>
        
        <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors px-3 py-2 rounded-lg hover:bg-green-400/5">
          <FaShare />
          <span className="text-sm">45</span>
        </button>
      </div>

      {/* Call to Action */}
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
          Follow on TikTok
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-lg"></div>
      
      {/* Animated border on hover */}
      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 blur-sm -z-10`}></div>
    </div>
    </div>
  );
};

export default TikTokCard;