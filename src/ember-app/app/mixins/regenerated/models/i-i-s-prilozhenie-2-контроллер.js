import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idКонтроллера: DS.attr('number'),
  модель: DS.attr('string'),
  сенсоры: DS.belongsTo('i-i-s-prilozhenie-2-сенсоры', { inverse: null, async: false }),
  серверная: DS.belongsTo('i-i-s-prilozhenie-2-серверная', { inverse: 'контроллер', async: false })
});

export let ValidationRules = {
  idКонтроллера: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-контроллер.validations.idКонтроллера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-контроллер.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сенсоры: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-контроллер.validations.сенсоры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  серверная: {
    descriptionKey: 'models.i-i-s-prilozhenie-2-контроллер.validations.серверная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтроллерE', 'i-i-s-prilozhenie-2-контроллер', {
    модель: attr('Модель', { index: 0 }),
    idКонтроллера: attr('', { index: 1 })
  });
};
