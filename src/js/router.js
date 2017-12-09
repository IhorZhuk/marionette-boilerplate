import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';

export default Marionette.AppRouter.extend({
  initialize() {
    this.rootChannel = Radio.channel('root');
  },

  routes: {
    '': 'showAbout',
    'posts/:id': 'showPost',
    'posts': 'showPosts',
    'add-post': 'showAddPost'
  },

  showAbout() {
    this.rootChannel.trigger('show:about');
  },

  showPosts() {
    this.rootChannel.trigger('show:posts');
  },

  showAddPost() {
    this.rootChannel.trigger('show:add-post');
  },

  showPost(id) {
    this.rootChannel.trigger('show:post', id);
  }
});