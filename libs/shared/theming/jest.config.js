module.exports = {
  name: 'shared-theming',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/theming',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
