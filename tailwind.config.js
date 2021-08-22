const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

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
            code: {
              color: "#fff",
              backgroundColor: "#282828",
              borderRadius: "5px",
              paddingTop: em(1, 6),
              paddingRight: em(2, 6),
              paddingBottom: em(1, 6),
              paddingLeft: em(2, 6),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            strong: {
              color: "#fff",
            },
            blockquote: {
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
  plugins: [
    require("@tailwindcss/typography"),
    // require("tailwindcss-scrollbar"),
  ],
};
