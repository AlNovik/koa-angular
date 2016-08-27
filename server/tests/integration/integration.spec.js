import config from '../../modules/config';
import app from '../../app';

// tests(app);

function importTest(name, path) {
  require(path)(name, app);
}

import './db/db.spec';

describe(`Running Integration tests for ${config.get('app:name')}`, () => {

  /*
  Before all tests.
   */
  before(() => {
    // console.log('Running before all tests.');
  });

  /*
  Before each test.
   */
  beforeEach(() => {
    // console.log("running something before each test");
  });

  importTest('Project API tests', './api/project.spec');

  after(function () {
    console.log("after all tests");
  });
});