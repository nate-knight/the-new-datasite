module.exports = {
  name: 'documents',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/documents',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
