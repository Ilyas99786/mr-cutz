/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  rating: number;
}

export interface WorkingHour {
  id: string;
  label: string;
  timeRange: string;
  isClosed?: boolean;
}
