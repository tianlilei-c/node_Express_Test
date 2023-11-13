console.log('测试这里是否被执行');

var JasmineReporters = require('jasmine-reporters');
jasmine.getEnv().addReporter(
  new JasmineReporters.JUnitXmlReporter({
    savePath: 'test-reports',
    consolidateAll: false
  })
);
