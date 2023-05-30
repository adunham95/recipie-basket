/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  disable: !isProduction,
  dest: 'public',
  runtimeCaching,
});

const nextConfig = {
  pwa: {
    disable: !isProduction,
    dest: 'public',
    runtimeCaching,
  },
};

module.exports = nextConfig;
