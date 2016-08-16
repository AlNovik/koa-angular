const nconf = require('nconf');

nconf.argv()
  .env()
  .file({
    file: process.cwd() + '/server/modules/config/default.json'
  });

export default nconf;
