import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // GET /items
    // Retrieves all items.
    return this.store.findAll('feature');
    // return [
    //   {
    //     id: 1,
    //     title: "Something something Basecamp",
    //     content: "Dreamcatcher american apparel typewriter polaroid, Pinterest hoodie tousled vegan pickled gastropub iPhone VHS sartorial. Fanny pack vinyl fingerstache whatever, raw denim Carles literally next level fashion axe photo booth pour-over Echo Park."
    //   }
    // ];
  }
});
