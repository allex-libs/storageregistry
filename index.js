function parserRegistryIntroducer(execlib){
  'use strict';
  var lib = execlib.lib,
    q = lib.q,
    execSuite = execlib.execSuite,
    storageRegistry = execSuite.additionalRegistries.get('storages');
  if(storageRegistry){
    return {};
  }
  execSuite.additionalRegistries.add('storages', new execSuite.RegistryBase());
  return {};
}

module.exports = parserRegistryIntroducer;
