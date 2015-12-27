// Export modules to global scope as necessary (only for testing)
if (typeof window === 'undefined') {
  // We are in node. Require modules.
  assert = require('chai').assert;
  persianRex = require('../dist/main');
  isBrowser = false;
} else {
  // We are in the browser. Set up variables like above using served js files.
  assert = chai.assert;
  // num and sinon already exported globally in the browser.
  isBrowser = true;
}
