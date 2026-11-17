/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Apple-inspired tokens; values live in src/index.css (light and dark) */
        canvas: token('canvas'),
        alt: token('alt'),
        card: token('card'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        accent: { DEFAULT: token('accent'), hover: token('accent-hover') },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'Inter', 'system-ui', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
