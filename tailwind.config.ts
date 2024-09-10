import type { Config } from 'tailwindcss'
import { colors, fontSize } from './src/styles/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'btn-gradient': 'linear-gradient(103deg, #00FFBB 0%, #3D7DF3 148.93%)',
        'btn-gradient-hover':
          'linear-gradient(103deg, rgba(0, 255, 187, 0.90) 0%, rgba(61, 125, 243, 0.90) 148.93%)',
      },
      colors,
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
        notoSans: ['var(--font-notoSans)'],
      },
      screens: {
        xs: '360px',
      },
    },
    // snackbar animate
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'translateY(-5px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out',
    },
  },
  plugins: [],
}
export default config
