import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-prilozhenie-2-контроллер', 'Unit | Serializer | i-i-s-prilozhenie-2-контроллер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-prilozhenie-2-контроллер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-prilozhenie-2-режим-сервера',

    'model:i-i-s-prilozhenie-2-должность',
    'model:i-i-s-prilozhenie-2-контроллер',
    'model:i-i-s-prilozhenie-2-отчет-о-сервере',
    'model:i-i-s-prilozhenie-2-расположение',
    'model:i-i-s-prilozhenie-2-сенсоры',
    'model:i-i-s-prilozhenie-2-серверная',
    'model:i-i-s-prilozhenie-2-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
