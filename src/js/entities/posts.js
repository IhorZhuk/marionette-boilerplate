import Backbone from 'backbone';
import Post from 'Entities/post';


export default Backbone.Collection.extend({
  model: Post,
  url: 'https://jsonplaceholder.typicode.com/posts'
});