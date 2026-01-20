
import React, { useState } from 'react';
import { LoanApplication, LoanStatus } from '../types';

interface TrackProps {
  loans: LoanApplication[];
}

const Track: React.FC<TrackProps> = ({ loans }) => {
  const [searchId, setSearchId] = useState('');
  const [selectedLoan, setSelectedLoan] = useState<LoanApplication | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = loans.find(l => l.id.toLowerCase() === searchId.toLowerCase());
    setSelectedLoan(found || null);
    if (!found) alert('Application ID not found.');
  };

  const getStatusColor = (status: LoanStatus) => {
    switch(status) {
      case LoanStatus.PENDING: return 'bg-amber-50 text-amber-600 border-amber-100';
      case LoanStatus.APPROVED: return 'bg-blue-50 text-blue-600 border-blue-100';
      case LoanStatus.REJECTED: return 'bg-rose-50 text-rose-600 border-rose-100';
      case LoanStatus.DISBURSED: return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-500 border-slate-100';
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Track Your Request</h1>
          <p className="mt-3 text-lg text-slate-600 font-medium">Enter your application ID to view real-time status and payment plans.</p>
        </div>

        <form onSubmit={handleSearch} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <input
              type="text"
              className="flex-grow px-8 py-5 rounded-2xl bg-slate-50 border-transparent focus:ring-0 outline-none font-bold text-lg placeholder:text-slate-300"
              placeholder="e.g. LN-123456"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all text-sm uppercase tracking-widest">
              Search Status
            </button>
          </div>
        </form>

        {selectedLoan && (
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-10 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900">{selectedLoan.fullName}</h2>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">Application ID: {selectedLoan.id}</p>
              </div>
              <span className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] border ${getStatusColor(selectedLoan.status)}`}>
                {selectedLoan.status}
              </span>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2 block">Clinical Partner</span>
                <p className="font-extrabold text-slate-900">{selectedLoan.hospitalId}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2 block">Approved Amount</span>
                <p className="font-extrabold text-slate-900">₦{selectedLoan.estimatedCost.toLocaleString()}</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100/50">
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2 block">Submitted</span>
                <p className="font-extrabold text-slate-900">{new Date(selectedLoan.appliedAt).toLocaleDateString()}</p>
              </div>
            </div>

            {(selectedLoan.status === LoanStatus.APPROVED || selectedLoan.status === LoanStatus.DISBURSED) ? (
              <div className="p-10 bg-blue-50/50 border-t border-blue-50">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  Repayment Installments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Array.from({ length: selectedLoan.repaymentDuration }).map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl flex justify-between items-center shadow-sm border border-blue-100/50">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 block uppercase tracking-widest mb-1">Payment {i + 1}</span>
                        <span className="font-extrabold text-slate-900">₦{(selectedLoan.estimatedCost / selectedLoan.repaymentDuration).toFixed(2)}</span>
                      </div>
                      <span className="bg-slate-50 text-slate-300 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">Unpaid</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-16 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <p className="text-slate-500 font-medium">Your schedule will be generated once the application is approved by our medical team.</p>
              </div>
            )}
          </div>
        )}

        {!selectedLoan && searchId && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-bold">No application found matching that ID. Please verify and try again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
