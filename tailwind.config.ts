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
        'btn-gradient': 'linear-gradient(117deg, #1FD5BC 4.97%, #358BF2 54%)',
        'btn-gradient-hover':
          'linear-gradient(117deg, rgba(31, 213, 188, 0.80) 4.97%, rgba(53, 139, 242, 0.80) 54%)',
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
  },
  plugins: [],
}
export default config
