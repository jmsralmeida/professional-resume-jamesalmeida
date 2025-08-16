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
    },
  },
  plugins: [],
};
