module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { es: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
}
