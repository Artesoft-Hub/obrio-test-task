/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    dirs: [
      "pages",
      "hooks",
      "data",
      "domain",
      "ui",
    ],
  },
};

export default nextConfig;
