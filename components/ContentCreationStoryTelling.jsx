import React from 'react'

const ContentCreationStoryTelling = () => {
    return (
        <div>
            <div className="py-[75px] container mx-auto lg:px-4 text-center max-w-[1430px]">
                <p className="text-6xl text-center pt-25 font-bold text-dark text-[75px] mb-1 font-bagel">Content Creation || Video Editing</p>


                <div className="flex justify-center items-stretch p-8 gap-5">

                    <div className="max-w-md mx-auto text-start bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">

                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-3">
                                <div className="story-ring">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                            CM
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm">creative_media</h3>
                                    <p className="text-gray-500 text-xs">2 hours ago</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="relative aspect-square bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">🎨</div>
                                    <h2 className="text-2xl font-bold mb-2">Creative Design</h2>
                                    <p className="text-sm opacity-90 px-4">Latest project showcase</p>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex space-x-4">
                                    <button className="glass-effect text-white p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </button>
                                    <button className="glass-effect text-white p-3 rounded-full hover:bg-white hover:bg-opacity-20 transition-all">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute top-2 left-2 right-2">
                                <div className="flex space-x-1">
                                    <div className="flex-1 h-0.5 bg-white bg-opacity-30 rounded-full"></div>
                                    <div className="flex-1 h-0.5 bg-white rounded-full"></div>
                                    <div className="flex-1 h-0.5 bg-white bg-opacity-30 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-4">
                                    <button className="hover:text-red-500 transition-colors group">
                                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                        </svg>
                                    </button>
                                    <button className="hover:text-blue-500 transition-colors group">
                                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                        </svg>
                                    </button>
                                    <button className="hover:text-green-500 transition-colors group">
                                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button className="hover:text-gray-600 transition-colors group">
                                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-2">
                                <p className="font-semibold text-sm text-gray-900">1,247 likes</p>
                            </div>

                            <div className="mb-2">
                                <p className="text-sm text-gray-900">
                                    <span className="font-semibold">creative_media</span>
                                    <span className="ml-1">Just finished this amazing brand identity project! ✨ What do you think?
                                        <span className="text-blue-600">#design #branding #creative</span></span>
                                </p>
                            </div>

                            <button className="text-gray-500 text-sm hover:text-gray-700 transition-colors">
                                View all 23 comments
                            </button>

                            <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">2 hours ago</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContentCreationStoryTelling