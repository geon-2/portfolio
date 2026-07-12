import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        muted: '#667085',
        line: '#EAECF0',
        surface: '#F9FAFB',
        accent: '#ff6f0f',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 24, 40, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
