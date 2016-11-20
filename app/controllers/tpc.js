import Ember from 'ember';

export default Ember.Controller.extend({

// 设置倒计时
	init(){
		this.updateTime();	
	},
	endtime: new Date(2016, 11, 12, 12, 12, 0).getTime(),
    lefttime: Ember.computed('curtime','endtime', function(){
    	return parseInt((this.get('endtime') - this.get('curtime'))/1000);
    }),

    day: Ember.computed('lefttime', function(){
    	return parseInt(this.get('lefttime')/(24*60*60));
    }),
    hour:Ember.computed('lefttime',function(){
    	return parseInt(this.get('lefttime')/(60*60)%24);
    }),
    minute:Ember.computed('lefttime',function(){
    	return parseInt(this.get('lefttime')/60%60);
    }),
    second:Ember.computed('lefttime',function(){
    	return parseInt(this.get('lefttime')%60);
    }),
    updateTime: function(){
    	let _this = this;
    	_this.set('curtime', new Date().getTime());
    	Ember.run.later(this,function(){
    		_this.updateTime();
    	},500)    	
    }

});



