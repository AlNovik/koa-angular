import config from '../../modules/config';

let expect = require('chai').expect;

describe('Config', () => {

  it('Project name', () => {
    expect('Test-project').to.equal(config.get('app:name'));
  });

  it('Server port', () => {
    expect(3000).to.equal(config.get('server:port'));
  });
});
