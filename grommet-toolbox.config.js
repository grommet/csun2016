import path from 'path';

export default {
  copyAssets: [
    'src/index.html',
    'CNAME',
    {
      asset: 'node_modules/grommet/img/*icon*.*',
      dist: 'dist/img/'
    },
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerPort: 9000,
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, 'src/js'),
        path.resolve(__dirname, 'src/scss'),
        path.resolve(__dirname, 'node_modules')
      ]
    }
  },
  alias: {
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet-presentation/scss': path.resolve(__dirname, '../grommet-presentation/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js'),
    'grommet-presentation': path.resolve(__dirname, '../grommet-presentation/src/js')
  },
  devPreprocess: ['set-webpack-alias'],
  scsslint: true
};
