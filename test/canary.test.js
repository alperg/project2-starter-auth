const expect = require('chai').expect;

describe('sample canary test', function () {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it('should pass sample canary test', function () {
    // eslint-disable-next-line no-unused-expressions
    expect(true).to.be.true;
  });
});
