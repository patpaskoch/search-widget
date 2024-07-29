module.exports = {
  configureWebpack: {
    entry: {
      app: './src/main.js',
      element: './src/element.js' // Deine Web-Komponente
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
    },
  },
};