/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, Check, HelpCircle, PhoneCall, MapPin, Sparkles } from 'lucide-react';
import { Region } from '../types';

interface AboutProps {
  currentRegion: Region;
  onCtaClick: () => void;
}

export default function AboutLocal({ currentRegion, onCtaClick }: AboutProps) {
  const isCC = currentRegion === 'central-coast';
  const isNewc = currentRegion === 'newcastle';

  const titlePrefix = isCC 
    ? 'Central Coast Homeowners' 
    : isNewc 
    ? 'Newcastle Homeowners' 
    : 'Central Coast & Newcastle Homeowners';

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 bg-slate-50/50">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 bg-emerald-100/50 px-3 py-1 rounded-full uppercase">
            THE LOCAL ANTI-COWBOY DIFFERENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            Why {titlePrefix} Choose Us Over the Big Corporate Chains
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            No distant call centers, no high-pressure commissions, and no technical waffle. We are local accredited engineers who live and work right here.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Cowboy Box */}
          <div className="bg-white border border-rose-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 border-b border-rose-50 pb-4 mb-6">
              <div className="p-3 bg-rose-50 rounded-2xl text-rose-500">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-lg">"Big Corporate" Solar Cowboys</h4>
                <p className="text-xs text-rose-500 font-mono tracking-wide uppercase">Distant & Phone Sales Driven</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <span className="text-rose-500 bg-rose-50 font-black px-1.5 rounded text-xs mt-0.5 select-none">✕</span>
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Google Maps ONLY Assessments</h5>
                  <p className="text-xs text-slate-500 mt-0.5">They quote based purely on generic remote satellite feeds. They don’t see rusted framing, roof ventilation issues, shading from growing trees, or old fuse boxes that will trigger huge extra fees on installation day.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-rose-500 bg-rose-50 font-black px-1.5 rounded text-xs mt-0.5 select-none">✕</span>
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Persistent Pushy Call Centers</h5>
                  <p className="text-xs text-slate-500 mt-0.5">High-pressure sales agents on commission trying to sell you preset sub-quality systems. Good luck getting them on the phone if any hardware breaks 2 years down the track.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-rose-500 bg-rose-50 font-black px-1.5 rounded text-xs mt-0.5 select-none">✕</span>
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Sub-Contracted Installations</h5>
                  <p className="text-xs text-slate-500 mt-0.5">They auction your installation job to the lowest bid installers. They cut corners on marine materials, sealants, cables, and earthing to save single dollars.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Zeneco Box */}
          <div className="bg-white border border-emerald-500 ring-4 ring-emerald-50 rounded-3xl p-6 md:p-8 shadow-md">
            <div className="flex items-center gap-3 border-b border-emerald-100 pb-4 mb-6">
              <div className="p-3 bg-emerald-500 text-white rounded-2xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-black text-slate-900 text-lg">The Zeneco Energy Standard</h4>
                <p className="text-xs text-emerald-600 font-mono tracking-wide uppercase font-bold">100% Bespoke & Physical Site Assessments</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-emerald-600 bg-emerald-50 p-0.5 rounded-full shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Physical On-Site Custom Survey</h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    <strong>Nathan and our master technician actually visit your property first.</strong> We climb onto the roof, inspect structures, evaluate actual shadow lines, inspect panel ventilation, and check matchboard setups.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-emerald-600 bg-emerald-50 p-0.5 rounded-full shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Direct Contact with Certified Engineers</h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    No middlemen or salespeople. You discuss layouts, inverters, and high-performance battery setups directly with our licensed CEC installers.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-emerald-600 bg-emerald-50 p-0.5 rounded-full shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-slate-800 text-sm">Lifetime Local Product Warranties</h5>
                  <p className="text-xs text-slate-500 mt-0.5">
                    We stand by our work of premium glass-on-glass solar cells, anodized structural steel racks, and microinverter cabling. If a breaker flips, we are out within 24 hours.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Focus on-site physical inspection block with images */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-xl">
          <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-auto overflow-hidden">
            <img
              src="/src/assets/images/nathan_onsite_1782009867013.jpg"
              alt="Nathan conducting local solar site inspection in Newcastle NSW"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Dark gradient overlap */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/10 via-slate-900/0 to-slate-900/40" />
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-705 text-xs text-emerald-400 font-mono">
              ★ Owner-Installer Onsite Assessments
            </div>
          </div>

          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-emerald-400 font-mono font-bold tracking-widest uppercase">PHYSICAL INSPECTION ADVANTAGE</span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight">
                "We Measure Once, Build Perfectly, and Avoid Hidden Surprises"
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                Most Australian solar cowboys guess using blurred photos from remote satellites. Nathan and our local site engineering team visit your home in person, checking roof integrity, cabling channels, shading, and fuse box status. This builds trust, achieves higher energy returns, and protects your home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 font-bold font-mono">
                  01
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Full Roof Load Survey</p>
                  <p className="text-xs text-slate-400 mt-1">Checking wood rafters & roof framing for lifetime durability.</p>
                </div>
              </div>

              <div className="bg-slate-800/40 border border-slate-800 p-4 rounded-xl flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 font-bold font-mono">
                  02
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Shading Risk Assessment</p>
                  <p className="text-xs text-slate-400 mt-1">Exact physical matching of tree shading & shadows across seasons.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg text-white font-bold px-6 py-3 rounded-xl transition cursor-pointer text-sm"
              >
                Schedule an On-site Check with Nathan
              </button>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                📞 CALL NATHAN DIRECT: 0405 338 660
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
