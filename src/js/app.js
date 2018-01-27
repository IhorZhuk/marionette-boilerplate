import './../scss/app.scss'
import Marionette from 'backbone.marionette';

var App =  Marionette.Application.extend({
  region: '#app',

  onStart() {
    console.log('app start')
    Backbone.history.start();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});