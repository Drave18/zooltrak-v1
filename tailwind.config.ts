import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e0e0e",
        paper: "#f4f0e8",
        "paper-raised": "#faf7f2",
        signal: "#00c853",
        rule: "#d4cfc5",
        "ink-muted": "#6b6b6b",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        hard: "3px 3px 0 0 #0e0e0e",
        "hard-sm": "2px 2px 0 0 #0e0e0e",
        "hard-lg": "5px 5px 0 0 #0e0e0e",
        "hard-signal": "3px 3px 0 0 #00c853",
      },
      letterSpacing: {
        widish: "0.04em",
        widest2: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
