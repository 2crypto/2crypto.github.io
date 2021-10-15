const env = (dev, prod = dev) => {
  if (process.env.ELEVENTY_ENV === 'development') {
    return dev;
  }

  return prod;
};

module.exports = {
  title: 'Aaron John | Seeker',
  description: 'Crypto for humans. Come say hi 👾',
  baseUrl: env('localhost:8080', 'https://2crypto.github.io'),
  thumb: '/assets/images/big-rainbow-static.jpg',
};
