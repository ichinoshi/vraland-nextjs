/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Primary color palette (deep charcoals for modern luxury)
        primary: {
          50: "#f6f6f6",
          100: "#e8e8e8",
          200: "#cfcfcf",
          300: "#a9a9a9",
          400: "#7d7d7d",
          500: "#5a5a5a",
          600: "#3f3f3f",
          700: "#2c2c2c",
          800: "#1e1e1e",
          900: "#141414",
          950: "#0a0a0a",
        },

        // Secondary color palette (warm sophisticated grays)
        secondary: {
          50: "#faf9f7", // soft ivory gray
          100: "#f2f0ed", // light parchment
          200: "#e0ded9",
          300: "#c9c6c0",
          400: "#a29d95",
          500: "#7c756d",
          600: "#5c554e",
          700: "#463f39",
          800: "#2f2a25",
          900: "#1b1815",
          950: "#0d0b09",
        },

        // Accent colors (luxury bronze, champagne, cocoa tones)
        accent: {
          50: "#fdfaf6", // ivory pearl
          100: "#f6efe5", // champagne beige
          200: "#e7d2b8", // soft gold beige
          300: "#d1af7d", // champagne gold
          400: "#b8894f", // antique bronze
          500: "#966c36", // rich bronze (core accent)
          600: "#755227", // espresso bronze
          700: "#5c3e1b", // mocha brown
          800: "#3e2912", // deep cocoa
          900: "#24170a", // dark roasted
          950: "#120b05", // almost black brown
        },

        // Status Colors
        success: "#2e5e4d", // Emerald Green (prosperity)
        warning: "#c9a227", // Champagne Gold
        error: "#c7385d", // Deep Rose Red
        info: "#1b2f4a", // Midnight Navy

        // Background Colors
        background: {
          primary: "#f9f9f8", // Off-white luxury base
          secondary: "#efefed", // Subtle ivory gray
          tertiary: "#d4d4d2", // Gentle stone gray
          dark: "#1a1a1a", // Modern dark charcoal
        },

        // Text Colors
        text: {
          primary: "#1a1a1a", // Core charcoal
          secondary: "#333333", // Refined deep gray
          tertiary: "#767676", // Medium gray
          inverse: "#fdfdfd", // White/ivory for dark backgrounds
          muted: "#a9a9a9", // Muted soft gray
        },

        // Button Colors
        button: {
          primary: {
            bg: "#966c36", // accent-500 bronze
            "bg-hover": "#b8894f", // accent-400 champagne bronze
            "bg-active": "#755227", // accent-600 espresso bronze
            "bg-disabled": "#cfcfcf", // primary-200
            text: "#ffffff",
            "text-disabled": "#767676",
            border: "#966c36",
            "border-hover": "#b8894f",
            "border-focus": "#755227",
          },
          secondary: {
            bg: "transparent",
            "bg-hover": "#f6f6f6", // primary-50
            "bg-active": "#e8e8e8", // primary-100
            "bg-disabled": "#f9f9f8", // background-primary
            text: "#3f3f3f", // primary-600
            "text-hover": "#2c2c2c", // primary-700
            "text-disabled": "#a9a9a9",
            border: "#3f3f3f",
            "border-hover": "#2c2c2c",
            "border-focus": "#5a5a5a",
          },
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Monaco", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        glow: "0 0 20px rgba(234, 179, 8, 0.3)",
        "glow-lg": "0 0 40px rgba(234, 179, 8, 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/images/hero-pattern.svg')",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        900: "900ms",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
