module.exports = {
  name: 'loaders',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/loaders',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
