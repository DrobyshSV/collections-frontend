import webpack from 'webpack';

import {buildBabelLoader} from './loaders/buildBabelLoader';
import {buildCssLoader} from './loaders/buildCssLoader';
import {BuildOptions} from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const {isDev} = options;
  const imgLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                }
              }
            ]
          }
        }
      }]
  };
  const codeBabelLoader = buildBabelLoader({...options, isTsx: false});
  const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true});
  const cssLoader = buildCssLoader(isDev);

  return [
    imgLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
}
