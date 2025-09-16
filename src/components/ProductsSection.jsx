import React from 'react';

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Our Products</h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Advanced <span className="font-semibold text-gray-800">AI solutions</span> for modern healthcare laboratories
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-axiom-yellow rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">AI Diagnostics Platform</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Automated analysis of lab results with <span className="font-bold text-primary-600">99.9% accuracy</span> using advanced machine learning algorithms.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-axiom-yellow rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Predictive Analytics</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Early <span className="font-semibold text-gray-800">detection and risk assessment</span> tools that help prevent diseases before symptoms appear.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-axiom-yellow rounded-lg mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">Health Monitoring</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Real-time <span className="font-semibold text-gray-800">health tracking</span> and personalized insights for better patient outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;