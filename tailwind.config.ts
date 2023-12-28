import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      cyan: "#00fff7",
      softBlue: "#8bacda",

      /* Neutral */
      white: "#000000",
      darkblueMain: "#0d192b",
      darkblueCard: "#14253d",
      darkblueLine: "#2f415b",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
    },
  },
  plugins: [],
};

export default config;
