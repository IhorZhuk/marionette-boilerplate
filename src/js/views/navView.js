import Marionette from 'backbone.marionette';
import $ from 'jquery';
import Radio from 'backbone.radio';
import template from 'Templates/nav.jst';

export default Marionette.View.extend({
  template: template,

  ui: {
    links: '.nav-item'
  },

  initialize() {
    this.bindChannelEvents();
  },

  bindChannelEvents() {
    const channel = Radio.channel('root');
    channel.on('show:about', () => this.highlightLink('about'));
    channel.on('show:posts', () => this.highlightLink('posts'));
    channel.on('show:add-post', () => this.highlightLink('add-post'));
  },

  highlightLink(link) {
    const $links = this.getUI('links');
    $links.removeClass('active');
    $links.filter(`[data-name="${link}"]`).addClass('active');
  }
});
