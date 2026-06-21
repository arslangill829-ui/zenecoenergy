/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Region = 'all' | 'central-coast' | 'newcastle';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  suburb: string;
  region: Region;
  goal: string;
  quarterlyBill: string;
  estimatedSavingsPerYear: number;
  estimatedPaybackYears: number;
  timestamp: string;
  source: 'quiz' | 'chatbot';
  status: 'new' | 'contacted' | 'quoted' | 'archived';
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  region: 'central-coast' | 'newcastle';
}

export interface CaseStudy {
  id: string;
  title: string;
  suburb: string;
  region: 'central-coast' | 'newcastle';
  systemSize: string;
  beforeBill: number;
  afterBill: number;
  annualSavings: number;
  paybackYears: number;
  details: string;
  imageUrl?: string;
}
