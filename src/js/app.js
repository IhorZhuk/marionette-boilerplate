import './../scss/app.scss'
import Marionette from 'backbone.marionette';
import RootView from 'Views/rootView';
import Router from './router';

var App =  Marionette.Application.extend({
  region: '#app',

  onStart() {
    new Router();
    this.showView(new RootView());
    Backbone.history.start();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});