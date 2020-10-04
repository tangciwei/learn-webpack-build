
const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require(__dirname+'/../../lib/webpack.base.js');

  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/Users/tangciwei/learn/learning/1003/my/learn-webpack-build/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, '/Users/tangciwei/learn/learning/1003/my/learn-webpack-build/test/smoke/template/src/search/index.js');
  });
});
