/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kriyon: {
          bg: '#F4F4F0',
          text: '#0A0A0A',
          muted: '#666664',
          subtle: '#9A9A96',
          border: 'rgba(10, 10, 10, 0.12)',
          dark: '#080808',
          darkText: '#F5F5F2',
        },
      },
      fontFamily: {
        sans: ['"PP Neue Montreal"', '"Inter Display"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        neue: ['"PP Neue Montreal"', '"Inter Display"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Inter Display"', '"PP Neue Montreal"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'inter-display': ['"Inter Display"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.045em',
        tight: '-0.025em',
        widest: '0.22em',
      },
      lineHeight: {
        squash: '0.84',
        tightest: '0.92',
      },
    },
  },
  plugins: [],
}
