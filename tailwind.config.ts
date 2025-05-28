// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A29FF',
        checkGreen: '#16A34A',
        checkBg: '#D1FAE5',
      },
    },
  },
  plugins: [],
};

export default config;
