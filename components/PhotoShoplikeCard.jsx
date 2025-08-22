import React from 'react'

const PhotoShoplikeCard = () => {
    return (
        <div>
            <div className="bg-gray-800 text-white font-sans overflow-hidden">
                <div className="flex h-screen">

                    {/* Left Toolbar */}
                    <div className="w-16 bg-gray-900 flex flex-col items-center py-4 border-r border-gray-700">
                        <div className="space-y-3">
                            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </button>

                            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </button>

                            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                </svg>
                            </button>

                            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>

                            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                    <polyline points="7.5,10 12,15 16.5,10" />
                                </svg>
                            </button>
                        </div>

                        {/* Color Swatches */}
                        <div className="mt-8 space-y-2">
                            <div 
                                className="w-8 h-8 rounded border-2 border-white"
                                style={{ backgroundColor: '#5C1E31' }}
                            ></div>
                            <div 
                                className="w-8 h-8 rounded"
                                style={{ backgroundColor: '#E5A077' }}
                            ></div>
                            <div 
                                className="w-8 h-8 rounded"
                                style={{ backgroundColor: '#99CDF5' }}
                            ></div>
                            <div 
                                className="w-8 h-8 rounded"
                                style={{ backgroundColor: '#5CCDBF' }}
                            ></div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col">
                        {/* Top Menu Bar */}
                        <div className="h-12 bg-gray-900 border-b border-gray-700 flex items-center px-4">
                            <div className="flex items-center space-x-4">
                                <button className="text-sm hover:text-gray-300 transition-colors">File</button>
                                <button className="text-sm hover:text-gray-300 transition-colors">Edit</button>
                                <button className="text-sm hover:text-gray-300 transition-colors">Image</button>
                                <button className="text-sm hover:text-gray-300 transition-colors">Layer</button>
                                <button className="text-sm hover:text-gray-300 transition-colors">Select</button>
                                <button className="text-sm hover:text-gray-300 transition-colors">Filter</button>
                            </div>

                            <div className="ml-auto flex items-center space-x-2">
                                <span className="text-sm text-gray-400">100%</span>
                                <div className="w-px h-4 bg-gray-600"></div>
                                <span className="text-sm text-gray-400">RGB</span>
                            </div>
                        </div>

                        {/* Canvas Area */}
                        <div className="flex-1 bg-gray-600 flex items-center justify-center p-8">
                            <div 
                                className="bg-white rounded-lg shadow-2xl"
                                style={{ width: '600px', height: '400px' }}
                            >
                                <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                                    <div className="text-center text-gray-400">
                                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-lg font-medium">Design Canvas</p>
                                        <p className="text-sm">Your creative work appears here</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Properties Bar */}
                        <div className="h-8 bg-gray-900 border-t border-gray-700 flex items-center px-4 text-xs text-gray-400">
                            <span>Ready</span>
                            <div className="ml-4 flex space-x-4">
                                <span>Width: 600px</span>
                                <span>Height: 400px</span>
                                <span>Resolution: 72 ppi</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panels */}
                    <div className="w-80 bg-gray-900 border-l border-gray-700 flex flex-col">

                        {/* Layers Panel */}
                        <div className="flex-1 border-b border-gray-700">
                            <div className="h-8 bg-gray-800 flex items-center px-3 border-b border-gray-700">
                                <h3 className="text-xs font-semibold uppercase tracking-wide">Layers</h3>
                            </div>
                            <div 
                                className="p-3 space-y-2 overflow-y-auto"
                                style={{ maxHeight: '200px' }}
                            >
                                <div 
                                    className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 transition-colors"
                                    style={{ backgroundColor: 'rgba(92, 30, 49, 0.2)' }}
                                >
                                    <div className="w-4 h-4 bg-white border rounded-sm"></div>
                                    <div className="w-8 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-sm"></div>
                                    <span className="text-sm">Background</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <div className="w-4 h-4 bg-white border rounded-sm"></div>
                                    <div className="w-8 h-6 bg-gray-400 rounded-sm"></div>
                                    <span className="text-sm">Text Layer</span>
                                </div>
                                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 transition-colors">
                                    <div className="w-4 h-4 bg-white border rounded-sm"></div>
                                    <div className="w-8 h-6 bg-blue-400 rounded-sm"></div>
                                    <span className="text-sm">Shape 1</span>
                                </div>
                            </div>
                        </div>

                        {/* Properties Panel */}
                        <div className="flex-1">
                            <div className="h-8 bg-gray-800 flex items-center px-3 border-b border-gray-700">
                                <h3 className="text-xs font-semibold uppercase tracking-wide">Properties</h3>
                            </div>
                            <div className="p-3 space-y-4">
                                {/* Color Properties */}
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wide">Fill</label>
                                    <div className="mt-1 flex space-x-2">
                                        <div 
                                            className="w-8 h-8 rounded border-2 border-gray-600"
                                            style={{ backgroundColor: '#E5A077' }}
                                        ></div>
                                        <input 
                                            type="text" 
                                            defaultValue="#E5A077" 
                                            className="flex-1 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm" 
                                        />
                                    </div>
                                </div>

                                {/* Size Properties */}
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wide">W</label>
                                        <input 
                                            type="text" 
                                            defaultValue="200" 
                                            className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm mt-1" 
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs text-gray-400 uppercase tracking-wide">H</label>
                                        <input 
                                            type="text" 
                                            defaultValue="150" 
                                            className="w-full bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm mt-1" 
                                        />
                                    </div>
                                </div>

                                {/* Opacity */}
                                <div>
                                    <label className="text-xs text-gray-400 uppercase tracking-wide">Opacity</label>
                                    <div className="mt-1 flex items-center space-x-2">
                                        <input 
                                            type="range" 
                                            min="0" 
                                            max="100" 
                                            defaultValue="100" 
                                            className="flex-1 accent-orange-400" 
                                        />
                                        <span className="text-sm w-8">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Effects Panel */}
                        <div className="h-32 border-t border-gray-700">
                            <div className="h-8 bg-gray-800 flex items-center px-3 border-b border-gray-700">
                                <h3 className="text-xs font-semibold uppercase tracking-wide">Effects</h3>
                            </div>
                            <div className="p-3 space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span>Drop Shadow</span>
                                    <input type="checkbox" className="accent-orange-400" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span>Glow</span>
                                    <input type="checkbox" className="accent-orange-400" />
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span>Stroke</span>
                                    <input type="checkbox" defaultChecked className="accent-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoShoplikeCard