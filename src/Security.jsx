import React, { useState } from 'react';

function Security() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

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


        {/* Data & Trust Banner Section */}
        <section className="py-16" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-20">
            {/* Yellow DATA & TRUST Box */}
            <div className="inline-block px-6 py-2 rounded-lg font-semibold text-sm mb-8 uppercase tracking-wide bg-white">
              DATA & TRUST
            </div>
            
            {/* Main Message */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
              Your data is your most important asset: we keep it safe
            </h2>
          </div>
        </section>

        {/* Cloud Security Section */}
        <section className="py-16" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Section - Text */}
              <div className="space-y-8">
                {/* CLOUD Tag */}
                <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                  CLOUD
                </div>
                
                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Deploy Axiom securely in the cloud
                </h2>
                
                {/* Bullet Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Encryption: data is encrypted in transit and at rest.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Trusted networks: restrict Axiom access to your corporate IP range.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Passwordless login: reduces credential theft and phishing risks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Graphical Representation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-center space-x-8 py-36">
                  {/* Left Circle - Animated Loading Wheel */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#12a2df] rounded-full flex items-center justify-center shadow-lg">
                      {/* Animated Loading Wheel */}
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  
                  {/* Dotted Line */}
                  <div className="flex-1 h-1 bg-blue-600" style={{backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
                  
                  {/* Right Circle - Cloud Icon */}
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cloud Security Section */}
        <section className="py-16" style={{backgroundColor: '#12a2df'}}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Section - Text */}
              <div className="space-y-8">
                {/* CLOUD Tag */}
                <div className="inline-block bg-[#947eb0] text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                  ON-PREM
                </div>
                
                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Self manage your Axiom deployment
                </h2>
                
                {/* Bullet Points */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#947eb0] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                      Single tenancy: customize security controls to fit your organization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#947eb0] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                      Complete application log visibility: maintain complete audit trails for compliance requirements and audit processes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#947eb0] rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed">
                      Auto-scale capacity: get results on your timelines by growing or shrinking compute based on your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Graphical Representation */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-center space-x-8 py-36">
                  {/* Left Circle - Animated Loading Wheel */}
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#12a2df] rounded-full flex items-center justify-center shadow-lg">
                      {/* Animated Loading Wheel */}
                      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  
                  {/* Dotted Line */}
                  <div className="flex-1 h-1 bg-[#947eb0]" style={{backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
                  
                  {/* Right Circle - Cloud Icon */}
                  <div className="w-24 h-24 bg-[#947eb0] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
                 </section>

        {/* Security Features Grid Section */}
        <section className="py-16 bg-[#12a2df]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Shared-Nothing Data Architecture */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Shared-Nothing Data Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Your data at rest is stored on dedicated, individually-permissioned containers, providing robust isolation and maintaining clear security boundaries between customer environments.
                </p>
              </div>

              {/* Card 2: Zero AI Training on Customer Data */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Zero AI Training on Customer Data
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Axiom maintains a strict policy against using customer data to train or enhance our AI/ML models, ensuring your data remains yours.
                </p>
              </div>

              {/* Card 3: Zero-Retention Data Handling */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Zero-Retention Data Handling
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  When you're done, we're done - Axiom thoroughly removes all customer data, leaving no residual footprint in our systems.
                </p>
              </div>

              {/* Card 4: Enterprise-Grade Encryption */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Enterprise-Grade Encryption
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  We implement strong encryption for data at rest and in transit. Our systematic key rotation policies align with industry best practices to maintain continuous protection.
                </p>
              </div>

              {/* Card 5: SOC 2 Type 2 Implementation */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  SOC 2 Type 2 Implementation
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Our commitment to security excellence continues as we progress through SOC 2 implementation, with Type 2 audit completion targeted for 2025.
                </p>
              </div>

              {/* Card 6: Assured Business Continuity */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-white rounded-lg border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Assured Business Continuity
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Axiom maintains geographically-dispersed redundant data backups, supported by a comprehensive Disaster Recovery plan that's available for your review upon request.
                </p>
              </div>
            </div>
          </div>
                          </section>

                 {/* Security Measures Section */}
         <section className="py-16 bg-[#12a2df]">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
             {/* Section Title */}
             <h2 className="text-center mb-12 text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Security Measures
             </h2>
             
             {/* Two Column Layout */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Left Column - 3 Cards */}
               <div className="space-y-6">
                                   {/* Card 1 */}
                  <div className="bg-white rounded-2xl shadow-lg py-6 px-4 hover:shadow-xl transition-shadow border border-gray-100 w-full h-32">
                    <div className="flex items-center space-x-4 h-full">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          All customer data at rest is protected by 256-bit AES-GCM encryption, while all data in transit is secured using TLS 1.2 or higher.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl shadow-lg py-6 px-4 hover:shadow-xl transition-shadow border border-gray-100 w-full h-32">
                    <div className="flex items-center space-x-4 h-full">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          All third-party processors are covered by formal Data Processing Agreements. A list of third-party processors is available.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl shadow-lg py-6 px-4 hover:shadow-xl transition-shadow border border-gray-100 w-full h-32">
                    <div className="flex items-center space-x-4 h-full">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          Third-party processor authentication tokens are short-lived and narrowly scoped to prevent leaks and privilege escalation.
                        </p>
                      </div>
                    </div>
                  </div>
               </div>

               {/* Right Column - 2 Cards */}
               <div className="space-y-6">
                                   {/* Card 4 */}
                  <div className="bg-white rounded-2xl shadow-lg py-6 px-4 hover:shadow-xl transition-shadow border border-gray-100 w-full h-32">
                    <div className="flex items-center space-x-4 h-full">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          All customer data access is logged, and all logs are protected by user access control.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-white rounded-2xl shadow-lg py-6 px-4 hover:shadow-xl transition-shadow border border-gray-100 w-full h-32">
                    <div className="flex items-center space-x-4 h-full">
                      <div className="w-12 h-12 bg-white rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed">
                          All access to Axiom systems is limited by the principle of least privilege and managed via IAM tooling.
                        </p>
                      </div>
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

export default Security;
