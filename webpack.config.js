/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  devtool: false,
  experiments: {
    layers: true,
  },
  entry: {
    es5: {
      import: './src/index.ts',
      layer: 'es5',
    },
    es6: {
      import: './src/index.ts',
      layer: 'es6',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        issuerLayer: 'es5',
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                target: 'es5',
              },
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        issuerLayer: 'es6',
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                target: 'es6',
              },
            },
          },
        ],
      },
    ],
  },
};
