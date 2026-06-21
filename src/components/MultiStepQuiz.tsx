/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, TrendingUp, Sun, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Lead, Region } from '../types';

interface QuizProps {
  currentRegion: Region;
  onLeadCaptured: (lead: Lead) => void;
}

export default function MultiStepQuiz({ currentRegion, onLeadCaptured }: QuizProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 'result'>(1);
  const [formData, setFormData] = useState({
    goal: '',
    billRange: '',
    name: '',
    email: '',
    phone: '',
    suburb: '',
  });
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');

  const goals = [
    { id: 'bills', label: 'Lower high electricity bills', icon: TrendingUp, desc: 'Offset sky-high grid tariffs with sunshine' },
    { id: 'backup', label: 'Get backup power storage', icon: Shield, desc: 'Keep your home running during local outages' },
    { id: 'ev', label: 'Charge an Electric Vehicle (EV)', icon: Sparkles, desc: 'Drive on 100% free, abundant solar energy' },
    { id: 'all', label: 'All of the above (Smart Home Setup)', icon: Sun, desc: 'The complete self-sufficient system' },
  ];

  const billRanges = [
    { id: 'low', label: 'Under $500', range: 'Less than $500', recommendedSize: '6.6kW System' },
    { id: 'mid', label: '$500 – $800', range: '$500 to $800', recommendedSize: '8.6kW System' },
    { id: 'high', label: '$800 – $1,200', range: '$800 to $1,200', recommendedSize: '10.8kW System' },
    { id: 'extreme', label: '$1,200+', range: '$1,200 or more', recommendedSize: '13.2kW+ System & Battery' },
  ];

  const handleNext = () => {
    if (step === 1) {
      if (!formData.goal) {
        setValidationError('Please select your primary energy goal.');
        return;
      }
      setValidationError('');
      setStep(2);
    } else if (step === 2) {
      if (!formData.billRange) {
        setValidationError('Please select your average quarterly electricity bill.');
        return;
      }
      setValidationError('');
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.suburb) {
      setValidationError('Please fill in all details to generate your report.');
      return;
    }
    setValidationError('');
    setLoading(true);

    // Simulate smart local algorithms
    setTimeout(() => {
      let annualSavings = 1600;
      let payback = 4.2;
      
      if (formData.billRange === 'mid') {
        annualSavings = 2500;
        payback = 3.9;
      } else if (formData.billRange === 'high') {
        annualSavings = 3800;
        payback = 3.5;
      } else if (formData.billRange === 'extreme') {
        annualSavings = 5400;
        payback = 3.2;
      }

      const newLead: Lead = {
        id: 'lead-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        suburb: formData.suburb,
        region: currentRegion,
        goal: formData.goal,
        quarterlyBill: formData.billRange,
        estimatedSavingsPerYear: annualSavings,
        estimatedPaybackYears: payback,
        timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
        source: 'quiz',
        status: 'new',
      };

      onLeadCaptured(newLead);
      setLoading(false);
      setStep('result');
    }, 1200);
  };

  // Calculations for results dashboard
  let sizeLabel = '6.6kW Solar';
  let panelsCount = 16;
  let quoteDescription = 'Standard High-Performance Solar Entry';

  if (formData.billRange === 'mid') {
    sizeLabel = '8.2kW Smart Solar';
    panelsCount = 20;
    quoteDescription = 'Optimal Family Offset Package';
  } else if (formData.billRange === 'high') {
    sizeLabel = '10.8kW Premium System';
    panelsCount = 26;
    quoteDescription = 'Dual-Inverter Commercial-Grade Domestic Package';
  } else if (formData.billRange === 'extreme') {
    sizeLabel = '13.2kW Solar & Tesla Powerwall 2';
    panelsCount = 32;
    quoteDescription = 'Ultimate Off-Grid Capable Smart Microgrid';
  }

  return (
    <div id="savings-calculator" className="w-full max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Quiz Progress & Headers */}
      <div className="bg-slate-900 text-white px-6 py-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 tracking-widest font-semibold uppercase">SECURE SOLAR QUOTE ENGINE</span>
          <h3 className="text-2xl font-display font-semibold mt-1">
            {step === 'result' ? '🎉 Your Custom Savings Analysis' : 'Get Your Free Custom Savings Report'}
          </h3>
        </div>
        
        {step !== 'result' && (
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  step === s ? 'w-10 bg-emerald-500' : s < step ? 'w-3 bg-emerald-700' : 'w-3 bg-slate-700'
                }`}
              />
            ))}
            <span className="text-xs font-mono text-slate-400 ml-2">Step {step} of 3</span>
          </div>
        )}
      </div>

      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          {/* Step 1: Goals */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h4 className="text-xl font-display font-semibold text-slate-800">What is your primary goal with choosing solar?</h4>
                <p className="text-sm text-slate-500 mt-1">Select the item that matches your home or lifestyle needs.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.map((goal) => {
                  const Icon = goal.icon;
                  const isSelected = formData.goal === goal.label;
                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, goal: goal.label });
                        setValidationError('');
                      }}
                      className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-50/50 shadow-md translate-y-[-2px]' 
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-base">{goal.label}</p>
                          <p className="text-xs text-slate-500 mt-1">{goal.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {validationError && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1.5 justify-center">
                  ⚠️ {validationError}
                </p>
              )}

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  id="quiz-next-1"
                  onClick={handleNext}
                  className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg text-white font-medium px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer transition"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Bill Estimates */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h4 className="text-xl font-display font-semibold text-slate-800 font-medium">What is your average quarterly electricity bill?</h4>
                <p className="text-sm text-slate-500 mt-1">Select the range that matches your typical quarterly electricity statement.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {billRanges.map((range) => {
                  const isSelected = formData.billRange === range.id;
                  return (
                    <button
                      key={range.id}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, billRange: range.id });
                        setValidationError('');
                      }}
                      className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-50/50 shadow-md translate-y-[-2px]' 
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-emerald-600 font-bold tracking-wider uppercase bg-emerald-100 px-2 py-0.5 rounded-full">
                          {range.recommendedSize}
                        </span>
                        {isSelected && <CheckCircle className="w-5 h-5 text-emerald-500 fill-emerald-50" />}
                      </div>
                      <p className="text-2xl font-display font-extrabold text-slate-800">{range.label}</p>
                      <p className="text-xs text-slate-500 mt-1">Suggested panel and storage integration target.</p>
                    </button>
                  );
                })}
              </div>

              {validationError && (
                <p className="text-red-500 text-sm font-medium flex items-center gap-1.5 justify-center">
                  ⚠️ {validationError}
                </p>
              )}

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1.5 cursor-pointer transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  id="quiz-next-2"
                  onClick={handleNext}
                  className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg text-white font-medium px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer transition"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center md:text-left">
                <h4 className="text-xl font-display font-semibold text-slate-800">Where should we send your custom solar savings report?</h4>
                <p className="text-sm text-slate-500 mt-1">Nathan and the local design team will draft a layout matching your roof footprint.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Brad Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Suburb (Central Coast / Newcastle)</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Wamberal, NSW 2260"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. brad@yourdomain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Mobile Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0405 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {validationError && (
                  <p className="text-red-500 text-sm font-medium flex items-center gap-1.5 justify-center">
                    ⚠️ {validationError}
                  </p>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1.5 cursor-pointer transition"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    id="submit-quiz"
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl text-white font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 cursor-pointer transition disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Engineering Analysis...
                      </span>
                    ) : (
                      <>
                        Calculate Free Savings layout
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Results Screen */}
          {step === 'result' && (
            <motion.div
              key="step-result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6 text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-emerald-100 rounded-full text-emerald-600 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              
              <div className="bg-emerald-50 rounded-2xl p-6 max-w-2xl mx-auto border border-emerald-100">
                <p className="text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase">
                  CUSTOM SYSTEM CONFIGURATION GENERATED
                </p>
                <h4 className="text-2xl font-display font-extrabold text-slate-800 mt-1">
                  Suggested: {sizeLabel}
                </h4>
                <p className="text-xs text-slate-500 mt-1">{quoteDescription}</p>

                {/* Savings numbers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Estimated Annual Savings</p>
                    <p className="text-3xl font-mono text-emerald-600 font-bold mt-1">
                      ${formData.billRange === 'mid' ? '2,500' : formData.billRange === 'high' ? '3,800' : formData.billRange === 'extreme' ? '5,400' : '1,600'}+
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">Based on local NSW grid electricity rates</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <p className="text-slate-400 text-xs uppercase tracking-wide">Return on Investment</p>
                    <p className="text-3xl font-mono text-emerald-600 font-bold mt-1">
                      {formData.billRange === 'mid' ? '3.9' : formData.billRange === 'high' ? '3.5' : formData.billRange === 'extreme' ? '3.2' : '4.2'} Years
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">High-tier equipment payback period</p>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="max-w-xl mx-auto">
                <h5 className="font-semibold text-slate-800">What happens next?</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-left">
                  <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                    <div className="font-bold text-slate-700 text-sm">1. Personal Call</div>
                    <div className="text-[11px] text-slate-400 mt-1">Nathan will check your solar layout via phone.</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                    <div className="font-bold text-slate-700 text-sm">2. Free Site Assessment</div>
                    <div className="text-[11px] text-slate-400 mt-1">We inspect in-person—no Google Maps guesses.</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-100">
                    <div className="font-bold text-slate-700 text-sm">3. Custom Plan</div>
                    <div className="text-[11px] text-slate-400 mt-1">Adjust lines & panels to absolute specs.</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setFormData({ goal: '', billRange: '', name: '', email: '', phone: '', suburb: '' });
                  }}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold cursor-pointer text-sm underline"
                >
                  Calculate for a different property
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
