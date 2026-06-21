/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Trash2, Database, Mail, Phone, MapPin, Calendar, Goal, Zap, DollarSign } from 'lucide-react';
import { Lead } from '../types';

interface CrmProps {
  isOpen: boolean;
  onClose: () => void;
  leads: Lead[];
  onClearLeads: () => void;
  onDeleteLead: (id: string) => void;
}

export default function CrmDashboard({ isOpen, onClose, leads, onClearLeads, onDeleteLead }: CrmProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex justify-end">
      {/* Drawer */}
      <div className="w-full max-w-4xl bg-slate-900 text-slate-100 h-full shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="border-b border-slate-800 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/15 rounded-xl text-emerald-400">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl text-white">Local CRM Lead & Quote Portal</h4>
              <p className="text-xs text-slate-400">Monitor quiz submissions & conversational chatbot threads instantly</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-slate-800/80 p-2 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">Captured Leads</span>
              <p className="text-3xl font-mono text-emerald-400 font-bold mt-1">{leads.length}</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4">
              <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">Simulated Savings Pipeline</span>
              <p className="text-3xl font-mono text-emerald-400 font-bold mt-1">
                ${leads.reduce((acc, lead) => acc + lead.estimatedSavingsPerYear, 0).toLocaleString()}/yr
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-4 col-span-1">
              <span className="text-xs text-slate-400 font-mono tracking-widest uppercase">Database Storage</span>
              <p className="text-sm font-mono text-emerald-400 font-bold mt-2">localStorage Active</p>
            </div>
          </div>

          {leads.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl">
              <p className="text-slate-500 font-mono text-sm">No solar quotes or chatbot leads captured yet.</p>
              <p className="text-slate-400 text-xs mt-2 max-w-md mx-auto">
                Fill out the Multi-Step "Savings Calculator" on the home page or talk to Nathan in the chat box to populate the database in real-time!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center px-2">
                <h5 className="font-semibold text-white">Submissions List</h5>
                <button
                  type="button"
                  onClick={onClearLeads}
                  className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear All Leads
                </button>
              </div>

              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 space-y-3 transition duration-150"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center font-display font-medium font-bold text-sm">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="font-semibold text-white">{lead.name}</h6>
                        <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                          ID: {lead.id} │ {lead.timestamp}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        lead.source === 'quiz' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500/15 text-blue-400'
                      }`}>
                        Source: {lead.source}
                      </span>
                      <button
                        type="button"
                        onClick={() => onDeleteLead(lead.id)}
                        className="text-slate-400 hover:text-rose-400 p-1 rounded-lg transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 text-xs font-mono">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      {lead.phone}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {lead.suburb} (Region: {lead.region.toUpperCase()})
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Goal className="w-3.5 h-3.5 text-slate-500" />
                      Goal: {lead.goal}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-slate-500" />
                      Qt Bill Ref: {lead.quarterlyBill.toUpperCase()}
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400">
                      <DollarSign className="w-3.5 h-3.5" />
                      Est Savings: ${lead.estimatedSavingsPerYear}/yr
                    </div>
                  </div>

                  {lead.notes && (
                    <div className="bg-slate-900/40 p-2.5 rounded-lg text-xs font-mono text-slate-400 border border-slate-850">
                      📝 {lead.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 px-6 py-4 bg-slate-950 text-center text-xs text-slate-500 font-mono">
          Zeneco CRM Database Engine │ Total Records persistent: {leads.length}
        </div>
      </div>
    </div>
  );
}
