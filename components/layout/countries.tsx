import React, { useState } from 'react';

interface Country {
  label: string;
  value: string;
  flag?: string; // Optional, if displaying flags
  continent?: string; // Optional, for grouping
}
export const countries: Country[] = [
  { label: 'Denmark', value: 'DK', flag: '🇩🇰', continent: 'Europe' },
  { label: 'Belgium', value: 'BE', flag: '🇧🇪', continent: 'Europe' },
  { label: 'Netherlands', value: 'NL', flag: '🇳🇱', continent: 'Europe' },
  { label: 'Germany', value: 'DE', flag: '🇩🇪', continent: 'Europe' },
  // ... other countries with their respective continents
];

