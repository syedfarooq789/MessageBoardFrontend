/** @type {import('next').NextConfig} */
module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/message-board",
        permanent: true,
      },
    ];
  },
};
