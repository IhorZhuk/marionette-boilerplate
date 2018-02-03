import './../scss/app.scss';
import 'bootstrap';
import Mn from 'backbone.marionette';
import Sample from 'Views/sample';

var App =  Mn.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new Sample());
    Backbone.history.start();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});