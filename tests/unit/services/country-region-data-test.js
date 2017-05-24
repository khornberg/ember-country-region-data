import { moduleFor, test } from 'ember-qunit';

moduleFor('service:country-region-data', 'Unit | Service | country region data', {});

test('data', function(assert) {
  let service = this.subject();
  assert.ok(service.data);
  assert.equal(service.data.length, 248);
  assert.equal(service.data[0].countryName, 'Afghanistan');
});
