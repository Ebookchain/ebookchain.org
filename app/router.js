import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('features');
  this.route('get_started');
  this.route('home', {'path': '/'});
  this.route('team');
  this.route('tpc');
});

export default Router;
