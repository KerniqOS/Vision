import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030509',
          900: '#060911',
          850: '#09142A',
          800: '#0C1322',
          700: '#131D33',
        },
        electric: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#2E7BFF',
          600: '#1D5FE0',
          700: '#1543A8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'radial-electric': 'radial-gradient(circle at center, rgba(46, 123, 255, 0.18) 0%, rgba(46, 123, 255, 0) 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
      },
      boxShadow: {
        'glass': '0 24px 60px -15px rgba(0, 0, 0, 0.75), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'electric-glow': '0 0 40px -8px rgba(46, 123, 255, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
