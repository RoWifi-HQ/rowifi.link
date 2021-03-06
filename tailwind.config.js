const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
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
            p: {
              fontWeight: 300,
            },
            h1: {
              color: "#E5E7EB",
              marginBottom: 0,
            },
            h2: {
              color: "#E5E7EB",
            },
            h3: {
              color: "#E5E7EB",
            },
            h4: {
              color: "#E5E7EB",
            },
            a: {
              textDecoration: "none",
              color: "#3B82F6",
            },
            code: {
              color: "#E5E7EB",
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
              color: "#E5E7EB",
            },
            blockquote: {
              color: "#E5E7EB",
            },
            th: {
              color: "#E5E7EB",
            },
          },
        },
        lg: {
          css: {
            h1: {
              marginBottom: 0,
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
    require("./app/utilities/scrollbar"),
  ],
};
