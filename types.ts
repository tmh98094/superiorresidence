import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Amenity {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface MapPoint {
  id: number;
  top: string;
  left: string;
  label: string;
  type: 'leisure' | 'essential' | 'transport';
}