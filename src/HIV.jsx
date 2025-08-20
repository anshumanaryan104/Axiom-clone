import React, { useState } from 'react';

function HIV() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#12a2df'}}>
      {/* Header */}
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
      <div className="pt-20">
        {/* HIV Title Section */}
        <section className="py-16" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
            {/* Yellow LIVER INJURY Box */}
            <div className="inline-block px-6 py-2 rounded-lg font-semibold text-sm mb-8 uppercase tracking-wide bg-white">
              LIVER INJURY
            </div>
            
            {/* Main Message */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
              Axiom accurately predicts human hiv toxicity
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
              20-25% of clinical trials fail due to drug-induced hiv injury, Axiom wants to eliminate these failures
            </p>
          </div>
        </section>

                 {/* Benchmark Card Section */}
                          <section className="py-6 bg-[#12a2df]">
                   <div className="max-w-7xl mx-auto px-6 lg:px-8">
                     <div className="bg-white rounded-2xl shadow-lg ">
                       <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                     {/* Left Half */}
                                     <div className="space-y-6 bg-white w-full h-full py-12 rounded-xl px-12">
                     {/* BENCHMARK 1 Tag */}
                     <div className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                       BENCHMARK 1
                     </div>
                  
                  {/* Main Text */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    Pfizer's 2D HepG2 vs. Axiom's Model
                  </h3>
                  
                  {/* Yellow Dropdown Button */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <svg 
                      className={`w-6 h-6 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                </div>

                {/* Right Half */}
                <div className="grid grid-cols-2 gap-8 bg-[#f8f7f6]">
                  {/* Left Sub-section */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                    <p className="text-gray-900 font-medium">Pfizer</p>
                    <p className="text-gray-500 text-sm">2D HepG2</p>
                  </div>
                  
                  {/* Right Sub-section */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium">Axiom</p>
                    <p className="text-gray-500 text-sm">AI model</p>
                  </div>
                </div>
              </div>

              {/* Hidden Dropdown Content */}
              {isDropdownOpen && (
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-center">
                    Additional benchmark data will be displayed here. This content can be customized with charts, metrics, or detailed comparisons.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
                 {/* Benchmark Card Section */}
                 <section className="py-6 bg-[#12a2df]">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-lg ">
               <div className="grid grid-cols-1 lg:grid-cols-2 ">
                                   {/* Left Half */}
                  <div className="space-y-6 bg-white w-full h-full py-12 rounded-xl px-12">
                  {/* BENCHMARK 1 Tag */}
                  <div className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                    BENCHMARK 2
                  </div>
                  
                  {/* Main Text */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    AstraZeneca's 2D PHH imaging vs. Axiom's Model
                  </h3>
                  
                  {/* Yellow Dropdown Button */}
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <svg 
                      className={`w-6 h-6 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                </div>

                {/* Right Half */}
                <div className="grid grid-cols-2 gap-8 bg-[#f8f7f6]">
                  {/* Left Sub-section */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                    <p className="text-gray-900 font-medium">AstraZeneca</p>
                    <p className="text-gray-500 text-sm">2D PHH imaging</p>
                  </div>
                  
                  {/* Right Sub-section */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium">Axiom</p>
                    <p className="text-gray-500 text-sm">AI model</p>
                  </div>
                </div>
              </div>

              {/* Hidden Dropdown Content */}
              {isDropdownOpen && (
                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-600 text-center">
                    Additional benchmark data will be displayed here. This content can be customized with charts, metrics, or detailed comparisons.
                  </p>
                </div>
              )}
            </div>
          </div>
                 </section>

         {/* Benchmark Card Section 3 */}
         <section className="py-6 bg-[#12a2df]">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-lg ">
               <div className="grid grid-cols-1 lg:grid-cols-2 ">
                 {/* Left Half */}
                 <div className="space-y-6 bg-white w-full h-full py-12 rounded-xl px-12">
                   {/* BENCHMARK 3 Tag */}
                   <div className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                     BENCHMARK 3
                   </div>
                   
                   {/* Main Text */}
                   <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                     AstraZeneca's 3D Spheroid vs. Axiom's Model
                   </h3>
                   
                   {/* Yellow Dropdown Button */}
                   <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <svg 
                      className={`w-6 h-6 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                 </div>

                 {/* Right Half */}
                 <div className="grid grid-cols-2 gap-8 bg-[#f8f7f6]">
                   {/* Left Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                       <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                       </svg>
                     </div>
                     <p className="text-gray-900 font-medium">AstraZeneca</p>
                     <p className="text-gray-500 text-sm">3D Spheroid</p>
                   </div>
                   
                   {/* Right Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                         </svg>
                       </div>
                     </div>
                     <p className="text-gray-900 font-medium">Axiom</p>
                     <p className="text-gray-500 text-sm">AI model</p>
                   </div>
                 </div>
               </div>

               {/* Hidden Dropdown Content */}
               {isDropdownOpen && (
                 <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                   <p className="text-gray-600 text-center">
                     Additional benchmark data will be displayed here. This content can be customized with charts, metrics, or detailed comparisons.
                   </p>
                 </div>
               )}
             </div>
           </div>
         </section>
         {/* Benchmark Card Section 4 */}
         <section className="py-6 bg-[#12a2df]">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-lg ">
               <div className="grid grid-cols-1 lg:grid-cols-2 ">
                 {/* Left Half */}
                 <div className="space-y-6 bg-white w-full h-full py-12 rounded-xl px-12">
                   {/* BENCHMARK 4 Tag */}
                   <div className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                     BENCHMARK 4
                   </div>
                   
                   {/* Main Text */}
                   <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                     FDA & Insphero's 3D Spheroid vs. Axiom's Model
                   </h3>
                   
                   {/* Yellow Dropdown Button */}
                   <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <svg 
                      className={`w-6 h-6 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                 </div>

                 {/* Right Half */}
                 <div className="grid grid-cols-2 gap-8 bg-[#f8f7f6]">
                   {/* Left Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                       <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                       </svg>
                     </div>
                     <p className="text-gray-900 font-medium">FDA & Insphero</p>
                     <p className="text-gray-500 text-sm">3D Spheroid</p>
                   </div>
                   
                   {/* Right Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                         </svg>
                       </div>
                     </div>
                     <p className="text-gray-900 font-medium">Axiom</p>
                     <p className="text-gray-500 text-sm">AI model</p>
                   </div>
                 </div>
               </div>

               {/* Hidden Dropdown Content */}
               {isDropdownOpen && (
                 <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                   <p className="text-gray-600 text-center">
                     Additional benchmark data will be displayed here. This content can be customized with charts, metrics, or detailed comparisons.
                   </p>
                 </div>
               )}
             </div>
           </div>
         </section>
         {/* Benchmark Card Section 5 */}
         <section className="py-6 bg-[#12a2df]">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="bg-white rounded-2xl shadow-lg ">
               <div className="grid grid-cols-1 lg:grid-cols-2 ">
                 {/* Left Half */}
                 <div className="space-y-6 bg-white w-full h-full py-12 rounded-xl px-12">
                   {/* BENCHMARK 5 Tag */}
                   <div className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                     BENCHMARK 5
                   </div>
                   
                   {/* Main Text */}
                   <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                     Cyprotex's 3D Spheroid vs. Axiom's Model
                   </h3>
                   
                   {/* Yellow Dropdown Button */}
                   <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                  >
                    <svg 
                      className={`w-6 h-6 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                 </div>

                 {/* Right Half */}
                 <div className="grid grid-cols-2 gap-8 bg-[#f8f7f6]">
                   {/* Left Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                       <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                       </svg>
                     </div>
                     <p className="text-gray-900 font-medium">Cyprotex</p>
                     <p className="text-gray-500 text-sm">3D Spheroid</p>
                   </div>
                   
                   {/* Right Sub-section */}
                   <div className="text-center">
                     <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                       <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                         <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                         </svg>
                       </div>
                     </div>
                     <p className="text-gray-900 font-medium">Axiom</p>
                     <p className="text-gray-500 text-sm">AI model</p>
                   </div>
                 </div>
               </div>

               {/* Hidden Dropdown Content */}
               {isDropdownOpen && (
                 <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                   <p className="text-gray-600 text-center">
                     Additional benchmark data will be displayed here. This content can be customized with charts, metrics, or detailed comparisons.
                   </p>
                 </div>
               )}
             </div>
           </div>
                   </section>

          {/* Proprietary Data Section */}
          <section className="py-16" style={{backgroundColor: '#12a2df'}}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              {/* Main Title */}
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Proprietary data combined<br />
                with the latest ML/AI methods
              </h2>
              
              {/* Descriptive Text */}
              <div className="">
                <p className="text-lg text-gray-700">
                  We did the lab work to build the world's largest human hiv dataset
                </p>
                <p className="text-lg text-gray-700">
                  then used it to train highly accurate models.
                </p>
              </div>
            </div>
                     </section>

           {/* STEP 1 Dataset Section */}
           <section className="py-16 bg-[#12a2df]">
             <div className="max-w-7xl mx-auto px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 {/* Left Column - Dataset Visualization */}
                 <div className="relative">
                   <div className="bg-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center">
                     {/* Compound Dots */}
                     <div className="relative w-full h-full">
                       {/* Light gray dots scattered */}
                       <div className="absolute inset-0">
                         {[...Array(50)].map((_, i) => (
                           <div
                             key={i}
                             className="absolute w-2 h-2 bg-gray-400 rounded-full"
                             style={{
                               left: `${Math.random() * 80 + 10}%`,
                               top: `${Math.random() * 80 + 10}%`,
                             }}
                           />
                         ))}
                       </div>
                       
                       {/* Yellow highlighted dots in top-left */}
                       <div className="absolute top-8 left-8">
                         {[...Array(8)].map((_, i) => (
                           <div
                             key={`yellow-${i}`}
                             className="absolute w-2 h-2 bg-[#12a2df] rounded-full"
                             style={{
                               left: `${i * 8}px`,
                               top: `${i * 6}px`,
                             }}
                           />
                         ))}
                       </div>
                       
                       {/* Text overlay */}
                       <div className="absolute inset-0 flex items-center justify-center">
                         <div className="text-center text-gray-300">
                           <p className="text-lg font-medium">Tens of thousands</p>
                           <p className="text-lg font-medium">of compounds</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Right Column - STEP 1 Information */}
                 <div className="space-y-8">
                   {/* STEP 1 Tag */}
                   <div className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                     STEP 1
                   </div>
                   
                   {/* Main Title */}
                   <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                     We did the lab work to<br />
                     create the world's largest<br />
                     primary human hiv dataset
                   </h2>
                   
                   {/* Bullet Points */}
                   <div className="space-y-6">
                     <div className="flex items-start space-x-4">
                       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                         </svg>
                       </div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         115,000+ molecules exposed to primary human hiv cells.
                       </p>
                     </div>
                     
                     <div className="flex items-start space-x-4">
                       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                         </svg>
                       </div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         High content imaging of key cell organelles paired with biochemical assays.
                       </p>
                     </div>
                     
                     <div className="flex items-start space-x-4">
                       <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                         <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                         </svg>
                       </div>
                       <p className="text-lg text-gray-700 leading-relaxed">
                         <a href="#" className="underline hover:text-gray-900 transition-colors">
                           Learn more about Axiom's training set.
                         </a>
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
                       </section>

            {/* STEP 2 Biological Quantification Section */}
            <section className="py-16 bg-[#12a2df]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                     {/* Left Column - RNA Condensate Microscopy Image */}
                   <div className="relative">
                     <div className="bg-black rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                       {/* Microscopy Image Representation */}
                       <div className="relative w-full h-full">
                         {/* Background - Black microscopy background */}
                         <div className="absolute inset-0 bg-black"></div>
                         
                         {/* Cell Structures - Gray/white cells */}
                         {[...Array(7)].map((_, i) => (
                           <div
                             key={`cell-${i}`}
                             className="absolute bg-gray-200 rounded-full opacity-80"
                             style={{
                               width: `${Math.random() * 80 + 60}px`,
                               height: `${Math.random() * 80 + 60}px`,
                               left: `${Math.random() * 70 + 15}%`,
                               top: `${Math.random() * 70 + 15}%`,
                             }}
                           >
                             {/* Nucleus - Brighter white center */}
                             <div 
                               className="absolute bg-white rounded-full opacity-90"
                               style={{
                                 width: '70%',
                                 height: '70%',
                                 left: '15%',
                                 top: '15%',
                               }}
                             />
                             {/* Nucleolus - Bright white puncta */}
                             <div 
                               className="absolute bg-white rounded-full opacity-100"
                               style={{
                                 width: '20%',
                                 height: '20%',
                                 left: '40%',
                                 top: '40%',
                               }}
                             />
                           </div>
                         ))}
                         
                         {/* RNA Condensates - Bright turquoise/cyan dots */}
                         {[...Array(40)].map((_, i) => (
                           <div
                             key={`rna-${i}`}
                             className="absolute bg-cyan-400 rounded-full"
                             style={{
                               width: `${Math.random() * 8 + 3}px`,
                               height: `${Math.random() * 8 + 3}px`,
                               left: `${Math.random() * 85 + 7}%`,
                               top: `${Math.random() * 85 + 7}%`,
                               opacity: 0.9,
                             }}
                           />
                         ))}
                         
                         {/* Yellow Label */}
                         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold z-10">
                           RNA Condensate (Syto14)
                         </div>
                         
                         {/* Scale Bar at Bottom */}
                         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                           {[...Array(8)].map((_, i) => (
                             <div
                               key={`scale-${i}`}
                               className={`w-3 h-1 rounded ${i % 2 === 0 ? 'bg-white' : 'bg-gray-500'}`}
                             />
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>

                  {/* Right Column - STEP 2 Information */}
                  <div className="space-y-8">
                    {/* STEP 2 Tag */}
                    <div className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                      STEP 2
                    </div>
                    
                    {/* Main Title */}
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      We quantify biology with unprecedented sensitivity
                    </h2>
                    
                    {/* Bullet Points */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          10+ models of unique biology (confluency, ER-stress, mitochondrial toxicity, and more).
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Bile canalicular networks, efflux/uptake transporters, steatosis coming soon.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Points of departure dramatically more sensitive than traditional assays.
                        </p>
                      </div>
                    </div>
                    
                    
                    
                  </div>
                </div>
              </div>
                         </section>

             {/* STEP 3 Model Learning Section */}
             <section className="py-16 bg-[#12a2df]">
               <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                   {/* Left Column - Molecular Interface */}
                   <div className="relative">
                     <div className="bg-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center relative">
                       {/* Molecular Interface Content */}
                       <div className="relative w-full h-full">
                         {/* Sunitinib Tag */}
                         <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded text-sm font-semibold">
                           Sunitinib
                         </div>
                         
                         {/* Bioactivity Tag */}
                         <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded text-sm font-semibold">
                           Bioactivity
                         </div>
                         
                         {/* Molecular Structure Square */}
                         <div className="absolute top-16 left-4 w-32 h-32 border-4 border-yellow-400 rounded-lg bg-gray-800 flex items-center justify-center">
                           {/* Chemical Structure Representation */}
                           <div className="text-white text-xs text-center">
                             <div className="mb-2">C₂₂H₂₇FN₄O₂</div>
                             <div className="w-20 h-16 border border-white rounded flex items-center justify-center">
                               <div className="text-yellow-400 text-xs">Molecular Structure</div>
                             </div>
                           </div>
                         </div>
                         
                         {/* Data Grid Placeholders */}
                         <div className="absolute top-16 right-4 left-40 grid grid-cols-3 gap-3">
                           {[...Array(9)].map((_, i) => (
                             <div
                               key={`placeholder-${i}`}
                               className="w-16 h-12 bg-gray-700 rounded-lg border border-gray-600"
                             />
                           ))}
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Right Column - STEP 3 Information */}
                   <div className="space-y-8">
                     {/* STEP 3 Tag */}
                     <div className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                       STEP 3
                     </div>
                     
                     {/* Main Title */}
                     <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                       Our models learn how<br />
                       chemistry affects biology
                     </h2>
                     
                     {/* Bullet Points */}
                     <div className="space-y-6">
                       <div className="flex items-start space-x-4">
                         <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                           </svg>
                         </div>
                         <p className="text-lg text-gray-700 leading-relaxed">
                           Molecules induce diverse cellular phenotypes.
                         </p>
                       </div>
                       
                       <div className="flex items-start space-x-4">
                         <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                           </svg>
                         </div>
                         <p className="text-lg text-gray-700 leading-relaxed">
                           Axiom's models learn which molecules induce which toxic cell phenotypes.
                         </p>
                       </div>
                       
                       <div className="flex items-start space-x-4">
                         <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                           <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                           </svg>
                         </div>
                         <p className="text-lg text-gray-700 leading-relaxed">
                           For a new molecule, our models predict its cellular phenotype and dose-dependent relationship with toxicity.
                         </p>
                       </div>
                     </div>
                     
                    
                   </div>
                 </div>
               </div>
                           </section>

              {/* STEP 4 Clinical Risk Assessment Section */}
              <section className="py-16 bg-[#12a2df]" >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Clinical Risk Graph */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl p-8 h-96 flex flex-col">
                        {/* Graph Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900">Clinical Risk</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">Cmax: 0.89-45.9 µM</span>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* Graph Area */}
                        <div className="flex-1 relative bg-gray-50 rounded-lg p-4">
                          {/* Risk Zones */}
                          <div className="absolute inset-4">
                            {/* Low Risk Zone (Green) */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-100 rounded-t"></div>
                            {/* Medium Risk Zone (Gray) */}
                            <div className="absolute bottom-1/3 left-0 right-0 h-1/3 bg-gray-100"></div>
                            {/* High Risk Zone (Red) */}
                            <div className="absolute top-0 left-0 right-0 h-1/3 bg-red-100 rounded-b"></div>
                          </div>
                          
                          {/* Y-axis Labels */}
                          <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-gray-600">
                            <span>1.0</span>
                            <span>0.5</span>
                            <span>0.0</span>
                          </div>
                          
                          {/* X-axis Labels */}
                          <div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-gray-600">
                            <span>0.1</span>
                            <span>1</span>
                            <span>10</span>
                            <span>100</span>
                          </div>
                          
                          {/* Risk Curve */}
                          <svg className="absolute inset-4 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Confidence Interval Shading */}
                            <path
                              d="M10,80 Q25,75 40,60 Q55,45 70,30 Q85,20 90,15 L90,25 Q85,30 70,40 Q55,50 40,65 Q25,75 10,80 Z"
                              fill="rgba(59, 130, 246, 0.2)"
                            />
                            {/* Main Risk Curve */}
                            <path
                              d="M10,80 Q25,75 40,60 Q55,45 70,30 Q85,20 90,15"
                              stroke="#3b82f6"
                              strokeWidth="2"
                              fill="none"
                            />
                            {/* Vertical Lines */}
                            <line x1="30" y1="0" x2="30" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                            <line x1="60" y1="0" x2="60" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                          </svg>
                        </div>
                        
                        {/* Legend and Safety Window */}
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">HIV Injury Risk</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-700">Safety Window: 0.09 - 4.44</span>
                              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Visual Scale Bar */}
                          <div className="relative h-4 bg-gray-200 rounded">
                            <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-green-400 rounded-l"></div>
                            <div className="absolute left-1/4 top-0 bottom-0 w-1/4 bg-red-400"></div>
                            <div className="absolute left-1/2 top-0 bottom-0 w-1/2 bg-gray-300 rounded-r"></div>
                            {/* Scale Markers */}
                            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-600"></div>
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600"></div>
                            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-600"></div>
                            {/* Labels */}
                            <div className="absolute -bottom-6 left-0 text-xs text-gray-600">1 µM</div>
                            <div className="absolute -bottom-6 left-1/4 text-xs text-gray-600">10 µM</div>
                            <div className="absolute -bottom-6 left-1/2 text-xs text-gray-600">100 µM</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - STEP 4 Information */}
                    <div className="space-y-8">
                      {/* STEP 4 Tag */}
                      <div className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                        STEP 4
                      </div>
                      
                      {/* Main Title */}
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Precise clinical risk assessment
                      </h2>
                      
                      {/* Bullet Points */}
                      <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Understand the relationship between human exposure and human toxicity.
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Accurately compute the therapeutic index.
                          </p>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed">
                            Reason about toxicity at physiologically relevant concentrations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Inside Our Model Section */}
              <section className="py-16" style={{backgroundColor: '#12a2df'}}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                  {/* Main Title */}
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                    Inside our model: how it works
                  </h2>
                  
                  {/* Descriptive Text */}
                  <p className="text-lg text-gray-700">
                    Axiom uses molecular structure, properties, and cell biology to predict clinical toxicity outcomes.
                  </p>
                </div>
              </section>

              {/* Clinical Risk Assessment Flowchart */}
              <section className="py-16 bg-[#12a2df]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  
                  
                  {/* Flowchart Container */}
                  <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex flex-col lg:flex-row items-stretch space-y-6 lg:space-y-0 lg:space-x-6">
                      
                      {/* Input Card */}
                      <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4 inline-block">
                          Input
                        </div>
                        <div className="text-center">
                          <div className="text-xs font-mono text-gray-700 mb-3 bg-white p-2 rounded border">
                            C[C@@](Cc1ccc(O)c(O)c1)(NN)C(=O)O
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Digital chemical structure</p>
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden lg:flex items-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>

                      {/* Training In Silico Models Card */}
                      <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4 inline-block">
                          Training In Silico Models
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="w-20 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                              <div className="text-xs text-gray-600 text-center">
                                <div className="w-4 h-4 border border-gray-400 mx-auto mb-1"></div>
                                <div className="w-3 h-3 border border-gray-400 mx-auto mb-1"></div>
                                <div className="w-5 h-3 border border-gray-400 mx-auto"></div>
                              </div>
                            </div>
                            <p className="text-xs text-gray-700">115k+ Molecules</p>
                          </div>
                          <div className="text-center">
                            <div className="w-20 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-2 relative overflow-hidden">
                              <div className="w-3 h-3 bg-green-500 rounded-full absolute top-2 left-2"></div>
                              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-3 right-3"></div>
                              <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">10M+ hiv images</p>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden lg:flex items-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>

                      {/* In Silico Biological Predictions Card */}
                      <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4 inline-block">
                          In Silico Biological Predictions
                        </div>
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {/* Top Row - Mitochondria Network Dynamics */}
                          <div className="text-center">
                            <div className="w-16 h-12 bg-red-100 rounded border border-red-200 mb-1 relative overflow-hidden">
                              <div className="w-3 h-3 bg-red-500 rounded-full absolute top-1 left-1"></div>
                              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
                              <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Intact network</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-red-100 rounded border border-red-200 mb-1 relative overflow-hidden">
                              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 left-1"></div>
                              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
                              <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Fragmented</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-red-100 rounded border border-red-200 mb-1 relative overflow-hidden">
                              <div className="w-3 h-3 bg-red-500 rounded-full absolute top-1 left-1"></div>
                              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-2 right-1"></div>
                              <div className="w-4 h-4 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Membrane blebbing</p>
                          </div>
                          
                          {/* Middle Row - Individual Cell Effects */}
                          <div className="text-center">
                            <div className="w-16 h-12 bg-green-100 rounded border border-green-200 mb-1 relative overflow-hidden">
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Cytosol shrinkage</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-green-100 rounded border border-green-200 mb-1 relative overflow-hidden">
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Nuclei fragmentation</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-green-100 rounded border border-green-200 mb-1 relative overflow-hidden">
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Membrane blebbing</p>
                          </div>
                          
                          {/* Bottom Row - Cellular Stress & Structure */}
                          <div className="text-center">
                            <div className="w-16 h-12 bg-cyan-100 rounded border border-cyan-200 mb-1 relative overflow-hidden">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full absolute top-2 left-2"></div>
                              <div className="w-2 h-2 bg-cyan-500 rounded-full absolute top-3 right-2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Oxidative stress</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-green-100 rounded border border-green-200 mb-1 relative overflow-hidden">
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">ER Stress</p>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-12 bg-green-100 rounded border border-green-200 mb-1 relative overflow-hidden">
                              <div className="w-4 h-4 bg-green-500 rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>
                            <p className="text-xs text-gray-700">Cytoskeleton</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 text-center">
                          Many more including... Bioactivity, bile networks, transporters, ADME, steatosis, etc
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden lg:flex items-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>

                      {/* Clinical Training Data Card */}
                      <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4 inline-block">
                          Clinical Training Data
                        </div>
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-700">10,000s clinical trials</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-gray-600 text-center mt-3">
                          Clinical properties: DILI, AST/ALT, cmax, dose, patient population
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden lg:flex items-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                      </div>

                      {/* Clinical Risk Assessment Card */}
                      <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4 inline-block">
                          Clinical Risk Assessment
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">HIV Injury Risk</h4>
                            <div className="flex items-center space-x-1">
                              <span className="text-xs text-gray-600">Cmax: 19.06-89.14 µM</span>
                              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                              </svg>
                            </div>
                          </div>
                          
                          {/* Mini Graph */}
                          <div className="relative h-20 bg-gray-50 rounded border border-gray-200">
                            {/* Risk Zones */}
                            <div className="absolute inset-0">
                              <div className="absolute top-0 left-0 right-0 h-1/3 bg-red-100 rounded-t"></div>
                              <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-gray-100"></div>
                              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-100 rounded-b"></div>
                            </div>
                            
                            {/* Risk Curve */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path
                                d="M10,80 Q25,75 40,60 Q55,45 70,30 Q85,20 90,15"
                                stroke="#3b82f6"
                                strokeWidth="2"
                                fill="none"
                              />
                              {/* Confidence Interval */}
                              <path
                                d="M10,80 Q25,75 40,60 Q55,45 70,30 Q85,20 90,15 L90,25 Q85,30 70,40 Q55,50 40,65 Q25,75 10,80 Z"
                                fill="rgba(59, 130, 246, 0.2)"
                              />
                              {/* Vertical Lines */}
                              <line x1="30" y1="0" x2="30" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                              <line x1="60" y1="0" x2="60" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                            </svg>
                            
                            {/* Axis Labels */}
                            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-600">
                              <span>0.1</span>
                              <span>1</span>
                              <span>10</span>
                              <span>100</span>
                              <span>1000</span>
                            </div>
                          </div>
                          
                          {/* Legend and Risk Bar */}
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">DILI Risk</span>
                            </div>
                            <div className="relative h-3 bg-gray-200 rounded">
                              <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-green-400 rounded-l"></div>
                              <div className="absolute left-1/4 top-0 bottom-0 w-1/4 bg-red-400"></div>
                              <div className="absolute left-1/2 top-0 bottom-0 w-1/2 bg-gray-300 rounded-r"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Web Application Section */}
              <section className="py-16 bg-[#12a2df]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Assess toxicity in a<br />
                    modern web application
                  </h2>
                  <p className="text-lg text-gray-700">
                    Study clinical hiv injury risk with powerful data visualization<br />
                    and predictions.
                  </p>
                </div>
              </section>

              {/* Web Application Interface Demo */}
              <section className="py-16 bg-[#12a2df]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Top Browser Bar */}
                    <div className="bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm text-gray-600">Axiom | Demo | Demo Compounds</div>
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-black">A</div>
                      </div>
                    </div>

                    {/* Main Interface */}
                    <div className="flex">
                      {/* Left Sidebar */}
                      <div className="w-80 bg-gray-50 border-r border-gray-200 p-6">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Nefazodone</h3>
                          <div className="flex space-x-2">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                          </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex mb-6">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-l-lg text-sm font-medium">Overview</button>
                          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-lg text-sm font-medium">Assist</button>
                        </div>

                        {/* PKPD Data */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">PKPD Data</h4>
                          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <table className="w-full text-xs">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-3 py-2 text-left text-gray-600 font-medium">Cmax</th>
                                  <th className="px-3 py-2 text-left text-gray-600 font-medium">Dose</th>
                                  <th className="px-3 py-2 text-left text-gray-600 font-medium">Source</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-t border-gray-100">
                                  <td className="px-3 py-2 text-gray-900">0.927 µM</td>
                                  <td className="px-3 py-2 text-gray-900">-</td>
                                  <td className="px-3 py-2 text-blue-600 underline">source</td>
                                </tr>
                                <tr className="border-t border-gray-100">
                                  <td className="px-3 py-2 text-gray-900">3.95 µM</td>
                                  <td className="px-3 py-2 text-gray-900">-</td>
                                  <td className="px-3 py-2 text-blue-600 underline">source</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Structure */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-3">Structure</h4>
                          <div className="bg-white rounded-lg border border-gray-200 p-4">
                            <div className="w-full h-32 bg-gray-100 rounded flex items-center justify-center relative">
                              {/* Chemical Structure Representation */}
                              <div className="text-xs text-gray-500 text-center">
                                <div className="mb-2">Nefazodone</div>
                                <div className="text-xs">2D Chemical Structure</div>
                              </div>
                              {/* Highlighted atoms */}
                              <div className="absolute top-4 left-8 w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                              <div className="absolute top-8 right-6 w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                              <div className="absolute bottom-6 left-1/2 w-3 h-3 bg-red-400 rounded-full opacity-60"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Left Column - HIV Injury Risk */}
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">HIV Injury Risk</h3>
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-sm text-gray-600">Cmax: 0.89-45.9 µM</span>
                              <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            </div>
                            
                            {/* Main Graph */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                              <div className="relative h-64 bg-gradient-to-b from-red-100 via-gray-50 to-green-100 rounded">
                                {/* Risk Zones */}
                                <div className="absolute inset-0">
                                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-red-100 rounded-t"></div>
                                  <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-gray-50"></div>
                                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-100 rounded-b"></div>
                                </div>
                                
                                {/* Risk Curve */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <path
                                    d="M10,90 Q20,85 30,75 Q40,60 50,45 Q60,30 70,20 Q80,15 90,10"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                    fill="none"
                                  />
                                  {/* Confidence Interval */}
                                  <path
                                    d="M10,90 Q20,85 30,75 Q40,60 50,45 Q60,30 70,20 Q80,15 90,10 L90,20 Q80,25 70,30 Q60,35 50,50 Q40,65 30,80 Q20,85 10,90 Z"
                                    fill="rgba(59, 130, 246, 0.2)"
                                  />
                                  {/* Vertical Lines */}
                                  <line x1="20" y1="0" x2="20" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                                  <line x1="40" y1="0" x2="40" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                                  <line x1="60" y1="0" x2="60" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                                  <line x1="80" y1="0" x2="80" y2="100" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2"/>
                                </svg>
                                
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-20">
                                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"></div>
                                  <div className="absolute top-8 right-8 w-2 h-2 bg-red-400 rounded-full"></div>
                                  <div className="absolute bottom-8 left-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                                </div>
                                
                                {/* Y-axis */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600">
                                  <span>1.0</span>
                                  <span>0.5</span>
                                  <span>0.0</span>
                                </div>
                                
                                {/* X-axis */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
                                  <span>0.1</span>
                                  <span>1</span>
                                  <span>10</span>
                                  <span>100</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Legend */}
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">DILI Risk</span>
                            </div>
                            
                            {/* Safety Window */}
                            <div>
                              <div className="text-sm text-gray-700 mb-2">Safety Window: 0.09-4.44</div>
                              <div className="relative h-3 bg-gray-200 rounded">
                                <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-green-400 rounded-l"></div>
                                <div className="absolute left-1/4 top-0 bottom-0 w-1/4 bg-red-400"></div>
                                <div className="absolute left-1/2 top-0 bottom-0 w-1/2 bg-gray-300 rounded-r"></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-600 mt-1">
                                <span>0.1</span>
                                <span>1</span>
                                <span>10</span>
                                <span>100</span>
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Biological Mechanism */}
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Biological Mechanism</h3>
                            
                            {/* Main Graph */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                              <div className="relative h-64 bg-gray-50 rounded">
                                {/* Multi-line Graph */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  {/* Cell Viability - Blue */}
                                  <path d="M10,80 Q20,75 30,70 Q40,60 50,50 Q60,40 70,30 Q80,25 90,20" stroke="#3b82f6" strokeWidth="1.5" fill="none"/>
                                  {/* Cytoplasm Area - Orange */}
                                  <path d="M10,85 Q20,80 30,75 Q40,65 50,55 Q60,45 70,35 Q80,30 90,25" stroke="#f97316" strokeWidth="1.5" fill="none"/>
                                  {/* Cell Death - Green */}
                                  <path d="M10,90 Q20,85 30,80 Q40,70 50,60 Q60,50 70,40 Q80,35 90,30" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
                                  {/* Necrosis - Purple */}
                                  <path d="M10,95 Q20,90 30,85 Q40,75 50,65 Q60,55 70,45 Q80,40 90,35" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
                                  {/* Apoptosis - Pink */}
                                  <path d="M10,92 Q20,87 30,82 Q40,72 50,62 Q60,52 70,42 Q80,37 90,32" stroke="#ec4899" strokeWidth="1.5" fill="none"/>
                                  {/* HIV Bioactivity - Light Blue */}
                                  <path d="M10,75 Q20,70 30,65 Q40,55 50,45 Q60,35 70,25 Q80,20 90,15" stroke="#06b6d4" strokeWidth="1.5" fill="none"/>
                                  {/* Mitochondrial - Dark Blue */}
                                  <path d="M10,88 Q20,83 30,78 Q40,68 50,58 Q60,48 70,38 Q80,33 90,28" stroke="#1e40af" strokeWidth="1.5" fill="none"/>
                                </svg>
                                
                                {/* Y-axis */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600">
                                  <span>1.0</span>
                                  <span>0.5</span>
                                  <span>0.0</span>
                                </div>
                                
                                {/* X-axis */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
                                  <span>0.1</span>
                                  <span>1</span>
                                  <span>10</span>
                                  <span>100</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Data Table */}
                            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                <h4 className="text-sm font-semibold text-gray-900">TC20 & TC50 Values</h4>
                              </div>
                              <div className="p-4">
                                <div className="grid grid-cols-3 gap-4 text-xs">
                                  <div className="font-medium text-gray-700">Mechanism</div>
                                  <div className="font-medium text-gray-700">TC20</div>
                                  <div className="font-medium text-gray-700">TC50</div>
                                  
                                  <div className="text-gray-600">Cell Viability</div>
                                  <div className="text-gray-900">29.26</div>
                                  <div className="text-gray-900">74.49</div>
                                  
                                  <div className="text-gray-600">Cytoplasm Area</div>
                                  <div className="text-gray-900 bg-yellow-100 px-2 py-1 rounded">43.10</div>
                                  <div className="text-gray-900">&gt;100</div>
                                  
                                  <div className="text-gray-600">Cell Death</div>
                                  <div className="text-gray-900">63.18</div>
                                  <div className="text-gray-900">&gt;100</div>
                                  
                                  <div className="text-gray-600">Necrosis</div>
                                  <div className="text-gray-900">&gt;100</div>
                                  <div className="text-gray-900">&gt;100</div>
                                  
                                  <div className="text-gray-600">Apoptosis</div>
                                  <div className="text-gray-900">60.85</div>
                                  <div className="text-gray-900">&gt;100</div>
                                  
                                  <div className="text-gray-600">HIV Bioactivity</div>
                                  <div className="text-gray-900">10.10</div>
                                  <div className="text-gray-900">28.89</div>
                                  
                                  <div className="text-gray-600">Mitc</div>
                                  <div className="text-gray-900">41.84</div>
                                  <div className="text-gray-900">78.43</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* HIV Services Section */}
              <section className="py-16 bg-[#12a2df]">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    HIV Services
                  </h2>
                  <p className="text-lg text-gray-700">
                    Axiom offers a variety of services for understanding drug induced<br />
                    hiv injury.
                  </p>
                </div>
              </section>

              {/* Clinical HIV Risk Assessment Flowchart */}
              <section className="py-16 bg-[#12a2df]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    {/* Top Section - In Silico Clinical HIV Risk Assessment */}
                    <div className="mb-8">
                      <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-lg font-bold mb-6 inline-block">
                        In Silico Clinical HIV Risk Assessment
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-6">
                        {/* Computer Screen Icon */}
                        <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                          </svg>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Chemical Structure */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3">
                          <div className="text-xs font-mono text-gray-700">C[C@@](Cc1ccc(O)c(O)c1)(NN)C(=O)O</div>
                          <div className="text-xs text-gray-600 text-center mt-1">Digital chemical structure</div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Structure to Phenotype Model */}
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-700">Structure to phenotype model</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Cellular Phenotypes Grid */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="w-8 h-8 bg-red-200 rounded border border-red-300"></div>
                          <div className="w-8 h-8 bg-blue-200 rounded border border-blue-300"></div>
                          <div className="w-8 h-8 bg-green-200 rounded border border-green-300"></div>
                          <div className="w-8 h-8 bg-yellow-200 rounded border border-yellow-300"></div>
                          <div className="w-8 h-8 bg-teal-200 rounded border border-teal-300"></div>
                          <div className="w-8 h-8 bg-purple-200 rounded border border-purple-300"></div>
                        </div>
                        <div className="text-sm text-gray-700">Predict phenotypes from structure</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* ADME Box */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[120px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">ADME</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Clearance</div>
                            <div>Permeability</div>
                            <div>Lipophilicity</div>
                            <div>Solubility</div>
                            <div>Bioavailability</div>
                            <div>Ubound</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* PK/PD Box */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[100px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">PK/PD</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Cmax</div>
                            <div>Half-life</div>
                            <div>AUC</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Phenotype to Clinical Model */}
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-700">Phenotype to clinical model</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Final Output - Human Torso with HIV */}
                        <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            <circle cx="12" cy="8" r="2" fill="#fbbf24"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section - In Vitro Clinical Hepatocyte Risk Assessment */}
                    <div className="mb-8">
                      <div className="bg-gray-700 text-white px-4 py-2 rounded-lg text-lg font-bold mb-6 inline-block">
                        In Vitro Clinical Hepatocyte Risk Assessment
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-6">
                        {/* Petri Dish with Orange Cells */}
                        <div className="w-16 h-16 bg-orange-100 rounded-full border-4 border-orange-300 flex items-center justify-center">
                          <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Ship Compound to Lab */}
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-700">Ship compound to lab</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* 2D Primary Human Hepatocytes */}
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-16 bg-orange-100 rounded-full border-4 border-orange-300 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
                          </div>
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-1">
                              <div className="w-4 h-4 bg-green-400 rounded"></div>
                              <div className="w-4 h-4 bg-red-400 rounded"></div>
                              <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                              <div className="w-4 h-4 bg-blue-400 rounded"></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-700">2D Primary Human Hepatocytes</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Cellular Phenotypes Grid (Same as In Silico) */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="w-8 h-8 bg-red-200 rounded border border-red-300"></div>
                          <div className="w-8 h-8 bg-blue-200 rounded border border-blue-300"></div>
                          <div className="w-8 h-8 bg-green-200 rounded border border-green-300"></div>
                          <div className="w-8 h-8 bg-yellow-200 rounded border border-yellow-300"></div>
                          <div className="w-8 h-8 bg-teal-200 rounded border border-teal-300"></div>
                          <div className="w-8 h-8 bg-purple-200 rounded border border-purple-300"></div>
                        </div>
                        <div className="text-sm text-gray-700">Quantify phenotypes from data</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* ADME Box (Same as In Silico) */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[120px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">ADME</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Clearance</div>
                            <div>Permeability</div>
                            <div>Lipophilicity</div>
                            <div>Solubility</div>
                            <div>Bioavailability</div>
                            <div>Ubound</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* PK/PD Box (Same as In Silico) */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[100px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">PK/PD</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Cmax</div>
                            <div>Half-life</div>
                            <div>AUC</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Phenotype to Clinical Model (Same as In Silico) */}
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-700">Phenotype to clinical model</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Final Output - Human Torso with HIV (Same as In Silico) */}
                        <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            <circle cx="12" cy="8" r="2" fill="#fbbf24"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section - In Vitro Clinical Multi-cell Risk Assessment */}
                    <div>
                      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-bold mb-6 inline-block">
                        In Vitro Clinical Multi-cell Risk Assessment
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-6">
                        {/* Petri Dish with Blue and Orange Cells */}
                        <div className="w-16 h-16 bg-blue-100 rounded-full border-4 border-blue-300 flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-400 rounded-full mr-1"></div>
                          <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Ship Compound to Lab (Same as Middle Section) */}
                        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                          </svg>
                        </div>
                        <div className="text-sm text-gray-700">Ship compound to lab</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* 2D+ Multi-cell Hepatic System */}
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-16 bg-blue-100 rounded-full border-4 border-blue-300 flex items-center justify-center">
                            <div className="w-6 h-6 bg-blue-400 rounded-full mr-1"></div>
                            <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                          </div>
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="w-12 h-12 bg-gray-300 rounded border-2 border-gray-400"></div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-700">2D+ Multi-cell Hepatic System</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Cellular Phenotypes Grid (Different from In Silico) */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="w-8 h-8 bg-green-200 rounded border border-green-300"></div>
                          <div className="w-8 h-8 bg-yellow-200 rounded border border-yellow-300"></div>
                          <div className="w-8 h-8 bg-orange-200 rounded border border-orange-300"></div>
                          <div className="w-8 h-8 bg-blue-200 rounded border border-blue-300"></div>
                          <div className="w-8 h-8 bg-orange-200 rounded border border-orange-300"></div>
                          <div className="w-8 h-8 bg-red-200 rounded border border-red-300"></div>
                        </div>
                        <div className="text-sm text-gray-700">Quantify phenotypes from data</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* ADME Box (Same as Previous Sections) */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[120px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">ADME</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Clearance</div>
                            <div>Permeability</div>
                            <div>Lipophilicity</div>
                            <div>Solubility</div>
                            <div>Bioavailability</div>
                            <div>Ubound</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* PK/PD Box (Same as Previous Sections) */}
                        <div className="bg-white border-2 border-gray-300 rounded-lg p-3 min-w-[100px]">
                          <div className="text-sm font-semibold text-gray-900 mb-2">PK/PD</div>
                          <div className="text-xs text-gray-700 space-y-1">
                            <div>Cmax</div>
                            <div>Half-life</div>
                            <div>AUC</div>
                          </div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Proteomics Box */}
                        <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 min-w-[100px]">
                          <div className="text-sm font-semibold text-purple-900 mb-2">Proteomics</div>
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto"></div>
                        </div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Phenotype to Clinical Model (Same as Previous Sections) */}
                        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
                        </div>
                        <div className="text-sm text-gray-700">Phenotype to clinical model</div>
                        
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        
                        {/* Final Output - Human Torso with HIV (Same as Previous Sections) */}
                        <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                            <circle cx="12" cy="8" r="2" fill="#fbbf24"/>
                          </svg>
                        </div>
                      </div>
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
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">HIV</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Radioactive <span className="text-gray-400">(coming soon)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Dengue <span className="text-gray-400">(coming soon)</span></a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Lung cancer <span className="text-gray-400">(coming soon)</span></a></li>
                </ul>
              </div>

              {/* Dataset Column */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Dataset</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a></li>
                </ul>
              </div>

              

              {/* Company Column */}
              <div>
                <h4 className="text-gray-700 font-medium mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Press kit</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HIV;
