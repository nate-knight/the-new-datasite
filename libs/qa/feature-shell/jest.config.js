module.exports = {
  name: 'qa-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/qa/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
