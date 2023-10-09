const nextConfig = {
  basePath: "/portfolio",
  async redirects() {
    return [
      {
        source: '/',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;