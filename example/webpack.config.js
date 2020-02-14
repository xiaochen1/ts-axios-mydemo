const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  /**
   * 我们会在example下建立多个子目录
   * 我们会把不同章节的demo放到不同的子目录
   * 每个子目录下会创建一个app.ts
   * app.ts作为webpack构建的入口文件
   * entries收集了多目录个入口文件，并且每个入口还引入了一个用于热更新的文件
   * entries 是一个对象， key为目录名
   */
  entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
    const fullDir = path.join(__dirname, dir);
    const entry = path.join(fullDir, 'app.ts')
    // 当前目录下的每一个文件夹， 若该文件夹中含有app.ts， 则都会作为一个入口文件
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      entries[dir] = ['webpack-hot-middleware/client?noInfo=true&reload=true', entry]
    }
    return entries;
  }, {}),
  // 根据不同目录名称，打包生成目标js, 名称和目录名一致
  output: {
    path: path.join(__dirname, "__build__"),
    filename: '[name].js',
    publicPath: '/__build__/',
  },
  module: {
    rules: [{
        test: /\.ts$/,
        enforce: 'pre',
        use: [{
          loader: 'tslint-loader'
        }]
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}