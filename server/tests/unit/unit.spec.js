import config from '../../modules/config';

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

import './common.spec';

describe(`Running Unit tests for ${config.get('app:name')}`, () => {

  /*
  Before all tests.
   */
  before(() => {
    console.log('Running before all tests.');
  });

  /*
  Before each test.
   */
  beforeEach(() => {
    console.log("running something before each test");
  });

  importTest("Tests config module", './config.spec');

  after(function () {
    console.log("after all tests");
  });
});