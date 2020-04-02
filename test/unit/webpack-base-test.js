const assert = require('assert');

// eslint-disable-next-line no-undef
describe('webpack.base.js test case', () => {
  // eslint-disable-next-line global-require
  const baseConfig = require('../../lib/webpack.base.js');
  // eslint-disable-next-line no-undef
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('webpack_build_2020/test/smoke/template/src/index/index.js') > -1, true);
  });
});
