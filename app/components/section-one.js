import Ember from 'ember';

export default Ember.Component.extend({
	didRender() {
	  Ember.$('#particles').particleground({
	    dotColor: '#fff',
	    lineColor: '#fff'
	  });
	  // Ember.$('.intro').css({
	  //   'margin-top': -($('.intro').height() / 2)
	  // });
	}
});
