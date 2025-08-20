import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dataset() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{backgroundColor: '#12a2df'}}>
      {/* Navigation Header */}
      <header className="fixed top-0 w-full border-b border-gray-200 z-50 shadow-sm h-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
                         {/* Logo Section */}
             <div className="flex-shrink-0">
               <a href="/" className="flex items-center" aria-label="Universal Drug Discovery">
                 <img src="/udd-logo.png" alt="UDD - Universal Drug Discovery" className="h-8 lg:h-20 w-auto" />
               </a>
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
                      {/* HIV Card */}
                      <div 
                        onClick={() => window.location.href = '/products/HIV'}
                        className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <span className="text-gray-900 font-medium">HIV</span>
                        <button className="w-8 h-8 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Dengue Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-gray-900 font-medium">Dengue</span>
                        <button className="w-8 h-8 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Lung Cancer Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-gray-900 font-medium">Lung cancer <span className="text-gray-400 text-sm">(coming soon)</span></span>
                        <button className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Radioactive Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                        <span className="text-gray-900 font-medium">Radioactive <span className="text-gray-400 text-sm">(coming soon)</span></span>
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
                    onClick={() => window.location.href = '/dataset'}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Datasets
                  </button>

                  <button
                    onClick={() => window.location.href = '/publications'}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Publications
                  </button>
                  <button
                    onClick={() => window.location.href = '/company'}
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
                onClick={() => scrollToSection('contact')}
                style={{backgroundColor: '#12a2df'}}
                className="hover:bg-yellow-500 text-gray-900 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
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
                                 <button onClick={() => window.location.href = '/products'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Products</button>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <button onClick={() => window.location.href = '/dataset'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Datasets</button>

                  <button onClick={() => window.location.href = '/publications'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Publications</button>
                  <button onClick={() => window.location.href = '/company'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Company</button>
                </div>
                <div className="flex space-x-3 px-3 pt-2">
                  <button onClick={() => scrollToSection('contact')} style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">Contact Us</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Dataset Section */}
        <section className="py-16 lg:py-20" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            {/* Yellow Banner */}
            <div className="bg-white text-black px-6 py-3 rounded-lg text-lg font-bold mb-8 inline-block">
              DATASET
            </div>
            
            {/* Main Text */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-16">
              We did the lab work to create the world's largest human toxicity dataset
            </h1>
            
            {/* Data Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">115,000+</div>
                <div className="text-lg text-gray-600">Unique small molecules</div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">1,300+</div>
                <div className="text-lg text-gray-600">Unique targets</div>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">50,000+</div>
                <div className="text-lg text-gray-600">Unique scaffolds</div>
              </div>
              
              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">3,300+</div>
                <div className="text-lg text-gray-600">Macrocyclic compounds</div>
              </div>
              
              {/* Card 5 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">9,500+</div>
                <div className="text-lg text-gray-600">PROTACs and molecular glues</div>
              </div>
              
              {/* Card 6 */}
              <div className="bg-white rounded-xl shadow-2xl p-8 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">700+</div>
                <div className="text-lg text-gray-600">Clinical molecules from FDA's DILIrank</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Left Section - Axiom Brand */}
              <div className="md:col-span-1">
                               <img src="/udd-logo.png" alt="UDD - Universal Drug Discovery" className="h-12 w-auto mb-2" />
                <p className="text-gray-700 mb-8">Faster and Accurate drug discovery</p>
                <p className="text-gray-700 text-sm">© 2025</p>
              </div>

              {/* Products Column */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Products</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => navigate('/products/HIV')} className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out text-left">HIV</button></li>
                                  <li><span className="text-gray-600">Radioactive <span className="text-gray-400">(coming soon)</span></span></li>
                <li><span className="text-gray-600">Dengue <span className="text-gray-400">(coming soon)</span></span></li>
                <li><span className="text-gray-600">Lung cancer <span className="text-gray-400">(coming soon)</span></span></li>
                </ul>
              </div>

              {/* Dataset Column */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Dataset</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => navigate('/dataset')} className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out text-left">How it works</button></li>
                </ul>
              </div>



              {/* Company Column */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => navigate('/company')} className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out text-left">About us</button></li>
                  <li><span className="text-gray-600">LinkedIn</span></li>
                  <li><span className="text-gray-600">Press kit</span></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Dataset;
