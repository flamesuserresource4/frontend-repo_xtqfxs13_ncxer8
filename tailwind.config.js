/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        aivy: {
          purple: '#8A2BE2',
          blue: '#00B3FF',
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(138, 43, 226, 0.35), 0 0 60px rgba(0, 179, 255, 0.25)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'aivy-gradient': 'linear-gradient(135deg, rgba(138,43,226,0.12), rgba(0,179,255,0.12))',
        'aivy-radial': 'radial-gradient(1200px 600px at 50% -10%, rgba(138,43,226,0.25), rgba(0,179,255,0.15) 40%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
