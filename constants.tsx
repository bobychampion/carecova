
import React from 'react';

export const TREATMENT_CATEGORIES = [
  'IVF & Fertility Treatment',
  'Dental Implants & Orthodontics',
  'Cosmetic Surgery',
  'Corrective Eye Surgery (Lasik)',
  'Premium Health Screening',
  'Optical Procedures',
  'Elective Wellness Care'
];

export const NAV_LINKS = [
  { label: 'How It Works', path: '/', hash: 'how-it-works' },
  { label: 'Repayment Calculator', path: '/calculator' },
  { label: 'Technology', path: '/technology' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Track Application', path: '/track' }
];

export const FAQS = [
  {
    question: "What is CareCova?",
    answer: "CareCova is a healthcare financing platform that allows you to pay for elective medical procedures in flexible installments rather than all at once."
  },
  {
    question: "Is there any collateral required?",
    answer: "No, CareCova does not require collateral. Our approval is based on your affordability and credit profile."
  },
  {
    question: "How long does approval take?",
    answer: "We aim for quick approval within 24 hours once all required documents are submitted."
  },
  {
    question: "Which clinics can I use CareCova at?",
    answer: "Currently, you can use CareCova at any registered medical facility in Nigeria. Simply provide their details during your application."
  },
  {
    question: "Are there hidden charges?",
    answer: "No. We pride ourselves on transparency. Your repayment schedule will clearly show the total amount you will pay back."
  }
];

export const PARTNER_HOSPITALS = [
  {
    id: 'h1',
    name: 'St. Nicholas Hospital',
    location: 'Lagos Island, Lagos',
    specialty: 'Multispecialty & Surgery',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 'h2',
    name: 'Bridge Clinic',
    location: 'Ikeja, Lagos',
    specialty: 'IVF & Fertility',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
  },
  {
    id: 'h3',
    name: 'Smile360 Dental',
    location: 'Ikoyi, Lagos',
    specialty: 'Dental & Orthodontics',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'h4',
    name: 'Eye Foundation Hospital',
    location: 'Victoria Island, Lagos',
    specialty: 'Ophthalmology & Lasik',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
  }
];
