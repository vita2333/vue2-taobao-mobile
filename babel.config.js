// const path = require('path')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vita',
        // customName: path.resolve(__dirname, './src/components/index.js'),
        // 指定样式路径
        // style: (name) => `${name}/style/less`,
      },
    ],
  ],
}
