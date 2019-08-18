module.exports = {
  presets: [[
    '@babel/preset-env',
    {
      loose: true,
      modules: 'commonjs'
    }
  ]],

  plugins: ['add-module-exports'],

  comments: false
}
