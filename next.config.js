/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * @see https://github.com/vercel/next.js/blob/b579a35e83531519f7edfbbdb1b7b3adc493afb4/examples/with-styled-components/next.config.js
   */
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
