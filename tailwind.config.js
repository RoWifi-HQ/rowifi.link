module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dashboard-dark": "#1d1d1d",
        "sidebar-dark": "#111",
        "hover-dark": "#282828",
        "button-dark": "#333333",
        "link-dark": "#aaa",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            h1: {
              color: "#fff",
            },
            h2: {
              color: "#fff",
            },
            a: {
              textDecoration: "none",
              color: "#fff",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
