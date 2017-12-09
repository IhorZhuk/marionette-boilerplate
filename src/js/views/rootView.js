import Marionette from 'backbone.marionette';
import Radio from 'backbone.radio';
import Nav from 'Views/navView';
import About from 'Views/aboutView';
import Posts from 'Views/posts/indexView';
import Post from 'Views/posts/showView';
import template from 'Templates/root';


export default Marionette.View.extend({
  template: template,

  regions: {
    header: '.js-region-header',
    content: '.js-region-content'
  },

  initialize() {
    this.bindChannelEvents();
  },

  bindChannelEvents() {
    var channel = Radio.channel('root');
    channel.on('show:about', () => this.showChildView('content', new About() ));
    channel.on('show:posts', () => this.showChildView('content', new Posts() ));
    channel.on('show:post', (id) => this.showChildView('content', new Post({id:id})));
  },

  onRender() {
    this.showChildView('header', new Nav());
  }
});