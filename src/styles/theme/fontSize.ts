import { ThemeConfig } from 'tailwindcss/types/config'

export const fontSize: ThemeConfig['fontSize'] = {
  h1: [
    '1.5rem',
    {
      lineHeight: '2.1rem', // 1.5rem * 140%
      fontWeight: '600',
    },
  ],
  h2: [
    '1.25rem',
    {
      lineHeight: '1.75rem', // 1.25rem * 140%
      fontWeight: '600',
    },
  ],
  h3: [
    '1rem',
    {
      lineHeight: '1.4rem', // 1rem * 140%
      fontWeight: '600',
    },
  ],
  sub1: [
    '1.125rem',
    {
      lineHeight: '1.575rem', // 1.125rem * 140%
      fontWeight: '500',
    },
  ],
  sub2: [
    '1rem',
    {
      lineHeight: '1.4rem', // 1rem * 140%
      fontWeight: '500',
    },
  ],
  sub3: [
    '0.875rem',
    {
      lineHeight: '1.225rem', // 0.875rem * 140%
      fontWeight: '500',
    },
  ],
  body1: [
    '1.125rem',
    {
      lineHeight: '1.575rem', // 1.125rem * 140%
      fontWeight: '400',
    },
  ],
  body2: [
    '1rem',
    {
      lineHeight: '1.4rem', // 1rem * 140%
      fontWeight: '400',
    },
  ],
  body3: [
    '0.875rem',
    {
      lineHeight: '1.225rem', // 0.875rem * 140%
      fontWeight: '400',
    },
  ],
  caption: [
    '0.75rem',
    {
      lineHeight: '1.05rem', // 0.75rem * 140%
      fontWeight: '400',
    },
  ],
  phonetic: [
    '0.875rem',
    {
      lineHeight: '1.225rem', // 0.875rem * 140%
      fontWeight: '400',
    },
  ],
}
