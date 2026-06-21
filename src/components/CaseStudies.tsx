/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeftRight, CreditCard, Flame, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data';
import { Region } from '../types';

interface CaseProps {
  currentRegion: Region;
  onCtaClick: () => void;
}

export default function CaseStudies({ currentRegion, onCtaClick }: CaseProps) {
  const filteredStudies = currentRegion === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(study => study.region === currentRegion);

  const [activeTab, setActiveTab] = useState<number>(0);

  // If active study is larger than filtered length, reset it
  const resolvedIndex = activeTab >= filteredStudies.length ? 0 : activeTab;
  const activeStudy = filteredStudies[resolvedIndex];

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-slate-900 text-white rounded-[40px] mx-4 md:mx-10 my-16 shadow-2xl relative overflow-hidden">
      {/* Background radial spotlight grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#047857,transparent_55%)] opacity-35" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10 items-center">
        {/* Left Side: Overview text & Selectors */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase border border-emerald-500/15">
              REAL CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
              Real Australian Bill Reductions
            </h2>
            <p className="text-slate-350 text-sm md:text-base">
              See how Central Coast and Newcastle families are completely slashing their grid reliance and paying their installations off in record times.
            </p>
          </div>

          {/* Swithcher Tabs */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Select Installation Case:</span>
            <div className="flex flex-col gap-2.5">
              {filteredStudies.map((study, index) => (
                <button
                  key={study.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-4 rounded-xl border flex justify-between items-center transition cursor-pointer ${
                    resolvedIndex === index
                      ? 'bg-emerald-600/15 border-emerald-500 text-white shadow-lg'
                      : 'bg-slate-800/50 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <p className="font-semibold text-sm">{study.title}</p>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">{study.systemSize} │ {study.suburb}</p>
                  </div>
                  <ArrowRight className={`w-4.5 h-4.5 ${resolvedIndex === index ? 'text-emerald-400' : 'text-slate-650'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Visual Before & After Interactive Panel */}
        {activeStudy ? (
          <div className="lg:col-span-7 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-rose-100/10 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">ACTIVE DEPLOYMENT</span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold mt-0.5">{activeStudy.title}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{activeStudy.suburb}, NSW │ CEC Accredited Install</p>
              </div>
              <div className="px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/15 rounded-xl text-emerald-400 text-xs font-mono font-bold">
                {activeStudy.systemSize}
              </div>
            </div>

            {/* Before vs After bill cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Before Card */}
              <div className="bg-red-500/5 border border-red-500/15 rounded-2xl p-5 relative overflow-hidden text-center sm:text-left">
                <div className="absolute top-2 right-2 p-1.5 bg-red-500/10 rounded-lg text-red-400 font-bold select-none text-[10px] font-mono border border-red-500/15">
                  BEFORE ZENECO
                </div>
                <p className="text-slate-400 text-[10px] uppercase font-mono tracking-wider">Average Quarterly Bill</p>
                <div className="text-3xl font-mono text-red-400 font-extrabold mt-2 select-none">${activeStudy.beforeBill}</div>
                <p className="text-[10px] text-slate-500 mt-1.5">Slaved to volatile local grid pricing</p>
              </div>

              {/* After Card */}
              <div className="bg-emerald-500/5 border border-emerald-500/25 rounded-2xl p-5 relative overflow-hidden text-center sm:text-left">
                <div className="absolute top-2 right-2 p-1.5 bg-emerald-500/15 rounded-lg text-emerald-400 font-bold select-none text-[10px] font-mono border border-emerald-500/15 animate-pulse-subtle">
                  AFTER SOLAR
                </div>
                <p className="text-slate-400 text-[10px] uppercase font-mono tracking-wider">New Quarterly Bill</p>
                <div className="text-4xl font-mono text-emerald-400 font-black mt-2 select-none">${activeStudy.afterBill}</div>
                <p className="text-[10px] text-emerald-500 mt-1.5 font-semibold">Slashed by over 93%!</p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 text-center bg-slate-900/40 p-3.5 rounded-xl border border-slate-800">
              <div className="border-r border-slate-800">
                <span className="text-[9px] text-slate-400 font-mono block uppercase">Annual Savings</span>
                <span className="text-base font-mono font-bold text-emerald-400 mt-0.5 block">${activeStudy.annualSavings.toLocaleString()}</span>
              </div>
              <div className="border-r border-slate-800">
                <span className="text-[9px] text-slate-400 font-mono block uppercase">System Payback</span>
                <span className="text-base font-mono font-bold text-emerald-400 mt-0.5 block">{activeStudy.paybackYears} Years</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 font-mono block uppercase">Slashing Ratio</span>
                <span className="text-base font-mono font-bold text-emerald-400 mt-0.5 block">
                  {Math.round(((activeStudy.beforeBill - activeStudy.afterBill) / activeStudy.beforeBill) * 100)}% Off
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic text-center sm:text-left">
              💬 "{activeStudy.details}"
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 border-t border-slate-800">
              <span className="text-[10px] text-slate-400 font-mono">★ System life estimated at 25+ years</span>
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-emerald-600 hover:bg-emerald-700 hover:scale-102 transition text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Your Custom Roof Study</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-7 py-20 text-center text-slate-500 font-mono">
            No case studies available for this region currently. Switch regions in header!
          </div>
        )}
      </div>
    </section>
  );
}
