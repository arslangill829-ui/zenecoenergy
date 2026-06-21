/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, ShieldCheck, BatteryCharging, Zap, ChevronRight, Check } from 'lucide-react';
import { Region } from '../types';

interface ServiceProps {
  currentRegion: Region;
  onCtaClick: () => void;
}

export default function Services({ currentRegion, onCtaClick }: ServiceProps) {
  const isCC = currentRegion === 'central-coast';
  const isNewc = currentRegion === 'newcastle';

  const secondaryDesc = isCC 
    ? "custom-engineered to resist salty sea-mist and withstand high coastal wind zones in Gosford and surrounding Central Coast suburbs" 
    : isNewc 
    ? "configured perfectly to match residential lines and Hunter Region utility grid tariffs"
    : "custom-engineered to withstand local climates, marine air, and deliver the highest possible savings yields";

  return (
    <section id="services-section" className="py-16 md:py-24 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-28">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 bg-emerald-100/50 px-3 py-1 rounded-full uppercase">
            OUR CORE RESIDENTIAL SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Performance Systems Built To Outlast Australian Climates
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            We specialize in designing premium microinverter solar panels, smart powerwalls, and integrated EV rapid charging stations.
          </p>
        </div>

        {/* Alternating Z-Pattern Reading Block 1: Solar Installations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Block left */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold select-none">
                <Sun className="w-3.5 h-3.5 fill-emerald-100" />
                <span>RESIDENTIAL SOLAR SYSTEMS</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
                Premium Glass-on-Glass Solar Panels
              </h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We install Tier-1 premium glass-on-glass double-sided solar arrays paired with high-efficiency split-phase inverters. This system is {secondaryDesc}.
            </p>

            <ul className="space-y-3">
              {[
                'Double-sided bi-facial power cells for up to 25% higher albedo returns.',
                'Enphase microinverters providing maximum panel resilience against shade.',
                'Hurricane-proof anodized structural rails that look incredible.'
              ].map((item, id) => (
                <li key={id} className="flex gap-2 text-xs font-medium text-slate-700">
                  <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer hover:shadow-md transition"
              >
                <span>Calculate Your Solar Savings</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Visual Block right */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-3xl border border-slate-100 p-2 bg-slate-50 shadow-lg overflow-hidden relative group">
              <img
                src="assets/images/zeneco_hero_solar_1782009839986.jpg"
                alt="Elite black Solar system panels on Australian residence"
                className="rounded-2xl w-full h-[350px] object-cover hover:scale-102 transition duration-500 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white font-display text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                Premium 10.8kW Solar Panels Array
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Z-Pattern Reading Block 2: Battery Storage Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Block left */}
          <div className="lg:col-span-6 order-1">
            <div className="rounded-3xl border border-slate-100 p-2 bg-slate-50 shadow-lg overflow-hidden relative group">
              <img
                src="assets/images/battery_ev_hub_1782009889323.jpg"
                alt="Sleek home solar battery and EV charger installation"
                className="rounded-2xl w-full h-[350px] object-cover hover:scale-102 transition duration-500 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white font-display text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                Tesla Powerwall & Charging Installation
              </div>
            </div>
          </div>

          {/* Text Block right */}
          <div className="lg:col-span-6 space-y-6 order-2">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>DURABLE POWERWALL BACKUP</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
                Intelligent Battery Storage Systems
              </h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Store your generated sunshine to run your home 100% on eco-energy during peak-tariff nights. Avoid Newcastle and Coast grid blackouts with near-instant automatic backup.
            </p>

            <ul className="space-y-3">
              {[
                'Official Certified Tesla Powerwall & BYD Battery Installers.',
                'Smart App telemetry to shift and offset high grid Peak Tariffs.',
                'Sub-second automatic backup switches your grid output during blackouts.'
              ].map((item, id) => (
                <li key={id} className="flex gap-2 text-xs font-medium text-slate-700">
                  <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer hover:shadow-md transition"
              >
                <span>Inquire About Storage Costs</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Z-Pattern Reading Block 3: EV Smart Chargers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Block left */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold select-none">
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" />
                <span>FREE DYNAMIC EV POWERUP</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-slate-950 tracking-tight leading-tight">
                Surplus Solar EV Charging Solutions
              </h3>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Charge your electric car entirely with free, renewable local sunlight. Our smart Zappi chargers automatically track surplus solar output and divert only free energy directly into your vehicle.
            </p>

            <ul className="space-y-3">
              {[
                'Smart integration directs 100% of excess solar output to the vehicle plug.',
                'High-performance three-phase capabilities for 22kW ultra-rapid charging.',
                'Fully compliant with Australian electrical safety standards (no mock setups).'
              ].map((item, id) => (
                <li key={id} className="flex gap-2 text-xs font-medium text-slate-700">
                  <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={onCtaClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-1.5 cursor-pointer hover:shadow-md transition"
              >
                <span>Calculate EV Savings</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Visual Block right */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-3xl border border-slate-100 p-2 bg-slate-50 shadow-lg overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800"
                alt="Electric vehicle charging via garage solar array station"
                className="rounded-2xl w-full h-[350px] object-cover hover:scale-102 transition duration-500 select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white font-display text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                Eco EV Energy Diverter System
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
