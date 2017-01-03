import DS from 'ember-data';

var Feature = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

Feature.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Something something Basecamp",
      body: "Dreamcatcher american apparel typewriter polaroid, Pinterest hoodie tousled vegan pickled gastropub iPhone VHS sartorial. Fanny pack vinyl fingerstache whatever, raw denim Carles literally next level fashion axe photo booth pour-over Echo Park."
    },
    {
      id: 2,
      title: "Something something Basecamp",
      body: "Dreamcatcher american apparel typewriter polaroid, Pinterest hoodie tousled vegan pickled gastropub iPhone VHS sartorial. Fanny pack vinyl fingerstache whatever, raw denim Carles literally next level fashion axe photo booth pour-over Echo Park."
    }
  ]
});

export default Feature;
