import Mn from 'backbone.marionette';

export default Mn.Behavior.extend({

  defaults: {
    message: 'Are you sure you want to delete?'
  },

  ui: {
    trigger: '.js-delete'
  },

  events: {
    'click @ui.trigger': 'openAlert'
  },

  openAlert() {
    const confirmDelete = confirm(this.getOption('message'));
    if (confirmDelete) {
      this.view.onDeleteConfirm();
    }
  }

});