import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCardSet, setCurrentCardSet] = useState(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

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
                      {/* Liver Card */}
                      <div 
                        onClick={() => window.location.href = '/products/liver'}
                        className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <span className="text-gray-900 font-medium">Liver</span>
                        <button className="w-8 h-8 bg-[#12a2df] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
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
                    onClick={() => window.location.href = '/dataset'}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Datasets
                  </button>
                  <button
                    onClick={() => window.location.href = '/security'}
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
                style={{backgroundColor: '#12a2df'}}
                className="hover:bg-yellow-500 text-gray-900 px-5 py-3 rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
                  <button onClick={() => window.location.href = '/security'} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-left">Security</button>
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

      {/* Hero Section */}
      <main className="pt-16 lg:pt-20">
        <section className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
                                {/* Mission Banner */}
                    <div className="rounded-2xl px-8 py-12 lg:px-12 lg:py-16 text-center border border-gray-200 shadow-lg animate-fade-in bg-white">
                      <div className="max-w-4xl mx-auto px-16 lg:px-24">
                        {/* Our Mission Badge */}
                        <div className="inline-block px-6 py-2 rounded-full font-semibold text-sm mb-0 mt-28 animate-scale stagger-1" style={{backgroundColor: '#12a2df'}}>
                          Our Mission
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up stagger-2">
                         Revolutionizing Drug Discovery with AI and Chemical Science
                        </h1>
                        <p className="text-base lg:text-lg text-gray-800 leading-relaxed mx-12 lg:mx-24 animate-slide-up stagger-3">
                          Harnessing AI and quantum mechanics for innovative drug solutions tailored to your needs.
                        </p>

                        {/* Loading Symbol */}
                        <div className="mt-40 flex justify-center animate-scale stagger-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-axiom-yellow rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-16 h-16 bg-axiom-yellow rounded-full animate-ping"></div>
                            <div className="absolute inset-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <div className="w-8 h-8 border-4 border-axiom-yellow border-t-transparent rounded-full animate-spin"></div>
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
            <h2 className="text-[3.6rem] font-bold text-gray-900 mb-6 leading-tight max-w-[67rem] mx-auto animate-slide-up">
              Toxicity is a leading cause of clinical trial failures
            </h2>
            <p className="text-[1.8rem] text-gray-800 leading-relaxed max-w-[40rem] mx-auto animate-slide-up stagger-1">
              Every year, unexpected toxicity denies patients many effective medicines and costs industry billions of dollars.
            </p>
          </div>
        </section>

        {/* Cards Section with Pagination */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center animate-slide-up">
              Trusted Sources & Research
            </h3>
            
            {/* Cards Container with Navigation */}
            <div className="relative">
              {/* Navigation Arrows */}
              <button 
                onClick={() => setCurrentCardSet(currentCardSet === 0 ? 1 : 0)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={() => setCurrentCardSet(currentCardSet === 0 ? 1 : 0)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                  {/* First Set of 6 Cards - 2x3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        FDA Drug Safety Communications
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Official FDA announcements about drug safety issues, recalls, and toxicity warnings that affect public health and clinical practice.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit FDA.gov
                      </button>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        PubMed Research Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Comprehensive database of biomedical literature including studies on drug toxicity, clinical trials, and pharmaceutical research.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit PubMed
                      </button>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        ClinicalTrials.gov
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Registry of clinical studies worldwide, tracking drug development progress and safety outcomes in human trials.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit ClinicalTrials.gov
                      </button>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Nature Drug Discovery
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Leading scientific journal covering drug discovery, development challenges, and innovative approaches to toxicity prediction.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Nature.com
                      </button>
                    </div>

                    {/* Card 5 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        PhRMA Research Reports
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Pharmaceutical industry research organization providing data on drug development costs, timelines, and failure rates.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit PhRMA.org
                      </button>
                    </div>

                    {/* Card 6 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6 bg-white">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        EMA Scientific Guidelines
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        European Medicines Agency guidelines for drug development, safety assessment, and regulatory requirements in Europe.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit EMA.europa.eu
                      </button>
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
                  {/* Second Set of 6 Cards - 2x3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 7 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        WHO Drug Safety Reports
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        World Health Organization global database of adverse drug reactions and safety monitoring reports from healthcare systems worldwide.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit WHO.int
                      </button>
                    </div>

                    {/* Card 8 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Science Translational Medicine
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Premier journal publishing research on translating basic science discoveries into medical applications and drug development.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Science.org
                      </button>
                    </div>

                    {/* Card 9 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        DrugBank Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Comprehensive resource combining detailed drug data with comprehensive drug target information for pharmaceutical research.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit DrugBank.ca
                      </button>
                    </div>

                    {/* Card 10 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        NCBI Toxicology Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        National Center for Biotechnology Information's comprehensive toxicology and environmental health database.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit NCBI.nlm.nih.gov
                      </button>
                    </div>

                    {/* Card 11 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Journal of Toxicology
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Peer-reviewed research on toxicological sciences, including computational toxicology and alternative testing methods.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Hindawi.com
                      </button>
                    </div>

                    {/* Card 12 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#12a2df'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        EPA CompTox Dashboard
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Environmental Protection Agency's computational toxicology platform providing chemical safety and toxicity data.
                      </p>
                      <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit EPA.gov
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <button 
                onClick={() => setCurrentCardSet(0)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentCardSet === 0 ? 'bg-axiom-yellow' : 'bg-gray-300'
                }`}
              />
              <button 
                onClick={() => setCurrentCardSet(1)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentCardSet === 1 ? 'bg-axiom-yellow' : 'bg-gray-300'
                }`}
              />
            </div>
            
            {/* Navigation Indicator */}
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">
                Showing {currentCardSet === 0 ? '1-6' : '7-12'} of 12 sources
              </p>
            </div>
          </div>
        </section>


        {/* UDD Hero Intro Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#12a2df'}}>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <img src="/Chart.png" alt="Chart Comparison" className='mb-36' />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
                <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Revolutionizing Drug Discovery with AI</h2>
                <p className="text-lg lg:text-xl text-gray-700">
                  At Universal Drug Discovery, we leverage AI, quantum mechanics, and advanced computational chemistry to transform the future of medicine and accelerate the discovery of innovative drug candidates.
                </p>
                
                    </div>
              {/* Right Image */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <img src="/Ai discovery.png" alt="AI-driven drug discovery" className="w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovative Solutions Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className='text-3xl lg:text-5xl font-bold '>Innovative Solutions</h2>
                
                <h2 className="text-xl lg:text-2xl text-gray-900">
                  Harnessing AI and quantum mechanics for drug discovery excellence.
                </h2>
                    </div>
                    </div>
                  </div>
        </section>

        {/* Precision Medicine Section */}
        <section className="py-16 lg:py-12" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <img src="/clinical.png" alt="Molecular Science and Drug Discovery" className="w-full h-auto rounded-xl" />
                    </div>
                  </div>
                  
              {/* Right Content */}
              <div className="space-y-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Precision Medicine</h2>
                <h2 className="text-md lg:text-xl text-gray-900">
                  Our platform accelerates the identification of novel drug candidates with precision, utilizing advanced computational chemistry to explore new therapeutic spaces and predict molecular properties effectively.
                </h2>
                    </div>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-12" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Image */}
                <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <img src="/smartdiscovery.png" alt="Smart Discovery" className="w-full h-auto rounded-xl" />
                </div>
                </div>
                
              {/* Right Content */}
              <div className="space-y-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Smart Discovery</h2>
                <h2 className="text-md lg:text-xl text-gray-900">
                We provide scalable, scientifically rigorous solutions that revolutionize drug discovery, ensuring speed and excellence in finding new medicines tailored to meet diverse healthcare needs.
                </h2>
              </div>
            </div>
          </div>
        </section>

        

            {/* In the News Section */}
            <section className="py-16 lg:py-24 bg-[#12a2df]">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">In the News</h2>
              
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* Article Card 1 */}
                  <div className="rounded-2xl shadow-lg p-6 lg:p-8 relative bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                        <div className="inline-block bg-[#12a2df] text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                        Article
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        Exclusive: Can AI replace animal testing? A new biotech launches to find out
                      </h3>
                      <p className="text-gray-600 text-sm">April 28, 2025</p>
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

                {/* Article Card 2 */}
                  <div className="rounded-2xl shadow-lg p-6 lg:p-8 relative bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                        <div className="inline-block bg-[#12a2df] text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                        Article
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        Axiom Bio Launches with $15M to Replace Animal Testing with AI for Drug Toxicity Prediction
                      </h3>
                      <p className="text-gray-600 text-sm">April 29, 2025</p>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Left Section - Axiom Brand */}
            <div className="md:col-span-1">
                             <img src="/udd-logo.png" alt="UDD - Universal Drug Discovery" className="h-12 w-auto mb-2" />
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

import Company from './Company';
import Publications from './Publications';
import Products from './Products';
import Security from './Security';
import Liver from './Liver';
import Dataset from './Dataset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/liver" element={<Liver />} />
        <Route path="/security" element={<Security />} />
        <Route path="/dataset" element={<Dataset />} />
      </Routes>
    </Router>
  );
}

export default App;