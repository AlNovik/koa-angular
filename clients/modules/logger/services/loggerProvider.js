angular.module('as.logger').provider('asLogger', () => {
  let moduleName = 'Main';

  return {
    setModuleName(name) {
      moduleName = name;
    },

    $get: ['$log', $log => name => $log.getInstance(`${moduleName}.${name}`)],
  };
});
