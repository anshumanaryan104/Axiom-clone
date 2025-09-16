import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCardSet, setCurrentCardSet] = useState(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  // Removed scroll progress and auto-hide navigation logic

  // 3D Tilt Effect Handler
  const handleTilt = (e, element) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    element.style.setProperty('--rot-x', `${rotateX}deg`);
    element.style.setProperty('--rot-y', `${rotateY}deg`);
  };

  const resetTilt = (element) => {
    element.style.setProperty('--rot-x', '0deg');
    element.style.setProperty('--rot-y', '0deg');
  };

  // Basic scroll-triggered animations
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    });

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale');
    animatedElements.forEach(el => animationObserver.observe(el));

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      

      {/* White top strip behind navbar (only visible at very top) */}
      <div className="absolute top-0 left-0 right-0 h-16 lg:h-20 bg-white z-40"></div>

      {/* Sticky Navigation Header */}
      <header className="sticky top-0 w-full z-50 transition-all duration-300 glass-morphism">
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
                      className="text-gray-600 hover:text-[#12a2df] px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                    className="text-gray-600 hover:text-[#12a2df] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Datasets
                  </button>

                  <button
                    onClick={() => window.location.href = '/publications'}
                    className="text-gray-600 hover:text-[#12a2df] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Publications
                  </button>
                  <button
                    onClick={() => window.location.href = '/company'}
                    className="text-gray-600 hover:text-[#12a2df] px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                className="bg-gradient-to-r from-[#12a2df] via-[#0a6fa0] to-[#065986] hover:bg-gradient-to-l hover:from-[#12a2df] hover:via-[#0a6fa0] hover:to-[#065986] text-white px-5 py-3 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
                <button onClick={() => window.location.href = '/products'} className="text-gray-600 hover:text-[#12a2df] px-3 py-2 text-left transition-colors">Products</button>
                <div className="bg-gray-100 px-3 py-2 rounded-lg">
                  <button onClick={() => window.location.href = '/dataset'} className="text-gray-600 hover:text-[#12a2df] px-3 py-2 text-left transition-colors">Datasets</button>

                  <button onClick={() => window.location.href = '/publications'} className="text-gray-600 hover:text-[#12a2df] px-3 py-2 text-left transition-colors">Publications</button>
                  <button onClick={() => window.location.href = '/company'} className="text-gray-600 hover:text-[#12a2df] px-3 py-2 text-left transition-colors">Company</button>
                </div>
                <div className="flex space-x-3 px-3 pt-2">
                  <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-[#12a2df] via-[#0a6fa0] to-[#065986] hover:bg-gradient-to-l hover:from-[#12a2df] hover:via-[#0a6fa0] hover:to-[#065986] text-white px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200">Contact Us</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Removed spacer; white strip now sits behind the navbar */}

      {/* Hero Section */}
      <main className="pt-0">
        <section className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Enhanced Mission Banner */}
            <div className="relative rounded-3xl px-8 py-16 lg:px-12 lg:py-20 text-center bg-white/90 backdrop-blur-sm border border-gray-100 shadow-2xl overflow-hidden group hover:shadow-[0_20px_60px_-15px_rgba(18,162,223,0.3)] transition-all duration-500">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#12a2df] to-transparent opacity-50"></div>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#12a2df]/10 to-[#06b6d4]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#06b6d4]/10 to-[#12a2df]/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="max-w-4xl mx-auto px-8 lg:px-16">
                {/* Animated Our Mission Badge with Float Effect */}
                <div className="relative inline-block mb-14 text-reveal">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#12a2df] to-[#06b6d4] blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-wider text-white shadow-xl animate-float hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#12a2df] to-[#0a6fa0] hover:from-[#0a6fa0] hover:to-[#12a2df]">
                    OUR MISSION
                  </div>
                  </div>

                {/* Enhanced Typography with Reveal Animation */}
                <h1 className="relative z-10 mb-14 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tighter">
                  <span className="block text-reveal-delay-200">
                    <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-[#0a6fa0] bg-clip-text text-transparent">Quantum</span>
                    {" "}
                    <span className="bg-gradient-to-r from-[#0a6fa0] via-[#12a2df] to-[#0a6fa0] bg-clip-text text-transparent">Chemistry</span>
                    {" "}
                    <span className="bg-gradient-to-r from-[#0a6fa0] via-[#12a2df] to-[#0a6fa0] bg-clip-text text-transparent">and</span>
                    </span>
                  <span className="block text-reveal-delay-400">
                    <span className="bg-gradient-to-r from-[#0a6fa0] via-[#12a2df] to-[#06b6d4] bg-clip-text text-transparent">Machine</span>
                    {" "}
                    <span className="bg-gradient-to-r from-[#06b6d4] via-[#12a2df] to-[#0a6fa0] bg-clip-text text-transparent">Learning</span>
                    </span>
                  </h1>

                <p className="relative z-10 text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light text-reveal-delay-600" style={{animationDelay: '0.8s'}}>
                  Reshaping early-stage <span className="font-semibold bg-gradient-to-r from-[#12a2df] to-[#06b6d4] bg-clip-text text-transparent">drug discovery</span> with <span className="font-semibold text-gray-800">quantum-level precision</span> and <span className="font-semibold text-gray-800">industry-leading speed</span>
                </p>

                {/* Enhanced Loading Animation */}
                <div className="relative z-10 mt-12 mb-4 flex justify-center text-reveal-delay-600" style={{animationDelay: '1s'}}>
                  <div className="relative w-32 h-32 animate-float">
                    {/* Outer rotating rings */}
                    <div className="absolute inset-0">
                      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#gradient1)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="70 30"
                        />
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#12a2df" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      </div>

                    {/* Middle pulsing ring */}
                    <div className="absolute inset-2">
                      <svg className="w-full h-full animate-pulse" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="url(#gradient2)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="50 50"
                          opacity="0.6"
                        />
                        <defs>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                            </svg>
                          </div>

                    {/* Inner spinning element */}
                    <div className="absolute inset-4">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#12a2df] to-[#06b6d4] rounded-full opacity-20 animate-ping"></div>
                        <div className="absolute inset-0 bg-white rounded-full shadow-inner flex items-center justify-center">
                          {/* DNA Helix Animation */}
                          <svg className="w-12 h-12" viewBox="0 0 24 24">
                            <g className="animate-bounce-slow">
                              <circle cx="9" cy="4" r="2" fill="#12a2df" className="animate-pulse" />
                              <circle cx="15" cy="4" r="2" fill="#06b6d4" className="animate-pulse animation-delay-200" />
                              <circle cx="12" cy="9" r="2" fill="#8b5cf6" className="animate-pulse animation-delay-400" />
                              <circle cx="9" cy="14" r="2" fill="#06b6d4" className="animate-pulse animation-delay-600" />
                              <circle cx="15" cy="14" r="2" fill="#12a2df" className="animate-pulse animation-delay-800" />
                              <circle cx="12" cy="19" r="2" fill="#8b5cf6" className="animate-pulse" />
                              <path
                                d="M9 4 L12 9 L15 4 M12 9 L9 14 M12 9 L15 14 M9 14 L12 19 M15 14 L12 19"
                                stroke="#e0e7ff"
                                strokeWidth="1"
                                fill="none"
                                className="animate-pulse"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Orbiting dots */}
                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '3s'}}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#12a2df] to-[#06b6d4] rounded-full shadow-lg"></div>
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-full shadow-lg"></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Text Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-6 leading-tight tracking-normal">
              Toxicity is a leading cause of clinical trial failures
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Every year, unexpected toxicity denies patients many effective medicines and costs industry <span className="font-semibold text-gray-900">billions of dollars</span>.
            </p>
          </div>
        </section>

        {/* Cards Section with Pagination */}
        <section className="py-16 lg:py-24 relative overflow-hidden bg-transparent">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 animate-fade-up tracking-normal text-gray-900">
                Trusted Sources & Research
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-[#12a2df] to-[#06b6d4] mx-auto rounded-full animate-scale-in"></div>
            </div>
            
            {/* Cards Container with Navigation */}
            <div className="relative">
              {/* Navigation Arrows with Glass Effect */}
              <button 
                onClick={() => setCurrentCardSet(currentCardSet === 0 ? 1 : 0)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#00FFFF] hover:bg-[#00BCD4] border-transparent rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentCardSet(currentCardSet === 0 ? 1 : 0)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#00FFFF] hover:bg-[#00BCD4] border-transparent rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Cards Container - 2x3 Grid Layout */}
              <div className="relative overflow-hidden">
                <div 
                  className="transition-opacity duration-500 ease-in-out"
                  style={{ 
                    opacity: currentCardSet === 0 ? 1 : 0,
                    position: currentCardSet === 0 ? 'relative' : 'absolute',
                    width: '100%',
                    transform: currentCardSet === 0 ? 'translateX(0)' : 'translateX(-100%)'
                  }}
                >
                  {/* First Set of 3 Cards - 2x3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 w-full">
                    {/* Card 1 */}
                    <div className="group relative rounded-2xl shadow-xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_20px_60px_-15px_rgba(18,162,223,0.5)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                      <div className="rounded-2xl px-6 py-8 bg-white/90 backdrop-blur-md h-full">
                      {/* Card Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#12a2df]/10 via-transparent to-[#06b6d4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-normal leading-relaxed">
                          Papaya Leaf Extracts as Potential Dengue Treatment
                        </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                          This computational study identifies kaempferol and quercetin from papaya leaves as promising natural compounds that could inhibit dengue virus replication through molecular docking and simulation analysis.
                        </p>
                      <button className="bg-[#00FFFF] hover:bg-[#00BCD4] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                       <a href="https://www.mdpi.com/1422-0067/23/20/12310" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                         Visit Source
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </button>
                      </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative rounded-2xl shadow-xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_20px_60px_-15px_rgba(18,162,223,0.5)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                      <div className="rounded-2xl px-6 py-8 bg-white/90 backdrop-blur-md h-full">
                      {/* Card Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 via-transparent to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-normal leading-relaxed">
                      Realistic Quantum Mechanical Dataset for Machine Learning in Molecular Science.
                        </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      QM40 is a quantum mechanical dataset containing 162,954 drug-like molecules (10-40 atoms) with calculated properties and bond strengths designed to train machine learning models for molecular property prediction.
                      </p>
                      <button className="bg-[#00FFFF] hover:bg-[#00BCD4] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                       <a href='https://www.nature.com/articles/s41597-024-04206-y' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                         Visit Source
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </button>
                      </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative rounded-2xl shadow-xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_20px_60px_-15px_rgba(18,162,223,0.5)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                      <div className="rounded-2xl px-6 py-8 bg-white/90 backdrop-blur-md h-full">
                      {/* Card Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#12a2df]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-normal leading-relaxed">
                      AI-QM Empowered Drug Discovery Platform with Explainability
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                        SmartCADD is an open-source virtual screening platform that integrates deep learning, computer-aided drug design, and quantum mechanics within a user-friendly Python framework for comprehensive drug discovery workflows with explainable AI.
                      </p>
                      <button className="bg-[#00FFFF] hover:bg-[#00BCD4] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.4c00720" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Visit Source
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </button>
                      </div>
                      </div>
                    </div>


                  </div>
                  </div>
                </div>

                <div 
                  className="transition-opacity duration-500 ease-in-out"
                  style={{ 
                    opacity: currentCardSet === 1 ? 1 : 0,
                    position: currentCardSet === 1 ? 'relative' : 'absolute',
                    width: '100%',
                    top: currentCardSet === 1 ? 0 : 0,
                    transform: currentCardSet === 1 ? 'translateX(0)' : 'translateX(100%)'
                  }}
                >
                  {/* Second Set of 3 Cards - 2x3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 w-full">
                    {/* Card 4 */}
                    <div className="group relative rounded-2xl shadow-xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_20px_60px_-15px_rgba(18,162,223,0.5)] hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out cursor-pointer overflow-hidden">
                      <div className="rounded-2xl px-6 py-8 bg-white/90 backdrop-blur-md h-full">
                      {/* Card Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/10 via-transparent to-[#fb923c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                      <h4 className="text-base font-semibold text-gray-900 mb-3 tracking-normal leading-relaxed">
                        Quantum Mechanical Assessment of Protein-Ligand Hydrogen Bond Strength Patterns
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                        This study uses quantum mechanical methods to analyze hydrogen bond strength patterns between proteins and ligands, creating databases and maps that reveal relationships between bond strength, geometry, and amino acid-functional group interactions for drug design applications.
                      </p>
                      <button className="bg-[#00FFFF] hover:bg-[#00BCD4] text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <a href="https://www.mdpi.com/1422-0067/24/7/6311" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Visit Source
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </button>
                      </div>
                      </div>
                    </div>

                    

                  </div>
                </div>
              </div>
            </div>
            
            
            {/* Enhanced Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              <button 
                onClick={() => setCurrentCardSet(0)}
                className={`transition-all duration-300 ${
                  currentCardSet === 0
                    ? 'w-12 h-3 rounded-full bg-gradient-to-r from-[#12a2df] to-[#06b6d4] shadow-lg'
                    : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400'
                }`}
              />
              <button 
                onClick={() => setCurrentCardSet(1)}
                className={`transition-all duration-300 ${
                  currentCardSet === 1
                    ? 'w-12 h-3 rounded-full bg-gradient-to-r from-[#12a2df] to-[#06b6d4] shadow-lg'
                    : 'w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400'
                }`}
              />
            </div>
            
            {/* Navigation Indicator */}
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">
                Showing {currentCardSet === 0 ? '1-3' : '4-6'} of 6 sources
              </p>
          </div>
        </section>


        {/* UDD Hero Intro Section */}
        <section className="py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <img src="/roadmap.png" alt="Our Roadmap to Impact" className="mb-36" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-normal">
                  <span className="text-gray-900">Revolutionizing</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#12a2df] to-[#0a6fa0] bg-clip-text text-transparent">Drug Discovery</span>
                  <br />
                  <span className="text-gray-900">with AI</span>
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-gray-900">Universal Drug Discovery</span>, we leverage cutting-edge AI, quantum mechanics, and advanced computational chemistry to transform the future of medicine.
                </p>
              </div>

              {/* Right Image */}
              <div>
                <div className="rounded-2xl overflow-hidden">
                  <img src="/Ai discovery.png" alt="AI-driven drug discovery" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <img src='/Teams.png' alt='Our Experienced Team' className='mb-36'/>

        {/* In the News Section */}
        <section className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 text-center mb-12 tracking-normal">In the News</h2>
              
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* Article Card 1 */}
              <div className="rounded-2xl shadow-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                <div className="rounded-2xl p-6 lg:p-8 bg-white h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                      <div className="inline-block bg-[#12a2df] text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                          Article
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 leading-relaxed tracking-normal">
                        Exclusive: Can AI replace animal testing? A new biotech launches to find out
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">April 28, 2025</p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                    </div>
                  </div>
                </div>

                {/* Article Card 2 */}
              <div className="rounded-2xl shadow-2xl p-[2px] bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-900 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
                <div className="rounded-2xl p-6 lg:p-8 bg-white h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                      <div className="inline-block bg-[#12a2df] text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                          Article
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-3 leading-relaxed tracking-normal">
                        Axiom Bio Launches with $15M to Replace Animal Testing with AI for Drug Toxicity Prediction
                      </h3>
                      <p className="text-gray-500 text-sm font-medium tracking-normal">April 29, 2025</p>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="w-12 h-12 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left Section - Axiom Brand */}
            <div className="md:col-span-1">
              <img src="/udd-logo.png" alt="UDD - Universal Drug Discovery" className="h-12 w-auto mb-2" />
                <p className="text-gray-700 mb-8 text-lg font-light italic">Faster and Accurate drug discovery</p>
                <p className="text-gray-500 text-sm font-medium tracking-wider">© 2025</p>
            </div>

            {/* Products Column */}
            <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg tracking-tight">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">HIV</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">Radioactive <span className="text-gray-400">(coming soon)</span></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">Dengue <span className="text-gray-400">(coming soon)</span></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">Lung cancer <span className="text-gray-400">(coming soon)</span></a></li>
              </ul>
            </div>

            {/* Dataset Column */}
            <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg tracking-tight">Dataset</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">How it works</a></li>
              </ul>
            </div>



            {/* Company Column */}
            <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg tracking-tight">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">LinkedIn</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:scale-105 transition-all duration-200 ease-out">Press kit</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>

    );
  };

  import Company from './Company';
  import Publications from './Publications';
  import Products from './Products';

  import HIV from './HIV';
  import Dataset from './Dataset';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<Company />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/HIV" element={<HIV />} />

          <Route path="/dataset" element={<Dataset />} />
        </Routes>
    </Router>
  );
}

export default App;