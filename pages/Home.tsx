
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // Static image representing a professional medical administrative/billing environment
  const medicalHeroImg = "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left flex flex-col justify-center">
              <h1>
                <span className="block text-sm font-bold uppercase tracking-[0.2em] text-blue-600 sm:text-base lg:text-sm xl:text-base mb-4">
                  Smart Medical Financing
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-slate-900">
                  <span className="block">Budget Your Health</span>
                  <span className="block text-blue-600">With CareCova.</span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 sm:mt-8 sm:text-xl leading-relaxed max-w-2xl">
                Don't let medical costs delay your wellness. Access specialized <span className="font-bold text-slate-900">elective procedures</span> immediately and pay in simple weekly or monthly installments.
              </p>
              <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/apply" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-base font-extrabold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-200 transform hover:-translate-y-1 transition-all">
                    Start My Application
                  </Link>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="inline-flex items-center justify-center px-10 py-4 border border-slate-200 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm"
                  >
                    Learn How it Works
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-2xl shadow-3xl overflow-hidden aspect-[4/5] bg-slate-100 border-8 border-white">
                <img 
                  className="w-full h-full object-cover" 
                  src={medicalHeroImg} 
                  alt="Modern hospital reception and billing office" 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden lg:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Fast Processing</p>
                    <p className="text-sm font-extrabold text-slate-900">Quick Approval within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Your Path to Care</h2>
            <p className="mt-4 text-xl text-slate-600">Four easy steps to financing your elective medical treatment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Securely upload your treatment estimate or hospital bill.', color: 'blue' },
              { step: '02', title: 'Review', desc: 'Get a fast decision based on smart affordability checks.', color: 'emerald' },
              { step: '03', title: 'Treated', desc: 'Focus on your health while we settle the bill directly.', color: 'blue' },
              { step: '04', title: 'Repay', desc: 'Split the cost into clear, interest-fair installments.', color: 'emerald' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 w-2 h-full ${item.color === 'blue' ? 'bg-blue-600' : 'bg-emerald-500'}`}></div>
                <span className={`text-6xl font-black opacity-5 absolute -right-4 -bottom-4 ${item.color === 'blue' ? 'text-blue-900' : 'text-emerald-900'}`}>{item.step}</span>
                <h3 className="text-xl font-extrabold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus on Elective Procedures */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-20">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-8">Financing for Elective Procedures</h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Health shouldn't wait for your next paycheck. CareCova empowers you to access essential but non-emergency medical care with financial dignity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'IVF & Fertility', desc: 'Realize your family dreams now, pay over time.' },
                  { title: 'Dental & Optical', desc: 'Comprehensive care for eyes, teeth, and wellness.' },
                  { title: 'Screenings & Wellness', desc: 'Preventive checks to stay ahead of health issues.' },
                  { title: 'Cosmetic & Corrective', desc: 'Specialized surgeries and corrective procedures.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 hover:border-blue-100 transition-all group">
                    <h4 className="font-extrabold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>
                </div>
                <h3 className="text-3xl font-bold mb-8 text-blue-400">Our Commitment</h3>
                <p className="text-slate-300 text-xl leading-relaxed mb-10 italic font-light">
                  "CareCova exists to remove financial fear from medical choices. Because no parent should delay care. No couple should postpone hope. And no family should ever compromise health for cash flow."
                </p>
                <div className="pt-8 border-t border-slate-800">
                  <h4 className="font-bold text-emerald-400 uppercase tracking-widest text-sm mb-6">Built for Nigeria</h4>
                  <ul className="grid grid-cols-1 gap-4 text-slate-400 font-medium">
                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> No collateral required</li>
                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Transparent repayment schedules</li>
                    <li className="flex items-center gap-3"><svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Supporting salaried & business owners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-blue-600 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-4xl font-extrabold sm:text-6xl mb-8 tracking-tight">Access quality care today.</h2>
          <p className="text-blue-100 text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Ready to move forward with your elective procedure? Let CareCova handle the upfront costs so you can focus on your recovery.
          </p>
          <Link to="/apply" className="inline-flex items-center justify-center px-12 py-5 bg-white text-blue-600 font-extrabold rounded-full text-xl hover:bg-slate-50 transition-all shadow-3xl hover:scale-105 transform">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
