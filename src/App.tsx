/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import AboutLocal from './components/AboutLocal';
import CaseStudies from './components/CaseStudies';
import MultiStepQuiz from './components/MultiStepQuiz';
import ChatLeadBot from './components/ChatLeadBot';
import CrmDashboard from './components/CrmDashboard';
import { Lead, Region } from './types';
import { REGION_DETAILS } from './data';
import { Sun, Mail, Phone, MapPin, Database, Award, ArrowRight, Star } from 'lucide-react';

export default function App() {
  const [currentRegion, setCurrentRegion] = useState<Region>('all');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isCrmOpen, setIsCrmOpen] = useState(false);

  // Sync with window pathname for SEO route testing
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path.includes('solar-central-coast')) {
        setCurrentRegion('central-coast');
      } else if (path.includes('solar-newcastle')) {
        setCurrentRegion('newcastle');
      } else {
        setCurrentRegion('all');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Set the dynamic browser title based on region for simulated SEO
  useEffect(() => {
    const regionText = REGION_DETAILS[currentRegion].metaHeading;
    document.title = `${regionText} │ Zeneco Energy - Custom Local Solar & Batteries`;
  }, [currentRegion]);

  // Load leads from localStorage on startup
  useEffect(() => {
    try {
      const stored = localStorage.getItem('zeneco_captured_leads');
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error reading local storage', e);
    }
  }, []);

  // Save leads to localStorage whenever it changes
  const saveLeadsToStorage = (updated: Lead[]) => {
    setLeads(updated);
    try {
      localStorage.setItem('zeneco_captured_leads', JSON.stringify(updated));
    } catch (e) {
      console.error('Error writing to local storage', e);
    }
  };

  const handleLeadCaptured = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    saveLeadsToStorage(updated);
    
    // Auto trigger notification or visual alert nicely
    const element = document.getElementById('crm-badge-alert');
    if (element) {
      element.classList.remove('scale-0');
      element.classList.add('scale-100');
    }
  };

  const handleClearLeads = () => {
    if (window.confirm('Are you sure you want to clear all leads captured during this browser session?')) {
      saveLeadsToStorage([]);
    }
  };

  const handleDeleteLead = (id: string) => {
    const filtered = leads.filter(lead => lead.id !== id);
    saveLeadsToStorage(filtered);
  };

  const scrollToCalculator = () => {
    const target = document.getElementById('savings-calculator');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeRegionConfig = REGION_DETAILS[currentRegion];

  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Sticky layout header */}
      <Header 
        currentRegion={currentRegion} 
        onRegionChange={(region) => {
          // Push simulated SEO URLs to address bar manually
          const fakePath = region === 'all' ? '/' : region === 'central-coast' ? '/solar-central-coast' : '/solar-newcastle';
          window.history.pushState(null, '', fakePath);
          setCurrentRegion(region);
        }} 
        onContactClick={scrollToCalculator} 
      />

      {/* Hero Above the Fold */}
      <Hero currentRegion={currentRegion} onCtaClick={scrollToCalculator} />

      {/* Google and Product Review stars ribbon - Social Proof */}
      <SocialProof currentRegion={currentRegion} />

      {/* Multi-Step Interactive Quote Calculator (High Conversion) */}
      <div className="py-16 md:py-24 px-4 md:px-10 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 bg-emerald-100/50 px-3 py-1 rounded-full uppercase">
              PHASE 2 COMPACT FLOW
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
              Calculate Your Custom Local Offset
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Say goodbye to utility friction. Discover your custom system footprint, annual dollar savings yield, and investment paybacks in under 60 seconds.
            </p>
          </div>

          <MultiStepQuiz 
            currentRegion={currentRegion} 
            onLeadCaptured={handleLeadCaptured} 
          />
        </div>
      </div>

      {/* Local Anti-Cowboy & Nathan Site Inspection Segment */}
      <AboutLocal currentRegion={currentRegion} onCtaClick={scrollToCalculator} />

      {/* Alternating Z-pattern Blocks for Services */}
      <Services currentRegion={currentRegion} onCtaClick={scrollToCalculator} />

      {/* Before vs After interactive visual Bill Slasher */}
      <CaseStudies currentRegion={currentRegion} onCtaClick={scrollToCalculator} />

      {/* Localized Location Coordinates & Custom Seal Maps */}
      <section className="py-16 bg-white border-t border-slate-100 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 bg-emerald-100/50 px-3 py-1 rounded-full uppercase">
              100% TRANSPARENT LOCAL SERVICES
            </span>
            <h3 className="text-3xl font-display font-extrabold tracking-tight text-slate-900">
              Where to Find the Zeneco Team Office
            </h3>
            <p className="text-slate-500 text-sm md:text-base">
              Unlike the national corporate brokers who run online-only shells and hire local third-party contractors, we have actual depots and tools ready on site. Drop in anytime to inspect actual solar cells.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Design Depot & Dispatch</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeRegionConfig.localAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Direct Phone Link</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    0405 338 660 (Direct to Nathan)
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Operations Support Email</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    hello@zenecoenergy.com.au
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Sydney / NSW Local map schema panel */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 shadow-md space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl h-[280px] p-6 flex flex-col justify-between relative overflow-hidden">
              {/* Abstract mesh representing service area maps */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/25 rounded-full blur-2xl font-mono text-[10px] text-justify tracking-tighter" />

              <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 py-1 px-2.5 rounded border border-emerald-500/15 uppercase">
                  ACTIVE NSW SERVICE BOUNDARY
                </span>
                <span className="text-xs text-slate-400 font-mono">MAP INTERACTIVE DEPLOYMENT</span>
              </div>

              <div className="text-center space-y-2 z-10 my-auto">
                <p className="font-display font-extrabold text-xl md:text-2xl text-white">
                  {currentRegion === 'all' 
                    ? 'Central Coast & Greater Newcastle' 
                    : currentRegion === 'central-coast' 
                    ? 'Gosford & All Central Coast Suburbs' 
                    : 'Newcastle, Merewether & Lake Macquarie'}
                </p>
                <p className="text-xs text-emerald-400 font-mono">
                  100% Coverage Guaranteed with Owner onsite warranty response
                </p>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 z-10 border-t border-slate-800 pt-3">
                <span>Lat: -33.102 │ Long: 151.481</span>
                <span>Active Field Crews: 3</span>
              </div>
            </div>

            <div className="flex gap-3 items-center text-xs font-mono text-slate-500 bg-white p-3 rounded-xl border border-slate-100">
              <Sun className="w-4 h-4 text-emerald-600 animate-spin-slow shrink-0" />
              <span>NSW solar installations regulated by CEC Accredited guidelines.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Page footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-16 px-4 md:px-10 border-t border-slate-800 text-center sm:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="bg-emerald-600 text-white p-2 rounded-xl">
                <Sun className="w-4.5 h-4.5 text-yellow-200 fill-yellow-200" />
              </div>
              <span className="font-display font-extrabold text-lg text-white">zeneco<span className="text-emerald-400 font-light">energy</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart solar, long-life lithium battery storage packs, and intelligent EV charging hubs customized for Central Coast and Newcastle homeowners. Real local expertise.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="font-display font-bold text-sm text-white">TARGETED LANDINGS (SEO DEMO)</h5>
            <div className="flex flex-col gap-2.5 text-xs text-slate-450 items-center sm:items-start">
              <button
                type="button"
                onClick={() => {
                  window.history.pushState(null, '', '/solar-central-coast');
                  setCurrentRegion('central-coast');
                }}
                className={`hover:text-emerald-400 transition text-left cursor-pointer ${
                  currentRegion === 'central-coast' ? 'text-emerald-400 font-bold' : 'text-slate-400'
                }`}
              >
                📍 Solar Installers Central Coast NSW
              </button>
              <button
                type="button"
                onClick={() => {
                  window.history.pushState(null, '', '/solar-newcastle');
                  setCurrentRegion('newcastle');
                }}
                className={`hover:text-emerald-400 transition text-left cursor-pointer ${
                  currentRegion === 'newcastle' ? 'text-emerald-400 font-bold' : 'text-slate-400'
                }`}
              >
                📍 Premium Solar Systems Newcastle NSW
              </button>
              <button
                type="button"
                onClick={() => {
                  window.history.pushState(null, '', '/');
                  setCurrentRegion('all');
                }}
                className={`hover:text-emerald-400 transition text-left cursor-pointer ${
                  currentRegion === 'all' ? 'text-emerald-400 font-bold' : 'text-slate-400'
                }`}
              >
                📍 All NSW Local Hunter & Coast Core
              </button>
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h5 className="font-display font-bold text-sm text-white">SYSTEM INTEGRATIONS & CRM</h5>
            
            <button
              onClick={() => setIsCrmOpen(true)}
              className="bg-slate-800 hover:bg-slate-750 text-emerald-400 hover:text-emerald-300 rounded-xl px-4 py-3 font-mono text-xs border border-slate-705 flex items-center justify-center gap-2 cursor-pointer transition select-none"
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>📂 Open Local CRM Lead Portal</span>
              <span className="bg-emerald-500 text-slate-900 font-bold rounded-full px-1.5 py-0.5 text-[9px]">
                {leads.length}
              </span>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>© {new Date().getFullYear()} Zeneco Energy Pty Ltd. All rights reserved. Registered under CEC and Electrical Safety standard NSW.</p>
          <div className="flex gap-4">
            <span className="hover:text-emerald-400 cursor-pointer">Security Policy</span>
            <span>│</span>
            <span className="hover:text-emerald-400 cursor-pointer">Licence: #391084C</span>
          </div>
        </div>
      </footer>

      {/* Floating conversational lead capture solar bot */}
      <ChatLeadBot currentRegion={currentRegion} onLeadCaptured={handleLeadCaptured} />

      {/* Offline-First local CRM Leads Database drawer */}
      <CrmDashboard 
        isOpen={isCrmOpen} 
        onClose={() => setIsCrmOpen(false)} 
        leads={leads}
        onClearLeads={handleClearLeads}
        onDeleteLead={handleDeleteLead}
      />
    </div>
  );
}
