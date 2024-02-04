/** @type {import('next-i18next').UserConfig} */

const path = require('path');

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
      localeDetection: false
    },
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}