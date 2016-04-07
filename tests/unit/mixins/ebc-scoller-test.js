import Ember from 'ember';
import EbcScollerMixin from 'ebookchain/mixins/ebc-scoller';
import { module, test } from 'qunit';

module('Unit | Mixin | ebc scoller');

// Replace this with your real tests.
test('it works', function(assert) {
  let EbcScollerObject = Ember.Object.extend(EbcScollerMixin);
  let subject = EbcScollerObject.create();
  assert.ok(subject);
});
