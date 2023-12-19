import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPrilozhenie_2ДолжностьLForm from './forms/i-i-s-prilozhenie-2-должность-l';
import IISPrilozhenie_2ОтчетОСервереLForm from './forms/i-i-s-prilozhenie-2-отчет-о-сервере-l';
import IISPrilozhenie_2РасположениеLForm from './forms/i-i-s-prilozhenie-2-расположение-l';
import IISPrilozhenie_2СенсорыLForm from './forms/i-i-s-prilozhenie-2-сенсоры-l';
import IISPrilozhenie_2СервернаяLForm from './forms/i-i-s-prilozhenie-2-серверная-l';
import IISPrilozhenie_2СотрудникLForm from './forms/i-i-s-prilozhenie-2-сотрудник-l';
import IISPrilozhenie_2ДолжностьEForm from './forms/i-i-s-prilozhenie-2-должность-e';
import IISPrilozhenie_2ОтчетОСервереEForm from './forms/i-i-s-prilozhenie-2-отчет-о-сервере-e';
import IISPrilozhenie_2РасположениеEForm from './forms/i-i-s-prilozhenie-2-расположение-e';
import IISPrilozhenie_2СенсорыEForm from './forms/i-i-s-prilozhenie-2-сенсоры-e';
import IISPrilozhenie_2СервернаяEForm from './forms/i-i-s-prilozhenie-2-серверная-e';
import IISPrilozhenie_2СотрудникEForm from './forms/i-i-s-prilozhenie-2-сотрудник-e';
import IISPrilozhenie_2ДолжностьModel from './models/i-i-s-prilozhenie-2-должность';
import IISPrilozhenie_2КонтроллерModel from './models/i-i-s-prilozhenie-2-контроллер';
import IISPrilozhenie_2ОтчетОСервереModel from './models/i-i-s-prilozhenie-2-отчет-о-сервере';
import IISPrilozhenie_2РасположениеModel from './models/i-i-s-prilozhenie-2-расположение';
import IISPrilozhenie_2СенсорыModel from './models/i-i-s-prilozhenie-2-сенсоры';
import IISPrilozhenie_2СервернаяModel from './models/i-i-s-prilozhenie-2-серверная';
import IISPrilozhenie_2СотрудникModel from './models/i-i-s-prilozhenie-2-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-prilozhenie-2-должность': IISPrilozhenie_2ДолжностьModel,
    'i-i-s-prilozhenie-2-контроллер': IISPrilozhenie_2КонтроллерModel,
    'i-i-s-prilozhenie-2-отчет-о-сервере': IISPrilozhenie_2ОтчетОСервереModel,
    'i-i-s-prilozhenie-2-расположение': IISPrilozhenie_2РасположениеModel,
    'i-i-s-prilozhenie-2-сенсоры': IISPrilozhenie_2СенсорыModel,
    'i-i-s-prilozhenie-2-серверная': IISPrilozhenie_2СервернаяModel,
    'i-i-s-prilozhenie-2-сотрудник': IISPrilozhenie_2СотрудникModel
  },

  'application-name': 'Prilozhenie_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_2',
          title: 'Prilozhenie_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'prilozhenie-2': {
          caption: 'Prilozhenie_2',
          title: 'Prilozhenie_2',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-prilozhenie-2-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            },
            'i-i-s-prilozhenie-2-должность-l': {
              caption: 'Должность',
              title: ''
            }
          },
          контроллер: {
            caption: 'Контроллер',
            title: 'Контроллер',
            'i-i-s-prilozhenie-2-сенсоры-l': {
              caption: 'Сенсоры',
              title: ''
            }
          },
          сервер: {
            caption: 'Сервер',
            title: 'Сервер',
            'i-i-s-prilozhenie-2-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            },
            'i-i-s-prilozhenie-2-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-prilozhenie-2-серверная-l': {
              caption: 'Серверная',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-prilozhenie-2-должность-l': IISPrilozhenie_2ДолжностьLForm,
    'i-i-s-prilozhenie-2-отчет-о-сервере-l': IISPrilozhenie_2ОтчетОСервереLForm,
    'i-i-s-prilozhenie-2-расположение-l': IISPrilozhenie_2РасположениеLForm,
    'i-i-s-prilozhenie-2-сенсоры-l': IISPrilozhenie_2СенсорыLForm,
    'i-i-s-prilozhenie-2-серверная-l': IISPrilozhenie_2СервернаяLForm,
    'i-i-s-prilozhenie-2-сотрудник-l': IISPrilozhenie_2СотрудникLForm,
    'i-i-s-prilozhenie-2-должность-e': IISPrilozhenie_2ДолжностьEForm,
    'i-i-s-prilozhenie-2-отчет-о-сервере-e': IISPrilozhenie_2ОтчетОСервереEForm,
    'i-i-s-prilozhenie-2-расположение-e': IISPrilozhenie_2РасположениеEForm,
    'i-i-s-prilozhenie-2-сенсоры-e': IISPrilozhenie_2СенсорыEForm,
    'i-i-s-prilozhenie-2-серверная-e': IISPrilozhenie_2СервернаяEForm,
    'i-i-s-prilozhenie-2-сотрудник-e': IISPrilozhenie_2СотрудникEForm
  },

});

export default translations;
