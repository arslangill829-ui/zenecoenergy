/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Review, CaseStudy, Region } from './types';

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Brad S.',
    location: 'Wamberal',
    rating: 5,
    text: 'Installed a 10.8kW system with battery. The process was nothing short of exceptional. Nathan took the time to do an actual on-site inspection, mapped my roof shadows, and recommended a perfect layout. No technical jargon or pressure. Saving over $300 a month already.',
    date: '2.5 weeks ago',
    region: 'central-coast'
  },
  {
    id: 'rev-2',
    author: 'Belinda K.',
    location: 'Kincumber',
    rating: 5,
    text: 'Loved that Nathan came out to our house in person. Unlike the big solar chains who just looked at a Google Maps picture and sent a high pressure salesperson, Zeneco gave us an honest physical assessment. Our quarterly bill dropped from $1,150 to $54!',
    date: '1 month ago',
    region: 'central-coast'
  },
  {
    id: 'rev-3',
    author: 'George M.',
    location: 'Merewether',
    rating: 5,
    text: 'Extremely professional Newcastle team. No call centers, no tech waffle. Spoke directly to the CEC accredited installers. The Before/After bill savings were exact. Incredible local outfit.',
    date: '3 weeks ago',
    region: 'newcastle'
  },
  {
    id: 'rev-4',
    author: 'Marcus & Sarah T.',
    location: 'Warners Bay',
    rating: 5,
    text: 'A seamless installation from Newcastle locals. Outstanding communication. Our EV charger is runs 100% on excess solar generation now. Cannot recommend Nathan and the team enough.',
    date: '2 months ago',
    region: 'newcastle'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'The Miller Family Residence',
    suburb: 'Wamberal',
    region: 'central-coast',
    systemSize: '10.8kW Premium Solar + 13.5kWh Battery',
    beforeBill: 1200,
    afterBill: 45,
    annualSavings: 4620,
    paybackYears: 3.5,
    details: 'Equipped with 24 high-efficiency tier-1 panels and smart storage. The battery charges fully during the day and runs the air conditioning throughout hot summer evenings, avoiding peak grid tariffs.',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'case-2',
    title: 'Modern Retrofit & EV Charging',
    suburb: 'Merewether',
    region: 'newcastle',
    systemSize: '8.2kW Smart Solar + Zappi EV Charger',
    beforeBill: 880,
    afterBill: 62,
    annualSavings: 3272,
    paybackYears: 4.1,
    details: 'Designed with dynamic solar tracking to optimize daytime charging for their new electric vehicle. The system diverts only surplus solar power directly into the Tesla, making driving virtually free.',
    imageUrl: 'https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=800'
  }
];

export interface RegionConfig {
  title: string;
  subtitle: string;
  heroBadge: string;
  phone: string;
  localAddress: string;
  metaHeading: string;
  description: string;
  leadSnippet: string;
}

export const REGION_DETAILS: Record<Region, RegionConfig> = {
  all: {
    title: 'Say Goodbye to High Energy Bills. Go Solar Today.',
    subtitle: 'Smart solar, battery, and EV installations across the Central Coast & Newcastle—built by local experts, backed by real savings.',
    heroBadge: 'Local Central Coast & Newcastle Experts',
    phone: '0405 338 660',
    localAddress: 'Serving Central Coast, Newcastle, and Hunter Regions',
    metaHeading: 'Solar Central Coast & Newcastle',
    description: 'We install premium high-tier solar panels, battery backups, and EV chargers. Homegrown, quality-driven, honest solar.',
    leadSnippet: 'CEC Accredited Solar Installers'
  },
  'central-coast': {
    title: 'The Trusted Solar Planners for the Central Coast.',
    subtitle: 'Premium solar, batteries, and EV chargers customized for coastal properties from Gosford to Wyong. Real Central Coast installers building real coastal savings.',
    heroBadge: 'Central Coast Owned & Operated',
    phone: '0405 338 660',
    localAddress: 'West Gosford, NSW 2250 (Serving all Central Coast Suburbs)',
    metaHeading: 'Solar Central Coast',
    description: 'Specialized marine-grade solar racking and salt-mist resistant high-efficiency panels matching the Central Coast climate.',
    leadSnippet: 'Gosford & Wyong Solar Specialists'
  },
  newcastle: {
    title: 'Honest, Locally Owned Solar for Newcastle & Hunter.',
    subtitle: 'Engineered for Newcastle homes, from Merewether to Lake Macquarie. Zero corporate call centers, zero waffle—just real local energy expertise.',
    heroBadge: ' Newcastle & Hunter Local Team',
    phone: '0405 338 660',
    localAddress: 'Newcastle West, NSW 2302 (Serving Greater Newcastle & Lake Mac)',
    metaHeading: 'Solar Newcastle',
    description: 'Local Newcastle technicians designing tailored power solutions suited to Hunter Region electricity lines and tariffs.',
    leadSnippet: 'Newcastle CEC Accredited Team'
  }
};
