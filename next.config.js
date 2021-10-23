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
});
