import DS from 'ember-data';

var Partner = DS.Model.extend({
  name: DS.attr('string'),
  link: DS.attr('string'),
  logo: DS.attr('string'),
  style: DS.attr('string'),
  description: DS.attr('string')
});

Partner.reopenClass({
  FIXTURES: [{
    id: 1,
    name: "巴比特",
    link: "http://8btc.com",
    logo: "images/logos/8btc.svg",
    style: "",
    description: "国内最大比特币社区"
  }, {
    id: 2,
    name: "CNode",
    link: "https://cnodejs.org/",
    logo: "images/logos/cnodejs.svg",
    style: "",
    description: "CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究"
  }, {
    id: 3,
    name: "Just a blogging platform",
    link: "https://ghost.org/",
    logo: "images/logos/ghost.png",
    style: "",
    description: "Just a blogging platform"
  }, {
    id: 4,
    name: "Node.js based forum software built for the modern web",
    link: "https://nodebb.com/",
    logo: "images/logos/nodebb.png",
    style: "background-color: gray;",
    description: "Node.js based forum software built for the modern web"
  }]
});

export default Partner;