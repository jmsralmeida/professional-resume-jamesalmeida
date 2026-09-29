/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',    /* Extra small devices */
        'mobile': '480px', /* Mobile específico */
        'tablet': '768px', /* Tablet */
        'desktop': '1024px', /* Desktop */
        'wide': '1440px',  /* Wide screens */
      },
      colors: {
        /* "Floresta" palette from the site redesign */
        paper: '#F3F1EC',
        surface: '#FBFAF7',
        ink: '#17201B',
        muted: '#56605A',
        line: '#D9D6CD',
        accent: { DEFAULT: '#1E5B45', hover: '#174736' },
        forest: { DEFAULT: '#16231D', text: '#F3F1EC', muted: '#A9B5AE', line: '#2E3C35' },
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
