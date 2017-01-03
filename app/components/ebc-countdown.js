import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'div',
  	classNames: ['countdown'],

    // 设置倒计时
    init() {
    	this._super();
        this.updateTime();
    },
    endtime1: new Date(2016, 11, 12, 12, 12, 0).getTime(),
    endtime2: new Date(2017, 0, 21, 21, 21, 0).getTime(),
    TPC_start: false,
    endtime: Ember.computed('curtime', 'endtime1','endtime2',function(){       
        if(this.get('curtime') > this.get('endtime1')){
            this.set('TPC_start',true);
            return this.get('endtime2');
        }else{
            return this.get('endtime1');
        }
    }),
    lefttime: Ember.computed('curtime', 'endtime', function() {
        return parseInt((this.get('endtime') - this.get('curtime')) / 1000);
    }),

    day: Ember.computed('lefttime', function() {
        return parseInt(this.get('lefttime') / (24 * 60 * 60));
    }),
    hour: Ember.computed('lefttime', function() {
        return parseInt(this.get('lefttime') / (60 * 60) % 24);
    }),
    minute: Ember.computed('lefttime', function() {
        return parseInt(this.get('lefttime') / 60 % 60);
    }),
    second: Ember.computed('lefttime', function() {
        return parseInt(this.get('lefttime') % 60);
    }),
    updateTime: function() {
        let _this = this;
        _this.set('curtime', new Date().getTime());
        Ember.run.later(this, function() {
            _this.updateTime();
        }, 500);
    }
});
