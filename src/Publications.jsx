import React, { useState } from 'react';

function Publications() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgba(237,233,230,255)'}}>
      {/* Header */}
      <header className="shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50" style={{backgroundColor: 'RGB(237, 233, 230, 1)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
                         {/* Logo Section */}
             <div className="flex-shrink-0">
               <a href="/" className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors">
                 Axiom
               </a>
             </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              >
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Products
                </button>
                
                {/* Products Dropdown */}
                {isProductsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Liver Card */}
                      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
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
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => scrollToSection('datasets')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Datasets
                  </button>
                  <button
                    onClick={() => scrollToSection('security')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Security
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
                                 <button onClick={() => window.location.href = '/products'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Products</button>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <button onClick={() => scrollToSection('datasets')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Datasets</button>
                  <button onClick={() => scrollToSection('security')} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Security</button>
                  <button onClick={() => window.location.href = '/publications'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Publications</button>
                  <button onClick={() => window.location.href = '/company'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Company</button>
                </div>
                <div className="flex space-x-3 px-3 pt-2">
                  <button onClick={() => scrollToSection('contact')} style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">Contact Us</button>
                  <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold">Try Demo</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* Publications Title Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Publications
            </h1>
          </div>
        </section>

                 {/* Filter Buttons Section */}
         <section className="bg-gray-50 -mt-10">
           <div className="max-w-4xl mx-auto px-0 ml-20">
             <div className="flex justify-start ">
               <div className="flex space-x-1">
                 <button
                   onClick={() => setActiveFilter('all')}
                   className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                     activeFilter === 'all'
                       ? 'bg-black text-white'
                       : 'bg-white text-black hover:bg-gray-100'
                   }`}
                 >
                   ALL
                 </button>
                 <button
                   onClick={() => setActiveFilter('paper')}
                   className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                     activeFilter === 'paper'
                       ? 'bg-black text-white'
                       : 'bg-white text-black hover:bg-gray-100'
                   }`}
                 >
                   PAPER
                 </button>
                 <button
                   onClick={() => setActiveFilter('post')}
                   className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                     activeFilter === 'post'
                       ? 'bg-black text-white'
                       : 'bg-white text-black hover:bg-gray-100'
                   }`}
                 >
                   POST
                 </button>
                 <button
                   onClick={() => setActiveFilter('poster')}
                   className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                     activeFilter === 'poster'
                       ? 'bg-black text-white'
                       : 'bg-white text-black hover:bg-gray-100'
                   }`}
                 >
                   POSTER
                 </button>
                 <button
                   onClick={() => setActiveFilter('video')}
                   className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                     activeFilter === 'video'
                       ? 'bg-black text-white'
                       : 'bg-white text-black hover:bg-gray-100'
                   }`}
                 >
                   VIDEO
                 </button>
               </div>
             </div>
           </div>
         </section>

                                                                                                                                                                                                                                                                                                                               {/* Publications Cards Section */}
              <section className="py-12 bg-gray-50">
                <div className="w-full px-12 lg:px-16">
                  <div className="space-y-6">
                    {/* Card 1 - VIDEO */}
                    {(activeFilter === 'all' || activeFilter === 'video') && (
                      <div className="bg-white rounded-xl shadow-lg p-12 flex items-center justify-between hover:shadow-xl transition-shadow min-h-[240px]">
                       <div className="flex items-center space-x-4">
                         <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                           VIDEO
                         </span>
                         <div>
                           <h3 className="text-lg font-bold text-gray-900 mb-1">
                             Leveraging AI and Primary Human Cells to Redefine Risk Assessment
                           </h3>
                           <p className="text-sm text-gray-500">April 30, 2025</p>
                         </div>
                       </div>
                       <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                         </svg>
                       </button>
                     </div>
                    )}

                    {/* Card 2 - POSTER */}
                    {(activeFilter === 'all' || activeFilter === 'poster') && (
                      <div className="bg-white rounded-xl shadow-lg p-12 flex items-center justify-between hover:shadow-xl transition-shadow min-h-[240px]">
                        <div className="flex items-center space-x-4">
                          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            POSTER
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              Accurate and interpretable in silico clinical risk assessment
                            </h3>
                            <p className="text-sm text-gray-500">March 2, 2025</p>
                          </div>
                        </div>
                        <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Card 3 - PAPER */}
                    {(activeFilter === 'all' || activeFilter === 'paper') && (
                      <div className="bg-white rounded-xl shadow-lg p-12 flex items-center justify-between hover:shadow-xl transition-shadow min-h-[240px]">
                     <div className="flex items-center space-x-4">
                       <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                         PAPER
                       </span>
                       <div>
                         <h3 className="text-lg font-bold text-gray-900 mb-1">
                           Cell Painting for cytotoxicity and mode-of-action analysis in primary human hepatocytes
                         </h3>
                         <p className="text-sm text-gray-500">February 15, 2025</p>
                       </div>
                     </div>
                     <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                       <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                       </svg>
                     </button>
                   </div>
                    )}

                    {/* Card 4 - POST */}
                    {(activeFilter === 'all' || activeFilter === 'post') && (
                      <div className="bg-white rounded-xl shadow-lg p-12 flex items-center justify-between hover:shadow-xl transition-shadow min-h-[240px]">
                        <div className="flex items-center space-x-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            POST
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              Selling AI Products + Services to Big Pharma
                            </h3>
                            <p className="text-sm text-gray-500">August 9, 2023</p>
                          </div>
                        </div>
                        <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>

          {/* Newsletter Subscription Section */}
          <section className="pt-0 pb-8 bg-gray-50">
            <div className="w-full px-12 lg:px-16">
                                 <div className="bg-white rounded-xl shadow-lg pt-12 pr-10 pb-6 pl-12 text-center min-h-[350px] flex flex-col justify-center">
                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                   Subscribe to our newsletter
                 </h2>
                 <div className="flex items-center justify-center space-x-3">
                                       <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 max-w-md px-6 py-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg"
                    />
                   <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                     <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                     </svg>
                   </button>
                 </div>
               </div>
            </div>
          </section>
               </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
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
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Liver</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Brain <span className="text-gray-400">(coming soon)</span></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Immunogenicity <span className="text-gray-400">(coming soon)</span></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Heart <span className="text-gray-400">(coming soon)</span></a></li>
              </ul>
            </div>

            {/* Dataset Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Dataset</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How it works</a></li>
              </ul>
            </div>

            {/* Security Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Security</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Information</a></li>
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
  );
}

export default Publications; 