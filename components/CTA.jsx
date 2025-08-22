import React from 'react'

const CTA = () => {
  return (
<div className="py-16 px-4 mt-25">
  <div className="max-w-7xl mx-auto">
    {/* Main CTA Container */}
    <div className="relative overflow-hidden border border-gray-200 rounded-2xl">

      
      {/* Content */}
      <div className="relative z-10 text-center py-12 px-8">
        {/* Icon/Visual Element */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mb-6">
          <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Let's Create Something Amazing
        </h3>
        
        {/* Subheading */}
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Ready to bring your creative vision to life with professional design and content creation that stands out from the crowd.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
            Start Your Project
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CTA