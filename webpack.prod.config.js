const path = require('path');

module.exports = {
  entry: {
    home: './src/index.js',
    products: './src/products.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'developemnt',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlerbars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Welcome to Sasta Bazar',
      chunks: ['home'],
      template: 'src/template/index.handlebars',
      templateParameters: require(path.resolve(
        __dirname,
        'src/template/banner.json'
      )),
      description: 'Sasata Bazar description',
    }),
    new HtmlWebpackPlugin({
      filename: 'products.html',
      chunks: ['products'],
      title: 'Product- Sasta Bazar',
      template: 'src/template/products.handlebars',
      description: 'Products description',
    }),
  ],
  resolve: {
    fallback: {
      fs: false,
    },
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
};
