import Marionette from 'backbone.marionette';
import Bb from 'backbone';
import emptyTemplate from 'Templates/posts/empty';
import template from 'Templates/posts/show';
import Post from 'Entities/post';
import DestoryBh from 'Behaviors/destoryAlert'


export default Marionette.View.extend({
  template: template,

  behaviors: [DestoryBh],

  modelEvents: {
    'sync': 'render',
    'destroy': 'onDestroy'
  },

  initialize(ops) {
    const id = ops.id;
    this.model = new Post({id: id});
    this.model.fetch();
  },

  onDeleteConfirm() {
    this.model.destroy()
  },

  onDestroy() {
    this.destroy();
    Bb.history.navigate('posts', {trigger: true});
  }

})