/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Lead, Region } from '../types';

interface BotProps {
  currentRegion: Region;
  onLeadCaptured: (lead: Lead) => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export default function ChatLeadBot({ currentRegion, onLeadCaptured }: BotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "👋 G'day! I'm Nathan, founder and lead installer at Zeneco Energy." },
    { sender: 'bot', text: 'Ready to say goodbye to high electricity bills? Let’s do a quick assessment. What suburb are you in?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [chatBotStep, setChatBotStep] = useState<'suburb' | 'goal' | 'bill' | 'contact' | 'completed'>('suburb');
  const [botLead, setBotLead] = useState({
    suburb: '',
    goal: '',
    bill: '',
    name: '',
    phone: '',
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputValue('');

    setTimeout(() => {
      // Step machine
      if (chatBotStep === 'suburb') {
        setBotLead((prev) => ({ ...prev, suburb: userText }));
        setChatBotStep('goal');
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `Got it, ${userText} is in our core service range! ☀️` },
          { sender: 'bot', text: 'What is your main goal? (Lower bills, Backup battery, EV charging or All)' }
        ]);
      } else if (chatBotStep === 'goal') {
        setBotLead((prev) => ({ ...prev, goal: userText }));
        setChatBotStep('bill');
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Smart goals. Australian families are saving big on grid offsets.' },
          { sender: 'bot', text: 'Roughly how much is your average quarterly electricity bill?' }
        ]);
      } else if (chatBotStep === 'bill') {
        setBotLead((prev) => ({ ...prev, bill: userText }));
        setChatBotStep('contact');
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `We can easily configure a layout to eliminate typical bills in that range.` },
          { sender: 'bot', text: 'Last step: What is your name and mobile phone number so I can text you a solar mockup layout for your roof?' }
        ]);
      } else if (chatBotStep === 'contact') {
        // Parse contact
        const nameAndPhoneObj = userText;
        setChatBotStep('completed');
        
        const generatedLead: Lead = {
          id: 'lead-bot-' + Date.now(),
          name: nameAndPhoneObj.split(' ')[0] || 'Chatbot Guest',
          email: 'sent-via-chatbot@zeneco.com.au',
          phone: nameAndPhoneObj,
          suburb: botLead.suburb || 'Local Site',
          region: currentRegion,
          goal: botLead.goal || 'General Solar Savings',
          quarterlyBill: botLead.bill || 'Unknown',
          estimatedSavingsPerYear: 2800,
          estimatedPaybackYears: 3.8,
          timestamp: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString(),
          source: 'chatbot',
          status: 'new',
          notes: `Conversational thread captured: Goal: "${botLead.goal}", Bill: "${botLead.bill}"`
        };

        onLeadCaptured(generatedLead);

        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: `Brilliant! Thank you so much.` },
          { sender: 'bot', text: "I'll personally review your roof geometry using our software design tools and get in touch shortly. Let's make this your last high electricity bill! 🇦🇺" }
        ]);
      }
    }, 1000);
  };

  return (
    <>
      {/* Subtle Floating Widget for Mobile & Desktop - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="bg-white w-[350px] md:w-[380px] h-[500px] rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col mb-4"
            >
              {/* Bot Header */}
              <div className="bg-slate-900 px-5 py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center font-display font-semibold text-white text-base">
                      N
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-900 rounded-full" />
                  </div>
                  <div>
                    <h5 className="font-display font-semibold text-white text-sm">Nathan │ Zeneco Founder</h5>
                    <p className="text-[10px] text-emerald-400 font-mono">● Online & Local Installer</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition p-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Message Scroller */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50">
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.sender === 'user'
                          ? 'bg-emerald-600 text-white rounded-tr-none font-medium'
                          : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Bot Input Form */}
              {chatBotStep !== 'completed' ? (
                <form
                  onSubmit={handleSendMessage}
                  className="p-3 bg-white border-t border-slate-100 flex gap-2"
                >
                  <input
                    type="text"
                    required
                    placeholder={
                      chatBotStep === 'suburb'
                        ? 'Type your suburb (e.g. Wamberal)'
                        : chatBotStep === 'goal'
                        ? 'Type your goal...'
                        : chatBotStep === 'bill'
                        ? 'Type bill estimation...'
                        : 'Your name & mobile phone...'
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-xl px-4 py-2 text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl cursor-pointer transition"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="p-4 bg-emerald-50 text-center border-t border-emerald-100 flex items-center justify-center gap-2 text-emerald-700 font-medium text-xs">
                  <CheckCircle className="w-4 h-4" />
                  Mock layout analysis submitted to dashboard!
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating CTA Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          id="floating-chatbot-trigger"
          className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl rounded-full px-5 py-4 font-display font-bold text-sm tracking-wide flex items-center gap-2 cursor-pointer transition duration-300 hover:scale-105"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Ask Nathan (Local Bot)</span>
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping inline-block" />
        </button>
      </div>
    </>
  );
}
