const nconf = require('nconf');
const env = 'TEST';
const envConfigs = {
    TEST: () => {
        nconf.file('custom', {file: `${process.cwd()}/server/modules/config/test-config.json`});
    },

    PROD: () => {

    }
};

nconf.argv().env();


if (envConfigs[env]) {
    console.log(`Loading ${env} configuration settings`);
    envConfigs[env]();
} else {
    nconf.file('custom', {file: `${process.cwd()}/server/modules/config/dev-config.json`})
}

// Default settings
nconf.file({
    file: `${process.cwd()}/server/modules/config/default.json`
});

export default nconf;
