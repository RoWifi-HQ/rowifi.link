/* eslint-disable @typescript-eslint/no-var-requires */
const gfm = require("remark-gfm");
const slug = require("remark-slug");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm, slug],
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot%20applications.commands&permissions=402738240",
        permanent: false,
      },
      {
        source: "/support",
        destination: "https://discord.gg/h4BGGyR",
        permanent: true,
      }
    ];
  },
});
