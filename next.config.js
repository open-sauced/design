const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['@br-sauced/design-system']);

/** @type {import('next').NextConfig} */
module.exports = withTM(withImages({
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
    disableStaticImages: true,
  },
}));
