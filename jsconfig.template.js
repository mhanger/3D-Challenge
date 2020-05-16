// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  baseUrl: './3d/',
  include: ['src/**/*', 'tests/**/*'],
  compilerOptions: {
    baseUrl: './3d/',
    target: 'esnext',
    module: 'es2015',
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
}
