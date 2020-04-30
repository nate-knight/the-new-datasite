module.exports = {
  name: 'harness',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/harness',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
