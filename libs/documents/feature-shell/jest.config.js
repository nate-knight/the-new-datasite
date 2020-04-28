module.exports = {
  name: 'documents-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/documents/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
