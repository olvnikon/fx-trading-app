/* eslint-disable import/no-extraneous-dependencies */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const flexFixes = require('postcss-flexbugs-fixes');

module.exports = {
  webpack: (config, env) => {
    const loaders = config.module.rules.find(conf => !!conf.oneOf);
    const fileLoader = loaders.oneOf.find(loader => loader.loader && loader.loader.includes('file-loader'));
    fileLoader.exclude.push(/\.scss$/);

    const postCSS = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          flexFixes,
          autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] }),
        ],
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: env === 'production'
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          postCSS,
          'sass-loader',
          ],
        })
        : [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          postCSS,
          'sass-loader',
        ],
    });
    if (env === 'production') {
      config.module.rules.push({
        test: /\.(js|jsx|mjs)$/,
        include: [
          /(@tr-elf|@polymer|@webcomponents)/,
        ],
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          compact: true,
        },
      });
    }
    return config;
  },
  jest: config => ({
    ...config,
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
    ],
  }),
};
