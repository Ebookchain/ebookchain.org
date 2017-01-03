import Ember from 'ember';

export default Ember.Component.extend({

    didRender() {
	    Ember.$(window).scroll(function () {
	    	if(Ember.$(window).width() >= 480){
		        if ( Ember.$(window).scrollTop() >= Ember.$(window).height()) {
		            Ember.$(".navbar-fixed-top").css("background-color","rgba(3,172,203,.8)");
		        }else{
	        		Ember.$(".navbar-fixed-top").css("background-color","rgba(0,0,0,.1)");
	        	}
	        }
	    });
    }
});
