import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Prilozhenie_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Prilozhenie_2',
          title: 'Prilozhenie_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
