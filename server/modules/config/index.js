const nconf = require('nconf');
const env = 'TEST';
const configs = {
    TEST: () => {
        nconf.file('custom', {file: `${process.cwd()}/server/modules/config/test-config.json`});
    },

    PROD: () => {

    }
};

nconf.argv().env();


if (configs[env]) {
    console.log(`Loading ${env} configuration settings`);
    configs[env]();
} else {
    nconf.file('custom', {file: `${process.cwd()}/server/modules/config/dev-config.json`})
}

// Default settings
nconf.file({
    file: `${process.cwd()}/server/modules/config/default.json`
});

export default nconf;
