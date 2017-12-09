import Marionette from 'backbone.marionette';
import indexTemplate from 'Templates/posts/index';
import itemTemplate from 'Templates/posts/indexItem';
import emptyTemplate from 'Templates/posts/empty';
import Posts from 'Entities/posts';


const PostView = Marionette.View.extend({
  template: itemTemplate
});


const EmptyView = Marionette.View.extend({
  template: emptyTemplate
});


const PostsView = Marionette.CollectionView.extend({
  childView: PostView,
  emptyView: EmptyView
});


export default Marionette.View.extend({
  template: indexTemplate,

  regions: {
    'posts': '.js-region-posts'
  },

  initialize() {
    this.posts = new Posts();
  },

  onRender() {
    this.showChildView('posts', new PostsView({collection: this.posts}));
    setTimeout( ()  => this.posts.fetch(), 1000 );
    ;
  }
});