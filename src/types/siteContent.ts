/**
 * @file siteContent.ts
 * @description Types for site content (about, contact, branding, etc)
 */

export interface Value {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AboutContent {
  subtitle: string;
  titleLines: string[];
  storyParagraphs: string[];
  heroImage: string;
  overlayImage: string;
  values: Value[];
  stats: Stat[];
}
