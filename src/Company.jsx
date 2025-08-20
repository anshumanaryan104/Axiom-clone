import React, { useState } from 'react';

function Company() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

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

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        {/* About Us Section */}
        <section className="py-10 bg-[#12a2df]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                         {/* About Us Button */}
             <button style={{backgroundColor: '#12a2df'}} className="hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition-colors duration-200 mb-2 text-sm">
               ABOUT US
             </button>
            
            {/* Mission Statement */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Combined Over 80 years experience in Machine Learning, Quantum Chemistry & Drug Discovery
            </h1>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#12a2df]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left Navigation */}
              <div className="lg:w-1/4">
                                 <div className="space-y-4">
                   <button
                     onClick={() => setActiveTab(activeTab === 'team' ? 'all' : 'team')}
                     className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                       activeTab === 'team' 
                         ? 'bg-gray-100 text-gray-900' 
                         : 'text-gray-600 hover:text-gray-900'
                     }`}
                   >
                     Team
                   </button>
                   <button
                     onClick={() => setActiveTab(activeTab === 'advisors' ? 'all' : 'advisors')}
                     className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                       activeTab === 'advisors' 
                         ? 'bg-gray-100 text-gray-900' 
                         : 'text-gray-600 hover:text-gray-900'
                     }`}
                   >
                     Advisors
                   </button>
                   <button
                     onClick={() => setActiveTab(activeTab === 'investors' ? 'all' : 'investors')}
                     className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                       activeTab === 'investors' 
                         ? 'bg-gray-100 text-gray-900' 
                         : 'text-gray-600 hover:text-gray-900'
                     }`}
                   >
                     Investors
                   </button>
                 </div>
              </div>

                             {/* Right Content */}
               <div className="lg:w-3/4">
                                   {activeTab === 'all' && (
                    <div className="space-y-16">
                      {/* Team Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/CEO.png" alt="Ayesh Madushanka" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Ayesh Madushanka</h3>
                          <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/Clinical Medicinal Chemist.png" alt="Avanka Lowe" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Avanka Lowe</h3>
                          <p className="text-gray-600">CTO</p>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-600">SD</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                          <p className="text-gray-600">Software Developer</p>
                        </div>
                      </div>

                      {/* Advisors Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Advisor 1 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/ScientificAdvisor.png" alt="Elfi Kraka" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2"> Elfi Kraka</h3>
                          <p className="text-gray-600">Scientific Advisor</p>
                        </div>
                        
                        {/* Advisor 2 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/Pharmaceutical Industry Advisor.png" alt="Niraj Verma" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Niraj Verma</h3>
                          <p className="text-gray-600">Pharmaceutical Industry Advisor</p>
                        </div>
                      </div>

                      {/* Investors Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Investor 1 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-2xl font-bold text-gray-600">VC</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Venture Capital</h3>
                          <p className="text-gray-600">Series A Lead</p>
                        </div>
                        
                        {/* Investor 2 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-600">AI</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Angel Investor</h3>
                          <p className="text-gray-600">Seed Round</p>
                        </div>
                      </div>
                    </div>
                  )}

                 {activeTab === 'team' && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Team Member 1 */}
                     <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/CEO.png" alt="Ayesh Madushanka" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Ayesh Madushanka</h3>
                          <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/Clinical Medicinal Chemist.png" alt="Avanka Lowe" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Avanka Lowe</h3>
                          <p className="text-gray-600">CTO</p>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-600">SD</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                          <p className="text-gray-600">Software developer</p>
                        </div>
                   </div>
                 )}

                 {activeTab === 'advisors' && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Advisor 1 */}
                     <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/ScientificAdvisor.png" alt="Elfi Kraka" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2"> Elfi Kraka</h3>
                          <p className="text-gray-600">Scientific Advisor</p>
                        </div>
                        
                        {/* Advisor 2 */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/Pharmaceutical Industry Advisor.png" alt="Niraj Verma" className="rounded-full h-32 w-32" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Niraj Verma</h3>
                          <p className="text-gray-600">Pharmaceutical Industry Advisor</p>
                        </div>
                   </div>
                 )}

                 {activeTab === 'investors' && (
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Investor 1 */}
                     <div className="text-center">
                       <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                         <span className="text-2xl font-bold text-gray-600">VC</span>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">Venture Capital</h3>
                       <p className="text-gray-600">Series A Lead</p>
                     </div>
                     
                     {/* Investor 2 */}
                     <div className="text-center">
                       <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                         <span className="text-2xl font-bold text-gray-600">AI</span>
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">Angel Investor</h3>
                       <p className="text-gray-600">Seed Round</p>
                     </div>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </section>
              </main>

      {/* Company Stats Hero Section */}
              <section className="py-16 lg:py-24" style={{backgroundColor: '#12a2df'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Revolutionizing Drug Discovery with AI</h2>
            </div>
            {/* Right Text + Stats */}
            <div>
              <p className="text-lg text-gray-700 mb-10">Harnessing AI and Quantum Mechanics for Innovative Medicine Solutions.</p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-5xl lg:text-6xl font-extrabold text-[#2e6f88]">150+</div>
                  <div className="mt-2 text-gray-600">Innovative Solutions</div>
                </div>
                <div>
                  <div className="text-5xl lg:text-6xl font-extrabold text-[#2e6f88]">15</div>
                  <div className="mt-2 text-gray-600">Trusted by Experts</div>
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

            {/* Security Column */}
            <div>
              <h4 className="text-gray-700 font-medium mb-4">Security</h4>
              <ul className="space-y-2">
                <li><a href="/security" className="text-gray-600 hover:text-gray-900 transition-colors">Information</a></li>
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

export default Company; 