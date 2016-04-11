import DS from 'ember-data';

var Partner = DS.Model.extend({
  name: DS.attr('string'),
  link: DS.attr('string'),
  logo: DS.attr('string'),
  description: DS.attr('string')
});

Partner.reopenClass({
  FIXTURES: [{
    id: 1,
    name: "巴比特",
    link: "http://8btc.com",
    logo: "/images/logos/8btc.svg",
    description: "最好的中文社区"
  }, {
    id: 2,
    name: "Node.js based forum software built for the modern web",
    link: "https://nodebb.com/",
    logo: "/images/logos/nodebb.png",
    description: "Node.js based forum software built for the modern web"
  }, {
    id: 3,
    name: "Just a blogging platform",
    link: "https://ghost.org/",
    logo: "/images/logos/ghost.png",
    description: "Just a blogging platform"
  }, {
    id: 4,
    name: "Just a blogging platform",
    link: "https://ghost.org/",
    logo: "/images/logos/ghost.png",
    description: "Just a blogging platform"
  }]
});

export default Partner;