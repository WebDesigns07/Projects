var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'head',
        title: 'Hello World!',
        date: new Date()
    })
  ]
}
