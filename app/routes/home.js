import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            features: this.store.findAll('feature'),
            partners: this.store.findAll('partner'),
            teams: this.store.findAll('team')
        });
    }
});