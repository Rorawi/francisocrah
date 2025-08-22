import React from 'react'

const ContentCreationStoryTelling = () => {
    // TikTok video data
    const tiktokVideo = {
        url: "https://www.tiktok.com/@talesmoon567/video/7537322761304165638",
        thumbnail: "/images/lilian-logo.jpg",
        username: "talesmoon567",
        displayName: "Creative Media ✨",
        description: "PART 4 This is Why You Should Never Introduce Your LOVER to Your FRIENDS_1_1 #storytelling #storyteller #folklore",
        likes: "482",
        comments: "129",
        shares: "8",
        music: "original sound - Tales Moon",
        verified: true
    };

    const handleTikTokClick = () => {
        window.open(tiktokVideo.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div>
            <div className="py-[75px] container mx-auto lg:px-4 text-center max-w-[1430px]">
                <h2 className="text-5xl text-center pt-25 font-bold text-[#111827] font-bagel px-4 pb-6 border-b border-gray-200 mb-2">
                    Content Creation
                </h2>

                <div className="flex justify-center items-center p-8">
                    {/* TikTok Mobile Feed Container */}
                    <div className="relative w-[350px] h-[645px] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
                        
                        {/* TikTok Top Bar */}
                        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent">
                            <div className="flex justify-center items-center pt-4 pb-4">
                                <div className="flex space-x-8 text-white text-xs font-semibold">
                                    <button className="opacity-60">Live</button>
                                    <button className="opacity-60">Following</button>
                                    <button className="border-b-2 border-white pb-1">For You</button>
                                </div>
                            </div>
                        </div>

                        {/* Video Content Area */}
                        <div 
                            className="absolute inset-0 cursor-pointer group"
                            onClick={handleTikTokClick}
                        >
                            {/* Background Video Thumbnail */}
                            <div className="w-full h-full relative">
                                <img 
                                    src={tiktokVideo.thumbnail} 
                                    alt="TikTok video thumbnail"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 flex items-center justify-center" style={{display: 'none'}}>
                                    <div className="text-center text-white">
                                        <div className="text-8xl mb-4">🎨</div>
                                        <p className="text-lg font-bold">Tales Moon</p>
                                    </div>
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center space-y-6">
                            {/* Profile Picture */}
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg font-bold">
                                        TM
                                    </div>
                                </div>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                        +
                                    </div>
                                </div>
                            </div>

                            {/* Like Button */}
                            <div className="flex flex-col items-center">
                                <button className="w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                </button>
                                <span className="text-white text-xs font-semibold mt-1">{tiktokVideo.likes}</span>
                            </div>

                            {/* Comment Button */}
                            <div className="flex flex-col items-center">
                                <button className="w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                    </svg>
                                </button>
                                <span className="text-white text-xs font-semibold mt-1">{tiktokVideo.comments}</span>
                            </div>

                            {/* Share Button */}
                            <div className="flex flex-col items-center">
                                <button className="w-12 h-12 flex items-center justify-center text-white hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                                    </svg>
                                </button>
                                <span className="text-white text-xs font-semibold mt-1">{tiktokVideo.shares}</span>
                            </div>

                            {/* Spinning Record */}
                            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden animate-spin" style={{animationDuration: '3s'}}>
                                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Content Info */}
                        <div className="absolute left-4 right-16 bottom-6 z-20 text-white">
                            {/* Username */}
                            <div className="flex items-center mb-2">
                                <span className="font-semibold text-base">@{tiktokVideo.username}</span>
                                {/* {tiktokVideo.verified && (
                                    <svg className="w-5 h-5 ml-1 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                )} */}
                            </div>
                            
                            {/* Description */}
                            <p className="text-xs mb-3 leading-relaxed text-left">
                                {tiktokVideo.description}
                            </p>

                            {/* Music */}
                            <div className="flex items-center text-xs">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                </svg>
                                <span className="truncate">{tiktokVideo.music}</span>
                            </div>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent hidden">
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                                <div className="w-32 h-1 bg-white bg-opacity-30 rounded-full"></div>
                            </div>
                        </div>

                        {/* Click to View Badge */}
                        <div className="absolute top-20 right-4 z-30 hidden">
                            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium">
                                Tap to view
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentCreationStoryTelling