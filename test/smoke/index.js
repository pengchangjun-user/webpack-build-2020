const path = require('path');
const webpack = require('webpack');
// 删除文件的插件
const rimraf = require('rimraf');
const Mocha = require('mocha');

const mocha = new Mocha({
  timeout: '10000ms',
});
// eslint-disable-next-line no-console
console.log('dirname', __dirname);

// 更改运行脚本的目录，因为这个脚本是在test里面，所以要更改
process.chdir(path.join(__dirname, 'template'));

// 首先删除dist文件，之后再打包
rimraf('./dist', () => {
  // eslint-disable-next-line global-require
  const prodConfig = require('../../lib/webpack.prod.js');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      process.exit(2);
    }
    // eslint-disable-next-line no-console
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));
    // eslint-disable-next-line no-console
    console.log('Webpack build success, begin run test.');

    // 把测试用例加入进来
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
