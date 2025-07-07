import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundColor: {
        primary: "var(--primary, #1F2A24)",
        secondary: "var(--secondary, #5B7768)",
        light: "var(--light, #DAE3D7)",
      },
      colors: {
        primary: "var(--primary, #1F2A24)",
        secondary: "var(--secondary, #5B7768)",
        light: "var(--light, #DAE3D7)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );


   // Add your custom variables
  newVars["--primary"] = "#1F2A24";
  newVars["--secondary"] = "#5B7768";
  newVars["--light"] = "#DAE3D7";

  addBase({
    ":root": newVars,
  });
}

export default config;
