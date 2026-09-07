/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fi: {
          purple: "#712CDC",
          darkPurple: "#5b24b5",
          lightPurple: "#ede8ff",
          tabBg: "#f5f0ff",
          tabBorder: "#ece5ff",
          badgeBg: "#ede8ff",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        'fi-nav': '0 8px 32px rgba(20,14,50,0.12), 0 0 0 1px rgba(255,255,255,0.18) inset',
        'fi-card': '0 2px 6px rgba(20,14,50,0.04)',
        'fi-tab': '0 1px 3px rgba(20,14,50,0.10), 0 0 0 1px rgba(113,44,220,0.08)',
      }
    },
  },
  plugins: [],
}
