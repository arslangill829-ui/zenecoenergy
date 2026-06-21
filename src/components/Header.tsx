/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Phone, ChevronRight, MapPin, Award } from 'lucide-react';
import { Region } from '../types';

interface HeaderProps {
  currentRegion: Region;
  onRegionChange: (region: Region) => void;
  onContactClick: () => void;
}

export default function Header({ currentRegion, onRegionChange, onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full flex flex-col">
      {/* Top Local SEO Hub / Announcement Ribbon */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 font-mono text-slate-300">
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>CEC Accredited Local Family Engineers</span>
        </div>
        
        {/* Localization Switcher Mock SEO */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-slate-400 font-sans mr-1">Demo SEO Landing Page:</span>
          <button
            type="button"
            onClick={() => onRegionChange('all')}
            className={`px-2.5 py-0.5 rounded font-medium cursor-pointer transition ${
              currentRegion === 'all' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-705'
            }`}
          >
            All Areas
          </button>
          <button
            type="button"
            onClick={() => onRegionChange('central-coast')}
            className={`px-2.5 py-0.5 rounded font-medium cursor-pointer transition ${
              currentRegion === 'central-coast' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-705'
            }`}
          >
            Solar Central Coast
          </button>
          <button
            type="button"
            onClick={() => onRegionChange('newcastle')}
            className={`px-2.5 py-0.5 rounded font-medium cursor-pointer transition ${
              currentRegion === 'newcastle' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Solar Newcastle
          </button>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-4 md:px-10 flex justify-between items-center shadow-sm">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onRegionChange('all')}>
          <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center">
            <Sun className="w-5 h-5 animate-spin-slow text-yellow-200 fill-yellow-200" />
          </div>
          <div>
            <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight block">
              zeneco<span className="text-emerald-600 font-light">energy</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase block leading-none">
              Central Coast & Newcastle
            </span>
          </div>
        </div>

        {/* Links & Fast Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Active SEO Suburb Marker */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {currentRegion === 'all' 
                ? 'Central Coast, NSW & Newcastle' 
                : currentRegion === 'central-coast' 
                ? 'Primary: Gosford, NSW & Coast suburbs' 
                : 'Primary: Merewether & Hunter Region'}
            </span>
          </div>

          {/* Persistent Click-to-Call Phone Number */}
          <a
            href="tel:0405338660"
            className="flex items-center gap-1.5 md:gap-2 text-slate-800 hover:text-emerald-700 transition font-display font-bold text-sm md:text-base border border-slate-200 hover:border-emerald-200 bg-white px-3 py-2 md:px-4 md:py-2 rounded-xl"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span className="hidden select-none sm:inline text-slate-400 text-xs font-medium font-mono">CALL NATHAN:</span>
            <span>0405 338 660</span>
          </a>

          {/* Sticky Header CTA Button */}
          <button
            type="button"
            onClick={onContactClick}
            className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-md text-white font-semibold text-xs md:text-sm px-4 py-2.5 md:px-5 md:py-2.5 rounded-xl flex items-center gap-1 transition-all cursor-pointer"
          >
            <span>Get Free Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
