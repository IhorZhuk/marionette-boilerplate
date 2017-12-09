import Backbone from 'backbone';

export default Backbone.Model.extend({
  urlRoot: 'https://jsonplaceholder.typicode.com/posts',
  defaults: {
    'title':'',
    'body': ''
  }
});