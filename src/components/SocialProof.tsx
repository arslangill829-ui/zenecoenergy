/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star } from 'lucide-react';
import { Region } from '../types';

interface ProofProps {
  currentRegion: Region;
}

export default function SocialProof({ currentRegion }: ProofProps) {
  return (
    <section className="bg-slate-50 border-y border-slate-100 py-3.5 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Stellar ratings badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {/* Google Badge info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-display font-black text-slate-800 text-sm shadow-sm select-none">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[10px] md:text-xs font-mono text-slate-500 mt-0.5">
                <strong>5.0 Stars</strong> on Google Reviews (48+ local reviews)
              </p>
            </div>
          </div>

          {/* ProductReview Badge info */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-display font-bold text-white text-xs shadow-sm select-none">
              PR
            </div>
            <div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[10px] md:text-xs font-mono text-slate-500 mt-0.5">
                <strong>4.9 Stars</strong> on ProductReview AU
              </p>
            </div>
          </div>
        </div>

        {/* Separator on desktop */}
        <div className="hidden lg:block w-px h-6 bg-slate-200" />

        {/* Dynamic / Highlighting Testimonial Snippet */}
        <div className="flex-1 max-w-3xl text-center lg:text-left">
          <p className="text-xs md:text-sm text-slate-700 italic leading-relaxed">
            📢 <strong className="text-slate-900 font-semibold font-display">Brad S. (Wamberal):</strong> 
            "My custom 10.8kW solar & battery system was nothing short of exceptional. Nathan mapped roof shadows in-person. Saving $300+ every month already."
          </p>
        </div>
      </div>
    </section>
  );
}
