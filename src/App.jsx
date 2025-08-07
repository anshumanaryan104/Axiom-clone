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
    <div className="min-h-screen" style={{backgroundColor: 'rgba(237,233,230,255)'}}>
      {/* Navigation Header */}
      <header className="fixed top-0 w-full border-b border-gray-200 z-50 shadow-sm " style={{backgroundColor: 'RGB(237, 233, 230, 1)'}}>
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
                   onClick={() => window.location.href = '/products'}
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

      {/* Hero Section */}
      <main className="pt-16 lg:pt-20">
        <section className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
                                {/* Mission Banner */}
                    <div className="rounded-2xl px-8 py-12 lg:px-12 lg:py-16 text-center border border-gray-200 shadow-lg animate-fade-in" style={{backgroundColor: '#f2efea'}}>
                      <div className="max-w-4xl mx-auto px-16 lg:px-24">
                        {/* Our Mission Badge */}
                        <div className="inline-block px-6 py-2 rounded-full font-semibold text-sm mb-0 mt-28 animate-scale stagger-1" style={{backgroundColor: '#ffe24e'}}>
                          Our Mission
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up stagger-2">
                          Eliminate drug toxicity, without using animals.
                        </h1>
                        <p className="text-base lg:text-lg text-gray-800 leading-relaxed mx-12 lg:mx-24 animate-slide-up stagger-3">
                          Axiom equips scientists with AI models which are more accurate and more affordable than traditional physical experiments.
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
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        FDA Drug Safety Communications
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Official FDA announcements about drug safety issues, recalls, and toxicity warnings that affect public health and clinical practice.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit FDA.gov
                      </button>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        PubMed Research Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Comprehensive database of biomedical literature including studies on drug toxicity, clinical trials, and pharmaceutical research.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit PubMed
                      </button>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        ClinicalTrials.gov
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Registry of clinical studies worldwide, tracking drug development progress and safety outcomes in human trials.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit ClinicalTrials.gov
                      </button>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Nature Drug Discovery
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Leading scientific journal covering drug discovery, development challenges, and innovative approaches to toxicity prediction.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Nature.com
                      </button>
                    </div>

                    {/* Card 5 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        PhRMA Research Reports
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Pharmaceutical industry research organization providing data on drug development costs, timelines, and failure rates.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit PhRMA.org
                      </button>
                    </div>

                    {/* Card 6 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        EMA Scientific Guidelines
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        European Medicines Agency guidelines for drug development, safety assessment, and regulatory requirements in Europe.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
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
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        WHO Drug Safety Reports
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        World Health Organization global database of adverse drug reactions and safety monitoring reports from healthcare systems worldwide.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit WHO.int
                      </button>
                    </div>

                    {/* Card 8 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Science Translational Medicine
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Premier journal publishing research on translating basic science discoveries into medical applications and drug development.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Science.org
                      </button>
                    </div>

                    {/* Card 9 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        DrugBank Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Comprehensive resource combining detailed drug data with comprehensive drug target information for pharmaceutical research.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit DrugBank.ca
                      </button>
                    </div>

                    {/* Card 10 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        NCBI Toxicology Database
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        National Center for Biotechnology Information's comprehensive toxicology and environmental health database.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit NCBI.nlm.nih.gov
                      </button>
                    </div>

                    {/* Card 11 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        Journal of Toxicology
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Peer-reviewed research on toxicological sciences, including computational toxicology and alternative testing methods.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
                        Visit Hindawi.com
                      </button>
                    </div>

                    {/* Card 12 */}
                    <div className="rounded-xl border border-gray-200 shadow-lg p-6" style={{backgroundColor: '#f4f2f0'}}>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        EPA CompTox Dashboard
                      </h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Environmental Protection Agency's computational toxicology platform providing chemical safety and toxicity data.
                      </p>
                      <button style={{backgroundColor: '#ffe24e'}} className="hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold transition-colors">
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

        {/* OLD PARADIGM Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#f4f2f0'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase">
                    OLD PARADIGM
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Lab and animal experiments are not enough to prevent toxicity.
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        90% of drugs fail; toxicity is a leading cause <sup className="text-sm text-gray-500">1 2 3</sup>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        All drugs are tested in lab and animal experiments, but many still fail clinical trials due to toxicity
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Tens of billions of dollars are lost to preclinical and clinical toxicity failures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Chart */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Reasons for Drug Development Failure
                    </h3>
                    <div className="flex items-center justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Safety</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-300 rounded-full"></div>
                        <span className="text-gray-700">Efficacy, PK/PD, Strategy</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-80">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600 pr-4">
                      <span>100%</span>
                      <span>50%</span>
                      <span>0%</span>
                    </div>
                    
                    <div className="ml-8 h-full flex items-end justify-center space-x-8">
                      {/* Preclinical */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-48 bg-gray-100 rounded-t-lg mb-4">
                          <div className="absolute bottom-0 w-full bg-red-500 rounded-t-lg" style={{height: '55%'}}>
                            <div className="absolute inset-x-0 top-2 text-center">
                              <span className="text-white font-semibold text-xs">55%</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 w-full bg-red-300 rounded-t-lg" style={{height: '45%'}}>
                            <div className="absolute inset-x-0 bottom-2 text-center">
                              <span className="text-white font-semibold text-xs">45%</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-sm">Preclinical</div>
                          <div className="text-xs text-gray-600">$12M+ spent</div>
                        </div>
                      </div>
                      
                      {/* Phase I */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-48 bg-gray-100 rounded-t-lg mb-4">
                          <div className="absolute bottom-0 w-full bg-red-500 rounded-t-lg" style={{height: '40%'}}>
                            <div className="absolute inset-x-0 top-2 text-center">
                              <span className="text-white font-semibold text-xs">40%</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 w-full bg-red-300 rounded-t-lg" style={{height: '60%'}}>
                            <div className="absolute inset-x-0 bottom-2 text-center">
                              <span className="text-white font-semibold text-xs">60%</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-sm">Phase I</div>
                          <div className="text-xs text-gray-600">$22M+ spent</div>
                        </div>
                      </div>
                      
                      {/* Phase II */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-16 h-48 bg-gray-100 rounded-t-lg mb-4">
                          <div className="absolute bottom-0 w-full bg-red-500 rounded-t-lg" style={{height: '15%'}}>
                            <div className="absolute inset-x-0 top-1 text-center">
                              <span className="text-white font-semibold text-xs">15%</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 w-full bg-red-300 rounded-t-lg" style={{height: '85%'}}>
                            <div className="absolute inset-x-0 bottom-2 text-center">
                              <span className="text-white font-semibold text-xs">85%</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-gray-900 text-sm">Phase II</div>
                          <div className="text-xs text-gray-600">$50M+ spent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHANGING INDUSTRY Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#f4f2f0'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase">
                    CHANGING INDUSTRY
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Current experimental methods are becoming obsolete.
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Congress dropped the legal requirement for animal testing <sup className="text-sm text-gray-500">4</sup>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Congress and the FDA have announced they are phasing out animal experiments <sup className="text-sm text-gray-500">5</sup>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Industry, big pharma, regulators, and academia are looking for alternative approaches
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Chart */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Number of Animals Tested vs. R&D Spend
                    </h3>
                    <div className="flex items-center justify-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">Animals</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">R&D Spend</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative h-80">
                    {/* Left Y-axis labels (Animals) */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600 pr-4">
                      <span>600K</span>
                      <span>500K</span>
                      <span>400K</span>
                      <span>300K</span>
                      <span>200K</span>
                      <span>100K</span>
                      <span>0</span>
                    </div>
                    
                    {/* Right Y-axis labels (R&D Spend) */}
                    <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600 pl-4">
                      <span>$10B</span>
                      <span>$8B</span>
                      <span>$6B</span>
                      <span>$4B</span>
                      <span>$2B</span>
                      <span>$0B</span>
                    </div>
                    
                    <div className="mx-8 h-full relative">
                      <div className="flex items-end justify-between h-full">
                        {/* 2018 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 w-12 h-48 rounded-t-sm mb-2"></div>
                          <span className="text-xs text-gray-700 font-semibold">2018</span>
                        </div>
                        {/* 2019 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 w-12 h-44 rounded-t-sm mb-2"></div>
                          <span className="text-xs text-gray-700 font-semibold">2019</span>
                        </div>
                        {/* 2020 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 w-12 h-36 rounded-t-sm mb-2"></div>
                          <span className="text-xs text-gray-700 font-semibold">2020</span>
                        </div>
                        {/* 2021 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 w-12 h-32 rounded-t-sm mb-2"></div>
                          <span className="text-xs text-gray-700 font-semibold">2021</span>
                        </div>
                        {/* 2022 */}
                        <div className="flex flex-col items-center">
                          <div className="bg-blue-600 w-12 h-28 rounded-t-sm mb-2"></div>
                          <span className="text-xs text-gray-700 font-semibold">2022</span>
                        </div>
                      </div>
                      
                      {/* R&D Spend Line Chart */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <polyline
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                          strokeLinecap="round"
                          points="20,200 60,180 120,160 180,140 220,120"
                        />
                        {/* Data points */}
                        <circle cx="20" cy="200" r="4" fill="#10b981"/>
                        <circle cx="60" cy="180" r="4" fill="#10b981"/>
                        <circle cx="120" cy="160" r="4" fill="#10b981"/>
                        <circle cx="180" cy="140" r="4" fill="#10b981"/>
                        <circle cx="220" cy="120" r="4" fill="#10b981"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW PARADIGM Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#f4f2f0'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block bg-axiom-yellow text-gray-900 px-4 py-2 rounded-lg text-sm font-bold tracking-wide uppercase">
                    NEW PARADIGM
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Axiom helps scientists derisk drug toxicity.
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-axiom-yellow rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        More accurate predictions of clinical outcomes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-axiom-yellow rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Affordably measure safety from the beginning of drug development
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-axiom-yellow rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Save millions by reducing synthesis and assay costs and avoiding late stage failures
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Chart with Animated Molecular Objects */}
              <div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 overflow-hidden">
                  <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl">
                    {/* Animated Molecular Structure - Top Right */}
                    <div className="absolute top-8 right-12 animate-bounce">
                      <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transform rotate-12">
                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none">
                          <circle cx="6" cy="6" r="2" fill="currentColor"/>
                          <circle cx="18" cy="6" r="2" fill="currentColor"/>
                          <circle cx="12" cy="18" r="2" fill="currentColor"/>
                          <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="2"/>
                          <line x1="6" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2"/>
                          <line x1="18" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="9" cy="3" r="1" fill="#ef4444"/>
                          <circle cx="15" cy="3" r="1" fill="#ef4444"/>
                        </svg>
                      </div>
                      {/* Orbit ring around molecule */}
                      <div className="absolute inset-0 w-20 h-20 border-2 border-red-300 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                    </div>
                    
                    {/* Animated Spherical Object - Bottom Center */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                      <div className="relative w-16 h-16 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg animate-pulse">
                          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-t from-transparent to-white opacity-30"></div>
                          <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full opacity-80"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional Moving Particles */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Floating Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30">
                      <line x1="20%" y1="30%" x2="70%" y2="20%" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite"/>
                      </line>
                      <line x1="40%" y1="70%" x2="60%" y2="40%" stroke="#9ca3af" strokeWidth="1" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" values="0;4" dur="3s" repeatCount="indefinite"/>
                      </line>
                    </svg>
                    
                    {/* Rotating Background Elements */}
                    <div className="absolute top-12 left-8 w-6 h-6 border-2 border-gray-400 rounded-sm animate-spin" style={{animationDuration: '8s'}}></div>
                    <div className="absolute bottom-12 right-8 w-8 h-8 border-2 border-gray-400 rotate-45 animate-pulse"></div>
                    
                    {/* Central Rotating System */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '6s'}}>
                          <div className="w-full h-full border-4 border-gray-300 rounded-full border-dashed"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s'}}>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping"></div>
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
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

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24" style={{backgroundColor: '#f2efea'}}>
          <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl mx-auto">
              Assess and validate Axiom's new paradigm for yourself
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto px-4">
              Our early partners include some of the world's largest pharma companies. See what they are excited about.
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-8 right-8 opacity-20">
            <div className="w-16 h-16 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-32 right-32 opacity-30">
            <div className="w-12 h-12 border-2 border-gray-400 rounded-lg transform rotate-45"></div>
          </div>


          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
              {/* Left: Comparison Table with Cards */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-8">
                  {/* Header Row */}
                  <div className="grid grid-cols-3 gap-8 mb-8">
                    <div></div>
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-gray-300 rounded-full">
                          <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
                            <line x1="12" y1="11" x2="12" y2="13" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="8" cy="12" r="1" fill="currentColor"/>
                            <circle cx="16" cy="12" r="1" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">FDA & Insphero</h3>
                      <p className="text-sm text-gray-600">3D Spheroid</p>
                    </div>
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" stroke="currentColor" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Axiom</h3>
                      <p className="text-sm text-gray-600">AI experiment</p>
                    </div>
                  </div>

                  {/* Metrics Rows */}
                  <div className="space-y-6">
                    {/* AUC */}
                    <div className="grid grid-cols-3 gap-8 py-4 border-b border-gray-100">
                      <div className="text-lg text-gray-600 font-medium">AUC</div>
                      <div className="text-center text-2xl font-bold text-gray-900">0.80</div>
                      <div className="text-center text-2xl font-bold text-gray-900">0.89</div>
                    </div>

                    {/* Sensitivity */}
                    <div className="grid grid-cols-3 gap-8 py-4 border-b border-gray-100">
                      <div className="text-lg text-gray-600 font-medium">Sensitivity</div>
                      <div className="text-center text-2xl font-bold text-gray-900">72%</div>
                      <div className="text-center text-2xl font-bold text-gray-900">75%</div>
                    </div>

                    {/* Specificity */}
                    <div className="grid grid-cols-3 gap-8 py-4 border-b border-gray-100">
                      <div className="text-lg text-gray-600 font-medium">Specificity</div>
                      <div className="text-center text-2xl font-bold text-gray-900">90%</div>
                      <div className="text-center text-2xl font-bold text-gray-900">93%</div>
                    </div>

                    {/* Cost */}
                    <div className="grid grid-cols-3 gap-8 py-4 border-b border-gray-100">
                      <div className="text-lg text-gray-600 font-medium">Cost</div>
                      <div className="text-center text-xl font-bold text-gray-900">$5,000-$15,000</div>
                      <div className="text-center text-xl font-bold text-gray-900">$100-$450</div>
                    </div>

                    {/* Clinical Liver Injury Card inside table */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-xl text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Liver Injury</h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        Use Axiom to predict clinical liver injury with improved accuracy and lower costs.
                      </p>
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-200 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Large Animation Card */}
              <div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  {/* Animation Area */}
                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 p-8 relative overflow-hidden">
                    {/* Large Central Molecular System */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        {/* Central Core */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg">
                            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-t from-transparent to-white opacity-30"></div>
                            <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full opacity-80"></div>
                          </div>
                        </div>
                        
                        {/* Orbital Ring 1 */}
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s'}}>
                          <div className="w-full h-full border-4 border-blue-300 rounded-full border-dashed opacity-40"></div>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
                          </div>
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                            <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                          </div>
                        </div>
                        
                        {/* Orbital Ring 2 */}
                        <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}>
                          <div className="w-full h-full border-2 border-purple-300 rounded-full opacity-30"></div>
                          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
                          </div>
                          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute top-16 left-16 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-32 right-20 w-6 h-6 bg-blue-500 rounded-full animate-pulse opacity-50" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-24 left-20 w-10 h-10 bg-green-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '2.5s'}}></div>
                    <div className="absolute bottom-32 right-16 w-5 h-5 bg-red-400 rounded-full animate-ping opacity-60" style={{animationDelay: '3s'}}></div>
                    
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
                    </div>
                  </div>
                  
                  {/* How it Works Section at Bottom */}
                  <div className="p-8 text-center bg-white">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How it works</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Axiom trains models on the world's largest, most comprehensive dataset of primary human liver biology.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {/* Higher accuracy */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 italic">Higher accuracy</h3>
              </div>

              {/* Faster testing */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 italic">Faster testing</h3>
              </div>

              {/* Reduced cost */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 italic">Reduced cost</h3>
              </div>

              {/* Interpretable results */}
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 rounded-full">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 italic">Interpretable results</h3>
              </div>
            </div>

            {/* In the News Section */}
            <div className="mt-24">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">In the News</h2>
              
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* Article Card 1 */}
                <div className="rounded-2xl shadow-lg p-6 lg:p-8 relative" style={{backgroundColor: '#f4f2f0'}}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                      <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                        Article
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        Exclusive: Can AI replace animal testing? A new biotech launches to find out
                      </h3>
                      <p className="text-gray-600 text-sm">April 28, 2025</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Article Card 2 */}
                <div className="rounded-2xl shadow-lg p-6 lg:p-8 relative" style={{backgroundColor: '#f4f2f0'}}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-8">
                      <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-lg mb-4 uppercase tracking-wide">
                        Article
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                        Axiom Bio Launches with $15M to Replace Animal Testing with AI for Drug Toxicity Prediction
                      </h3>
                      <p className="text-gray-600 text-sm">April 29, 2025</p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors duration-200">
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

import Company from './Company';
import Publications from './Publications';
import Products from './Products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;