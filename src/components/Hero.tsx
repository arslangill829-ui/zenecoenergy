/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, BadgeCheck, Shield, ChevronRight } from 'lucide-react';
import { REGION_DETAILS } from '../data';
import { Region } from '../types';

interface HeroProps {
  currentRegion: Region;
  onCtaClick: () => void;
}

export default function Hero({ currentRegion, onCtaClick }: HeroProps) {
  const details = REGION_DETAILS[currentRegion];

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 px-4 md:px-10">
      {/* Background decoration lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-35 pointer-events-none select-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
        <div className="absolute top-[40%] right-[5%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center relative z-10">
        {/* Left Grid: Exploding Copy & Conversion Elements */}
        <div className="col-span-1 lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          {/* Accent Ribbon Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100/60 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold font-display tracking-wide animate-pulse-subtle">
            <Sparkles className="w-3.5 h-3.5 fill-emerald-300" />
            <span>{details.heroBadge}</span>
          </div>

          {/* Epic Punchy Headline */}
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            {details.title}
          </h1>

          {/* Informational Subtitle */}
          <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {details.subtitle}
          </p>

          {/* Primary & Secondary Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl text-white font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              <span>Calculate Your Savings</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <a
              href="tel:0405338660"
              className="w-full sm:w-auto text-slate-800 hover:text-emerald-700 transition border border-slate-200 hover:border-emerald-200 font-display font-bold text-sm px-6 py-4 rounded-2xl flex items-center justify-center gap-2 select-none"
            >
              <span>Instant Local Call</span>
              <span className="font-mono text-xs text-slate-400 font-medium">0405 338 660</span>
            </a>
          </div>

          {/* Trust Badge Cluster directly below CTA */}
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium whitespace-nowrap">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span>Local Central Coast Team</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium whitespace-nowrap">
              <Shield className="w-4.5 h-4.5 text-emerald-600" />
              <span>CEC Accredited Installers</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium whitespace-nowrap">
              <BadgeCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span>5-Star Rated Service</span>
            </div>
          </div>
        </div>

        {/* Right Grid: Elite Solar House Graphic Mock Image */}
        <div className="col-span-1 lg:col-span-5 relative">
          <div className="rounded-[36px] border border-slate-100 p-2.5 bg-slate-50 shadow-2xl relative overflow-hidden group">
            {/* Absolute badge overlay */}
            <div className="absolute top-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-705 text-[11px] font-mono font-bold text-emerald-400">
              ☀️ System Sized by Nathan
            </div>

            <img
              src="assets/images/zeneco_hero_solar_1782009839986.jpg"
              alt="Zeneco Energy custom solar installation on sleek beach house Central Coast"
              className="rounded-[28px] w-full h-[320px] md:h-[420px] object-cover hover:scale-102 transition duration-500 select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
