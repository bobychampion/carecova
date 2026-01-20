
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Admin from './pages/Admin';
import Track from './pages/Track';
import FAQ from './pages/FAQ';
import Calculator from './pages/Calculator';
import Partners from './pages/Partners';
import Technology from './pages/Technology';
import { LoanApplication } from './types';

const App: React.FC = () => {
  const [loans, setLoans] = useState<LoanApplication[]>(() => {
    const saved = localStorage.getItem('carenow_loans');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('carenow_loans', JSON.stringify(loans));
  }, [loans]);

  const addLoan = (loan: LoanApplication) => {
    setLoans(prev => [loan, ...prev]);
  };

  const updateLoan = (id: string, updates: Partial<LoanApplication>) => {
    setLoans(prev => prev.map(l => l.id === id ? { ...l, ...updates } : l));
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply onApply={addLoan} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/track" element={<Track loans={loans} />} />
            <Route path="/admin" element={<Admin loans={loans} onUpdate={updateLoan} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
