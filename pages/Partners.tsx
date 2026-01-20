
import React from 'react';
import { PARTNER_HOSPITALS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Verified Partner Clinics</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto font-medium">Access specialized care at Nigeria's top elective medical facilities with CareCova financing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PARTNER_HOSPITALS.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hospital.image} 
                  alt={hospital.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">Verified Partner</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-extrabold text-lg text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{hospital.name}</h3>
                <p className="text-xs text-emerald-600 font-black uppercase tracking-widest mb-4">{hospital.specialty}</p>
                <div className="flex items-center text-slate-400 text-sm font-medium">
                  <svg className="w-5 h-5 mr-2 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {hospital.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
