/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        voidBlack: "var(--void-black)",
        surfaceLayer1: "var(--surface-layer-1)",
        surfaceLayer2: "var(--surface-layer-2)",
        surfaceLayer3: "var(--surface-layer-3)",
        acidGreen: "var(--acid-green)",
        plasmaOrange: "var(--plasma-orange)",
        arcticIce: "var(--arctic-ice)",
        plasmaViolet: "var(--plasma-violet)",
        glowGold: "var(--glow-gold)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
        'scanline': 'scanline 10s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
