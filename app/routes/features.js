import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // GET /features
    return this.store.findAll('feature');
  }
});
