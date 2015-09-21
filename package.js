Package.describe({
  name: 'kriegslustig:standardjs',
  version: '0.0.0',
  description: 'A meteor integration for standardjs',
  repository: 'https://github.com/Kriegslustig/meteor-standardjs.git',
  documentation: 'README.md'
})

Package.registerBuildPlugin({
  name: 'standardjs',
  sources: ['standardjs.js'],
  npmDependencies: { standard: '5.3.1' }
})

Package.onUse(function (api) {
  api.use('isobuild:linter-plugin@1.0.0');
});
