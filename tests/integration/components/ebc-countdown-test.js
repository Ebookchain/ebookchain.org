import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ebc-countdown', 'Integration | Component | ebc countdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ebc-countdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ebc-countdown}}
      template block text
    {{/ebc-countdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
