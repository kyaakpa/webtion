/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/welcome",
        permanent: true,
      },
      // {
      //   source: "/api/sendEmail",
      //   destination: "/welcome",
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
