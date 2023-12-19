import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.prilozhenie-2.caption'),
          title: i18n.t('forms.application.sitemap.prilozhenie-2.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.title'),
            children: [{
              link: 'i-i-s-prilozhenie-2-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.i-i-s-prilozhenie-2-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.i-i-s-prilozhenie-2-сотрудник-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-prilozhenie-2-должность-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.i-i-s-prilozhenie-2-должность-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.сотрудники.i-i-s-prilozhenie-2-должность-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.prilozhenie-2.контроллер.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-2.контроллер.title'),
            children: [{
              link: 'i-i-s-prilozhenie-2-сенсоры-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.контроллер.i-i-s-prilozhenie-2-сенсоры-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.контроллер.i-i-s-prilozhenie-2-сенсоры-l.title'),
              icon: 'calendar',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.caption'),
            title: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.title'),
            children: [{
              link: 'i-i-s-prilozhenie-2-отчет-о-сервере-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-отчет-о-сервере-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-отчет-о-сервере-l.title'),
              icon: 'paperclip',
              children: null
            }, {
              link: 'i-i-s-prilozhenie-2-расположение-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-расположение-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-расположение-l.title'),
              icon: 'book',
              children: null
            }, {
              link: 'i-i-s-prilozhenie-2-серверная-l',
              caption: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-серверная-l.caption'),
              title: i18n.t('forms.application.sitemap.prilozhenie-2.сервер.i-i-s-prilozhenie-2-серверная-l.title'),
              icon: 'suitcase',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})