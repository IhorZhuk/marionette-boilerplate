# Marionette Webpack Boilerplate
Includes:
* Marionette.js v3
* Backbone.stickit
* Sass
* Jasmine and Jasmine-jquery
* Karma
* Sinon
* Bootstrap 4

### Installation:
1. Run `npm install`.
2. Run `npm install -g karma-cli`.

### Usage:
1. Run `npm run build` for development. The command launches server with the hot reloading. 
2. Run `npm run build:prod` for compiling src files.
3. Run `npm test` for launching karma and running tests.

### Removing bootstrap:
1. Remove `bootstrap` and `popper.js` from `package.json`.
2. Remove `@import "~bootstrap/scss/bootstrap"` from `app.scss`.
3. Remove `import 'bootstrap'` from `app.js`.