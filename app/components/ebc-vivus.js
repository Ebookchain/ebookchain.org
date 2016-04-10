import Ember from 'ember';
import Vivus from 'vivus';

export default Ember.Component.extend({
    didRender() {
        new Vivus('ebookchain-logo', {
            type: 'delayed',
            duration: 200,
            animTimingFunction: Vivus.EASE
        }, function() {
            console.log("ok");
        });
    }
});