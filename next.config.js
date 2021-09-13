/* eslint-disable @typescript-eslint/no-var-requires */
const gfm = require("remark-gfm");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm],
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});
