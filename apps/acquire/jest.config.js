module.exports = {
  name: 'acquire',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/acquire',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
