var sidebar = require('./links/sidebar.js');
var nav = require('./links/nav.js');
var path = require('path');

module.exports = {
  base: '/algorithms/',
  port: '8080',
  title: 'I-Algorithms',
  description: 'Introduction To Algorithms With JavaScript.',

  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],

  themeConfig: {
    nav,
    sidebar
  },

  plugins: [
    ['mathjax', {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    }],
    "vuepress-plugin-cat"
  ],

  chainWebpack: config => {
    config.resolve
      .alias
      .set('@image', path.resolve(__dirname, 'public'));

    config.module
      .rule('eslint')
      .pre()
      .exclude.add([/node_modules/, /docs/])
      .add(path.resolve(__dirname, '../../src'))
      .end()
      .test(/\.js$/)
      .use('eslint-loader')
      .loader('eslint-loader')
      .options({
        extensions: ['.js'],
        cache: true,
        emitWarning: true,
        emitError: true,
        formatter: require('eslint/lib/cli-engine/formatters/codeframe')
      });
  }
}