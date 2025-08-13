import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dataset() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#ede9e6]">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full border-b border-gray-200 z-50 shadow-sm bg-[#ede9e6] " >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => navigate('/')}
                className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
              >
                Axiom
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-6">
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Products
                    </button>
                    
                    {/* Products Dropdown */}
                    {isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 z-50">
                        <div className="grid grid-cols-2 gap-4">
                          {/* Liver Card */}
                          <div 
                            onClick={() => navigate('/products/liver')}
                            className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <span className="text-gray-900 font-medium">Liver</span>
                            <button className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                              </svg>
                            </button>
                          </div>
                          
                          {/* Immunogenicity Card */}
                          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-gray-900 font-medium">Immunogenicity <span className="text-gray-400 text-sm">(coming soon)</span></span>
                            <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                              </svg>
                            </button>
                          </div>
                          
                          {/* Heart Card */}
                          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-gray-900 font-medium">Heart <span className="text-gray-400 text-sm">(coming soon)</span></span>
                            <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                              </svg>
                            </button>
                          </div>
                          
                          {/* Kidney Card */}
                          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                            <span className="text-gray-900 font-medium">Kidney <span className="text-gray-400 text-sm">(coming soon)</span></span>
                            <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => navigate('/dataset')}
                    className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-yellow-400"
                  >
                    Datasets
                  </button>
                  <button
                    onClick={() => navigate('/security')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Security
                  </button>
                  <button
                    onClick={() => navigate('/publications')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Publications
                  </button>
                  <button
                    onClick={() => navigate('/company')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Company
                  </button>
                </div>
              </div>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => navigate('/#contact')}
                style={{backgroundColor: '#ffe24e'}}
                className="hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </button>
              <button 
                style={{backgroundColor: '#ffe24e'}}
                className="hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                Try Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button onClick={() => navigate('/products')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Products</button>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <button onClick={() => navigate('/dataset')} className="text-gray-900 px-3 py-2 text-left bg-yellow-400 rounded">Datasets</button>
                  <button onClick={() => navigate('/security')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Security</button>
                  <button onClick={() => navigate('/publications')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Publications</button>
                  <button onClick={() => navigate('/company')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Company</button>
                </div>
                <div className="flex space-x-3 px-3 pt-2">
                  <button onClick={() => navigate('/#contact')} style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">Contact Us</button>
                  <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">Try Demo</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Dataset Section */}
        <section className="py-16 lg:py-20" style={{backgroundColor: '#f2efea'}}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            {/* Yellow Banner */}
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-bold mb-8 inline-block">
              DATASET
            </div>
            
            {/* Main Text */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-16">
              We did the lab work to<br />
              create the world's largest<br />
              human toxicity dataset
            </h1>
            
            {/* Data Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">115,000+</div>
                <div className="text-lg text-gray-600">Unique small molecules</div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">1,300+</div>
                <div className="text-lg text-gray-600">Unique targets</div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">50,000+</div>
                <div className="text-lg text-gray-600">Unique scaffolds</div>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">3,300+</div>
                <div className="text-lg text-gray-600">Macrocyclic compounds</div>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">9,500+</div>
                <div className="text-lg text-gray-600">PROTACs and molecular glues</div>
              </div>
              
              {/* Card 6 */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">700+</div>
                <div className="text-lg text-gray-600">Clinical molecules from FDA's DILIrank</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Explore Axiom's Data Section */}
        <section className="py-16 lg:py-20 bg-[#ede9e6]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Explore Axiom's data
            </h2>
          </div>
        </section>
        
        {/* Axiom Bioatlas Interface Section */}
        <section className="py-16 lg:py-20 bg-[#ede9e6]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
              {/* Top Bar */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <h3 className="text-white font-semibold text-lg">Axiom Bioatlas</h3>
                  <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">remove contour</button>
                  <div className="relative">
                    <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 flex items-center space-x-2">
                      <span>color</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 text-sm">530,060 points</span>
                  <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm hover:bg-gray-600">clear</button>
                </div>
              </div>
              
              {/* Main Interface */}
              <div className="flex h-96">
                {/* Left Sidebar */}
                <div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
                  <div className="space-y-4">
                    {/* Phenotypic Clusters - Selected */}
                    <div className="bg-yellow-400 bg-opacity-20 border border-yellow-400 rounded-lg p-3">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded"></div>
                        <span className="text-white font-medium">Phenotypic Clusters</span>
                      </div>
                      <p className="text-gray-300 text-xs">Click points to view images of cells</p>
                    </div>
                    
                    {/* All Clusters */}
                    <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded"></div>
                        <span className="text-white font-medium">All Clusters</span>
                      </div>
                      <p className="text-gray-300 text-xs">Colored by similarity</p>
                    </div>
                    
                    {/* Cell Death */}
                    <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-400 rounded"></div>
                        <span className="text-white font-medium">Cell Death</span>
                      </div>
                      <p className="text-gray-300 text-xs">Nuclei count decrease</p>
                    </div>
                    
                    {/* Liver Bioactivity */}
                    <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded"></div>
                        <span className="text-white font-medium">Liver Bioactivity</span>
                      </div>
                      <p className="text-gray-300 text-xs">Any significant morphological changes</p>
                    </div>
                    
                    {/* Cytoplasm Vacuolization */}
                    <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                        <span className="text-white font-medium">Cytoplasm Vacuolization</span>
                      </div>
                      <p className="text-gray-300 text-xs">Endoplasmic Reticulum Stress</p>
                    </div>
                    
                    {/* DILIrank */}
                    <div className="hover:bg-gray-700 rounded-lg p-3 cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-gray-400 rounded"></div>
                        <span className="text-white font-medium">DILIrank</span>
                      </div>
                      <p className="text-gray-300 text-xs">Compounds in DILIrank</p>
                    </div>
                  </div>
                  
                  {/* Interaction Hints */}
                  <div className="mt-8 pt-4 border-t border-gray-700">
                    <div className="text-gray-400 text-xs space-y-1">
                      <p>drag to pan</p>
                      <p>scroll to zoom</p>
                      <p>click point for details</p>
                    </div>
                  </div>
                </div>
                
                {/* Central Visualization */}
                <div className="flex-1 bg-black relative">
                  {/* Data Visualization Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg m-4"></div>
                  </div>
                  
                  {/* Scattered Data Points */}
                  <div className="absolute inset-0 p-4">
                    <div className="w-full h-full relative">
                      {/* Yellow dots (Phenotypic Clusters) */}
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-2/5 left-2/5 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="absolute top-3/5 left-3/5 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      
                      {/* Blue dots */}
                      <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-blue-400 rounded-full"></div>
                      
                      {/* Pink dots */}
                      <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full"></div>
                      
                      {/* Green dots */}
                      <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-green-400 rounded-full"></div>
                      
                      {/* Purple dots */}
                      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-purple-400 rounded-full"></div>
                      
                      {/* Orange dots */}
                      <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="absolute top-4/5 left-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                      
                      {/* Grey dots */}
                      <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-gray-400 rounded-full"></div>
                      <div className="absolute top-5/6 left-5/6 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Right Sidebar */}
                <div className="w-80 bg-gray-800 border-l border-gray-700 p-4 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Cluster Breakdown */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Cluster Breakdown</h4>
                      <p className="text-gray-300 text-xs mb-3">drag to select range, click to select category</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <span className="text-white text-sm">Cluster 34</span>
                          </div>
                          <span className="text-gray-300 text-sm">2,590</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <span className="text-white text-sm">Cluster 15</span>
                          </div>
                          <span className="text-gray-300 text-sm">2,159</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                            <span className="text-white text-sm">Cluster 38</span>
                          </div>
                          <span className="text-gray-300 text-sm">1,847</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span className="text-white text-sm">(null)</span>
                          </div>
                          <span className="text-gray-300 text-sm">518,838</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pathway Section */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Pathway</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Metabolic Enzyme/Protease</span>
                          <span className="text-gray-300 text-sm">42K, 18.9%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '18.9%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Anti-infection</span>
                          <span className="text-gray-300 text-sm">30K, 13.8%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '13.8%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Others</span>
                          <span className="text-gray-300 text-sm">30K, 13.6%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '13.6%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Neuronal Signaling</span>
                          <span className="text-gray-300 text-sm">28K, 12.8%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '12.8%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Apoptosis</span>
                          <span className="text-gray-300 text-sm">27K, 12.1%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '12.1%'}}></div>
                        </div>
                        
                        <button className="text-yellow-400 text-sm hover:text-yellow-300">↓ Show more</button>
                      </div>
                    </div>
                    
                    {/* Target Section */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Target</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Others</span>
                          <span className="text-gray-300 text-sm">30K, 26.9%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '26.9%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Apoptosis</span>
                          <span className="text-gray-300 text-sm">22K, 19.4%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '19.4%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Bacterial</span>
                          <span className="text-gray-300 text-sm">15K, 13.8%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '13.8%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Autophagy</span>
                          <span className="text-gray-300 text-sm">13K, 11.8%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '11.8%'}}></div>
                        </div>
                        
                        <button className="text-yellow-400 text-sm hover:text-yellow-300">↓ Show more</button>
                      </div>
                    </div>
                    
                    {/* Clinical Information Section */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Clinical Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">No Development Reported</span>
                          <span className="text-gray-300 text-sm">140K, 26.4%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '26.4%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Launched</span>
                          <span className="text-gray-300 text-sm">43K, 8.2%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '8.2%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Phase 2</span>
                          <span className="text-gray-300 text-sm">10K, 2.0%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '2.0%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Phase 1</span>
                          <span className="text-gray-300 text-sm">5K, 0.9%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '0.9%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Phase 3</span>
                          <span className="text-gray-300 text-sm">4.9K, 0.9%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '0.9%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Phase 4</span>
                          <span className="text-gray-300 text-sm">831, 0.2%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '0.2%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">Launch</span>
                          <span className="text-gray-300 text-sm">100, 0.0%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '0.1%'}}></div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm">(null)</span>
                          <span className="text-gray-300 text-sm">326K (61.4%)</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-yellow-400 h-2 rounded-full" style={{width: '61.4%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* QED Section */}
                    <div>
                      <h4 className="text-white font-medium mb-3">QED</h4>
                      <div className="bg-gray-700 rounded-lg p-3">
                        <div className="text-center text-gray-300 text-xs mb-2">Druglikeness</div>
                        <div className="flex items-end justify-between h-20">
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '60%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '80%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '100%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '70%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '50%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '30%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '20%'}}></div>
                          <div className="w-2 bg-yellow-400 rounded-t" style={{height: '10%'}}></div>
                        </div>
                        <div className="text-center text-gray-300 text-xs mt-1">0 - 50,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
               
               {/* Microscopy Images Section */}
               <section className="py-16 lg:py-20 bg-[#ede9e6]">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                     {/* 2D PHH Cell Model */}
                     <div className="relative">
                       <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">2D PHH Cell Model</h3>
                       <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                         {/* Cell Painting Banner */}
                         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                           <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold">
                             Cell painting
                           </div>
                         </div>
                         
                         {/* 2D PHH Cell Model Image */}
                         <div className="w-full h-80 bg-gradient-to-br from-blue-400 via-green-400 to-orange-400 relative">
                           {/* Blue nuclei */}
                           <div className="absolute inset-0">
                             <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-1/3 left-1/3 w-3 h-4 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-2/5 left-2/5 w-4 h-3 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-1/2 left-1/2 w-3 h-4 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-3/5 left-3/5 w-4 h-3 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-2/3 left-2/3 w-3 h-4 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-3/4 left-1/4 w-4 h-3 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-1/4 left-3/4 w-3 h-4 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-4/5 left-1/5 w-4 h-3 bg-blue-500 rounded-full"></div>
                             <div className="absolute top-1/5 left-4/5 w-3 h-4 bg-blue-500 rounded-full"></div>
                           </div>
                           
                           {/* Green cytoskeleton network */}
                           <div className="absolute inset-0 opacity-60">
                             <div className="absolute top-0 left-0 w-full h-full">
                               <svg className="w-full h-full" viewBox="0 0 400 320">
                                 <path d="M50 50 Q100 30 150 50 T250 50 Q300 70 350 50" stroke="#22c55e" strokeWidth="2" fill="none"/>
                                 <path d="M50 100 Q100 80 150 100 T250 100 Q300 120 350 100" stroke="#22c55e" strokeWidth="2" fill="none"/>
                                 <path d="M50 150 Q100 130 150 150 T250 150 Q300 170 350 150" stroke="#22c55e" strokeWidth="2" fill="none"/>
                                 <path d="M50 200 Q100 180 150 200 T250 200 Q300 220 350 200" stroke="#22c55e" strokeWidth="2" fill="none"/>
                                 <path d="M50 250 Q100 230 150 250 T250 250 Q300 270 350 250" stroke="#22c55e" strokeWidth="2" fill="none"/>
                                 <path d="M50 50 L50 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M100 50 L100 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M150 50 L150 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M200 50 L200 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M250 50 L250 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M300 50 L300 250" stroke="#22c55e" strokeWidth="2"/>
                                 <path d="M350 50 L350 250" stroke="#22c55e" strokeWidth="2"/>
                               </svg>
                             </div>
                           </div>
                           
                           {/* Orange/Red organelles */}
                           <div className="absolute inset-0">
                             <div className="absolute top-1/6 left-1/6 w-2 h-3 bg-orange-500 rounded-full"></div>
                             <div className="absolute top-1/5 left-1/5 w-3 h-2 bg-red-500 rounded-full"></div>
                             <div className="absolute top-2/5 left-2/5 w-2 h-3 bg-orange-500 rounded-full"></div>
                             <div className="absolute top-1/2 left-1/2 w-3 h-2 bg-red-500 rounded-full"></div>
                             <div className="absolute top-3/5 left-3/5 w-2 h-3 bg-orange-500 rounded-full"></div>
                             <div className="absolute top-2/3 left-2/3 w-3 h-2 bg-red-500 rounded-full"></div>
                             <div className="absolute top-3/4 left-1/4 w-2 h-3 bg-orange-500 rounded-full"></div>
                             <div className="absolute top-1/4 left-3/4 w-3 h-2 bg-red-500 rounded-full"></div>
                             <div className="absolute top-4/5 left-1/5 w-2 h-3 bg-orange-500 rounded-full"></div>
                             <div className="absolute top-1/5 left-4/5 w-3 h-2 bg-red-500 rounded-full"></div>
                           </div>
                         </div>
                       </div>
                     </div>
                     
                     {/* 2D+ Multi-cell Hepatic System */}
                     <div className="relative">
                       <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">2D+ Multi-cell Hepatic System</h3>
                       <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
                         {/* DIV5 Banner */}
                         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                           <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold">
                             <span className="text-base">DIV5</span><br />
                             <span className="text-xs">(Pre-dosing baseline)</span>
                           </div>
                         </div>
                         
                         {/* 2D+ Multi-cell Hepatic System Image */}
                         <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-400 relative">
                           {/* Cellular monolayer background */}
                           <div className="absolute inset-0">
                             <div className="absolute top-0 left-0 w-full h-full">
                               <svg className="w-full h-full" viewBox="0 0 400 320">
                                 {/* Cell boundaries */}
                                 <path d="M20 20 L80 20 L80 60 L20 60 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M90 20 L150 20 L150 60 L90 60 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M160 20 L220 20 L220 60 L160 60 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M250 20 L310 20 L310 60 L250 60 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M320 20 L380 20 L380 60 L320 60 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 
                                 <path d="M20 80 L80 80 L80 120 L20 120 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M90 80 L150 80 L150 120 L90 120 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M160 80 L220 80 L220 120 L160 120 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M250 80 L310 80 L310 120 L250 120 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M320 80 L380 80 L380 120 L320 120 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 
                                 <path d="M20 140 L80 140 L80 180 L20 180 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M90 140 L150 140 L150 180 L90 180 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M160 140 L220 140 L220 180 L160 180 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M250 140 L310 140 L310 180 L250 180 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M320 140 L380 140 L380 180 L320 180 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 
                                 <path d="M20 200 L80 200 L80 240 L20 240 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M90 200 L150 200 L150 240 L90 240 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M160 200 L220 200 L220 240 L160 240 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M250 200 L310 200 L310 240 L250 240 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M320 200 L380 200 L380 240 L320 240 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 
                                 <path d="M20 260 L80 260 L80 300 L20 300 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M90 260 L150 260 L150 300 L90 300 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M160 260 L220 260 L220 300 L160 300 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M250 260 L310 260 L310 300 L250 300 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                                 <path d="M320 260 L380 260 L380 300 L320 300 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1"/>
                               </svg>
                             </div>
                           </div>
                           
                           {/* Dark cellular structures/debris */}
                           <div className="absolute inset-0">
                             <div className="absolute top-1/6 left-1/6 w-3 h-4 bg-gray-800 rounded"></div>
                             <div className="absolute top-1/5 left-1/5 w-4 h-3 bg-gray-800 rounded"></div>
                             <div className="absolute top-2/5 left-2/5 w-3 h-4 bg-gray-800 rounded"></div>
                             <div className="absolute top-1/2 left-1/2 w-4 h-3 bg-gray-800 rounded"></div>
                             <div className="absolute top-3/5 left-3/5 w-3 h-4 bg-gray-800 rounded"></div>
                             <div className="absolute top-2/3 left-2/3 w-4 h-3 bg-gray-800 rounded"></div>
                             <div className="absolute top-3/4 left-1/4 w-3 h-4 bg-gray-800 rounded"></div>
                             <div className="absolute top-1/4 left-3/4 w-4 h-3 bg-gray-800 rounded"></div>
                             <div className="absolute top-4/5 left-1/5 w-3 h-4 bg-gray-800 rounded"></div>
                             <div className="absolute top-1/5 left-4/5 w-4 h-3 bg-gray-800 rounded"></div>
                             
                             <div className="absolute top-1/3 left-1/3 w-2 h-3 bg-gray-900 rounded"></div>
                             <div className="absolute top-2/3 left-2/3 w-3 h-2 bg-gray-900 rounded"></div>
                             <div className="absolute top-1/2 left-1/2 w-2 h-3 bg-gray-900 rounded"></div>
                             <div className="absolute top-3/4 left-1/4 w-3 h-2 bg-gray-900 rounded"></div>
                             <div className="absolute top-1/4 left-3/4 w-2 h-3 bg-gray-900 rounded"></div>
                           </div>
                           
                           {/* Nuclei within cells */}
                           <div className="absolute inset-0">
                             <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-1/4 left-1/2 w-5 h-6 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-1/4 left-3/4 w-6 h-5 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-1/2 left-1/4 w-5 h-6 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-1/2 left-1/2 w-6 h-5 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-1/2 left-3/4 w-5 h-6 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-3/4 left-1/4 w-6 h-5 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-3/4 left-1/2 w-5 h-6 bg-gray-300 rounded-full"></div>
                             <div className="absolute top-3/4 left-3/4 w-6 h-5 bg-gray-300 rounded-full"></div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>
               
               {/* Statistics Cards Section */}
               <section className="py-16 lg:py-20 bg-[#ede9e6]  ">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Left Card - Human Hours */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">7,000+</div>
                       <div className="text-lg text-gray-600">Human hours spent labeling images</div>
                     </div>
                     
                     {/* Middle Card - Cells Identified */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">394+ million</div>
                       <div className="text-lg text-gray-600">Individual cells identified and labeled</div>
                     </div>
                     
                     {/* Right Card - Mitochondria Labeled */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">9+ billion</div>
                       <div className="text-lg text-gray-600">Individual mitochondria labeled</div>
                     </div>
                   </div>
                 </div>
               </section>
               
               {/* Clinical Toxicity Dataset Section */}
               <section className="py-16 lg:py-20" style={{backgroundColor: '#f2efea'}}>
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                   {/* Main Heading */}
                   <div className="text-center mb-16">
                     <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                       We curated the world's largest clinical toxicity dataset
                     </h2>
                   </div>
                   
                   {/* Clinical Toxicity Data Cards */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Left Card - Molecules Annotated */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">10,000+</div>
                       <div className="text-lg text-gray-600">Molecules annotated with clinical toxicity outcomes</div>
                     </div>
                     
                     {/* Middle Card - Liver Enzyme Datapoints */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">68,400+</div>
                       <div className="text-lg text-gray-600">Individual liver enzyme datapoints</div>
                     </div>
                     
                     {/* Right Card - Cmax, AUC, and Half-life Datapoints */}
                     <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">95,000+</div>
                       <div className="text-lg text-gray-600">Cmax, AUC, and half-life datapoints</div>
                     </div>
                   </div>
                 </div>
               </section>
               
               {/* Feature Cards Section */}
               <section className="py-16 lg:py-20 bg-[#ede9e6]">
                 <div className="max-w-7xl mx-auto px-6 lg:px-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {/* Card 1 - Grade 3/4 events */}
                     <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                         </svg>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Grade 3/4 events</h3>
                     </div>
                     
                     {/* Card 2 - AST/ALT elevation */}
                     <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                         </svg>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">AST/ALT elevation</h3>
                     </div>
                     
                     {/* Card 3 - Human PK/PD */}
                     <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                         </svg>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Human PK/PD</h3>
                     </div>
                     
                     {/* Card 4 - Drug induced liver injury */}
                     <div className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                       <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                         <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                         </svg>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900">Drug induced liver injury</h3>
                     </div>
                   </div>
                 </div>
               </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f4f2f0] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left Section - Axiom Brand */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Axiom</h3>
              <p className="text-gray-700 mb-8">Eliminate drug toxicity</p>
              <p className="text-gray-700 text-sm">© 2025</p>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Products</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/products/liver')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Liver</button></li>
                <li><span className="text-gray-600">Brain <span className="text-gray-400">(coming soon)</span></span></li>
                <li><span className="text-gray-600">Immunogenicity <span className="text-gray-400">(coming soon)</span></span></li>
                <li><span className="text-gray-600">Heart <span className="text-gray-400">(coming soon)</span></span></li>
              </ul>
            </div>

            {/* Dataset Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Dataset</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/dataset')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">How it works</button></li>
              </ul>
            </div>

            {/* Security Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Security</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/security')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">Information</button></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/company')} className="text-gray-600 hover:text-gray-900 transition-colors text-left">About us</button></li>
                <li><span className="text-gray-600">LinkedIn</span></li>
                <li><span className="text-gray-600">Press kit</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dataset;
