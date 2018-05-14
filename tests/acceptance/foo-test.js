import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | foo', function(hooks) {
  setupApplicationTest(hooks);

  for (let i = 0; i < 1000; ++i) {
    test('visiting /foo ' + i, async function(assert) {
      await visit('/foo');

      assert.equal(currentURL(), '/foo');
    });
  }
});
