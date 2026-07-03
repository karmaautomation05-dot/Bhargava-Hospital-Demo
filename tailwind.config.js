/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          navy: "#071B34",      // Elegant Navy
          gold: "#D4A95F",      // Luxury Gold
          royal: "#1E3A8A",     // Premium Royal Blue
          bg: "#FAF8F5",        // Light Background
          warmWhite: "#F8F6F2", // Warm White Section
          text: "#1A1A1A",      // Primary Text
          muted: "#5B6470",     // Muted Text
          border: "#E7E1D7",    // Subtle Border
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0,0,0,0.12)',
        'luxury': '0 20px 80px rgba(37,99,235,0.06), 0 10px 40px rgba(0,0,0,0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
